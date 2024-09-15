const InfusionPedestalTile = function() {
	AbstractPedestalTile.apply(this, arguments);
};

__inherit__(InfusionPedestalTile, AbstractPedestalTile, {
	isConnectable(altar) {
		return altar != null && altar.blockID == BlockID.infusion_altar;
	}
});

const InfusionAltarTile = function() {
	AbstractPedestalTile.apply(this, arguments);
	Object.assign(this.defaultValues, {
		progress: 0,
		powered: false
	});
};
InfusionAltarTile.PEDESTAL_OFFSETS = [
	[3, 0], [-3, 0], [0, 3], [0, -3],
	[2, 2], [-2, 2], [2, -2], [-2, -2]
];

__inherit__(InfusionAltarTile, AbstractPedestalTile, {
	client: {
		events: {
			loadPedestals(data, extra) {
				if (this.pedestals != null) {
					this.loadPedestals(data);
				} else {
					this.scheduledPedestals = data;
				}
			},
			infuse(data, extra) {
				this.setInfusing(data.infusing);
			},
			connectPedestal(data, extra) {
				this.connectPedestal(data[0], data[1]);
			},
			disconnectPedestal(data, extra) {
				this.disconnectPedestal(data[0], data[1], data[2]);
			}
		},
		load() {
			this.blockSource = BlockSource.getCurrentClientRegion();
			AbstractPedestalTile.prototype.client.load.apply(this, arguments);
			this.highlightedPedestals = {};
			this.pedestals = [];
			if (this.scheduledPedestals != null) {
				this.loadPedestals(this.scheduledPedestals);
				this.scheduledPedestals = null;
			}
		},
		loadPedestals(pedestals) {
			for (let offset = 0; offset < pedestals.length; offset++) {
				let data = pedestals[offset];
				if (data[2]) {
					this.connectPedestal(data[0], data[1]);
				} else if (this.indexOfConnectedToPedestal(data[0], data[1]) == -1) {
					this.loadPedestalHologram(data[0], data[1]);
				} else {
					this.disconnectPedestal(data[0], data[1]);
				}
			}
		},
		indexOfConnectedToPedestal(dx, dz) {
			for (let offset = 0; offset < this.pedestals.length; offset++) {
				let pedestal = this.pedestals[offset];
				if (pedestal != null && pedestal[0] == dx && pedestal[1] == dz) {
					return offset;
				}
			}
			return -1;
		},
		connectPedestal(dx, dz) {
			if (this.pedestals == null || this.indexOfConnectedToPedestal(dx, dz) != -1) {
				return;
			}
			this.pedestals.push([dx, dz]);
			this.unloadPedestalHologram(dx, dz);
		},
		disconnectPedestal(dx, dz, withoutHologram) {
			if (this.pedestals == null) {
				return;
			}
			let index = this.indexOfConnectedToPedestal(dx, dz);
			if (index != -1) {
				withoutHologram || this.loadPedestalHologram(dx, dz);
				this.pedestals.splice(index, 1);
			}
		},
		loadPedestalHologram(dx, dz) {
			if (this.highlightedPedestals == null || this.highlightedPedestals[dx + "," + dz] != null) {
				return;
			}
			let pedestal = new Animation.Item(this.x + 0.5 + dx, this.y + 0.5, this.z + 0.5 + dz);
			pedestal.setBlocklightMode();
			LevelDisplayedQueue.schedule(function() {
				pedestal.describeItem({
					size: 1,
					id: BlockID.infusion_pedestal,
					material: "dynamic_highlight",
					notRandomize: true
				});
				pedestal.load();
				let uniforms = pedestal.getShaderUniforms();
				uniforms.setUniformValue("mystical_agriculture", "TRANSLUCENCY", 0.5);
			});
			this.highlightedPedestals[dx + "," + dz] = pedestal;
		},
		unloadPedestalHologram(dx, dz) {
			if (this.highlightedPedestals == null) {
				return;
			}
			let pedestal = this.highlightedPedestals[dx + "," + dz];
			if (pedestal != null) {
				pedestal.destroy();
			}
			delete this.highlightedPedestals[dx + "," + dz];
		},
		unloadPedestalHolograms() {
			if (this.highlightedPedestals == null) {
				return;
			}
			for (let key in this.highlightedPedestals) {
				let offset = key.split(",");
				this.unloadPedestalHologram(parseInt(offset[0]), parseInt(offset[1]));
			}
		},
		setInfusing(infusing) {
			if (!infusing) {
				this.infusing = false;
				delete this.infusionParticles;
				delete this.infusionParticlesOffset;
				for (let index = 0, length = this.pedestals.length, offset; index < length; index++) {
					offset = this.pedestals[index];
					for (let particle = 0; particle < 10; particle++) {
						Particles.addParticle(EParticleType.SMOKE2, this.x + offset[0] + 0.5, this.y + 1.2, this.z + offset[1] + 0.5, 0, 0, 0, 18);
					}
				}
				for (let particle = 0; particle < 5; particle++) {
					Particles.addParticle(EParticleType.HAPPY_VILLAGER, this.x + 0.5, this.y + 1, this.z + 0.5, 0, 0, 0, 0);
				}
				return;
			}
			let particles = [];
			for (let index = 0, length = this.pedestals.length, offset; index < length; index++) {
				offset = this.pedestals[index];
				let pedestal = LocalTileEntity.get(this.x + offset[0], this.y, this.z + offset[1], this.dimension);
				if (pedestal != null) {
					let dx = this.x + 0.4 + Math.random() * 0.2;
					let dy = this.y + 1.2 + Math.random() * 0.2;
					let dz = this.z + 0.4 + Math.random() * 0.2;
					particles.push(this.bakeInfusionParticles(pedestal.floatingItemId, pedestal.floatingItemData, dx + offset[0], dy, dz + offset[1], dx, dy + 0.25, dz));
				}
			}
			this.infusionParticlesOffset = 0;
			this.infusionParticles = particles;
			this.infusing = true;
		},
		bakeInfusionParticles(id, data, x1, y1, z1, x2, y2, z2) {
			let particles = [];
		    let xDistance = x2 - x1;
		    let yDistance = y2 - y1;
		    let zDistance = z2 - z1;
		    let distance = Math.sqrt(xDistance * xDistance + yDistance * yDistance + zDistance * zDistance);
		    xDistance /= distance;
		    yDistance /= distance;
		    zDistance /= distance;
		    for (let offset = 0; offset < distance; offset += distance * 0.1) {
		        particles.push([id, data, x1 + xDistance * offset, y1 + yDistance * offset, z1 + zDistance * offset]);
		    }
		    return particles;
		},
		tick() {
			if (!this.floatingItemId || !this.infusing || !LevelDisplayedQueue.isDisplayed) {
				return;
			}
			let particles = this.infusionParticles;
			if (particles == null) {
				return;
			}
			for (let offset = 0; offset < particles.length; offset++) {
				let particle = particles[offset][this.infusionParticlesOffset];
				particle && Particles.addBreakingItemParticle(particle[0], particle[1], particle[2], particle[3], particle[4]);
			}
			this.infusionParticlesOffset = (this.infusionParticlesOffset + 1) % 10;
		},
		unload() {
			AbstractPedestalTile.prototype.client.unload.apply(this, arguments);
			this.unloadPedestalHolograms();
			delete this.pedestals;
			delete this.highlightedPedestals;
		}
	},
	load() {
		AbstractPedestalTile.prototype.load.apply(this, arguments);
		this.pedestals = [];
		let packet = [];
		for (let index = 0, length = InfusionAltarTile.PEDESTAL_OFFSETS.length, offset; index < length; index++) {
			offset = InfusionAltarTile.PEDESTAL_OFFSETS[index];
			let tile = TileEntity.getTileEntity(this.x + offset[0], this.y, this.z + offset[1]);
			if (tile != null && tile.blockID == BlockID.infusion_pedestal) {
				this.connectPedestal(tile, offset);
				packet.push(offset.slice().concat(true));
			} else {
				packet.push(offset.slice().concat(false));
			}
		}
		this.sendPacket("loadPedestals", packet);
	},
	connectPedestal(pedestal, offset) {
		if (this.pedestals == null || pedestal == null || pedestal.blockID != BlockID.infusion_pedestal || !pedestal.isConnectable(this)) {
			return;
		}
		this.pedestals.push(pedestal);
		this.sendPacket("connectPedestal", offset);
	},
	disconnectPedestal(pedestal, offset) {
		if (this.pedestals == null || pedestal == null || pedestal.blockID != BlockID.infusion_pedestal || !pedestal.isConnectable(this)) {
			return;
		}
		let index = this.pedestals.indexOf(pedestal);
		index != -1 && this.pedestals.splice(index, 1);
		if (pedestal.data.floatingItem.id != 0 && this.data.recipe != null) {
			this.data.progress = 0;
			delete this.data.recipe;
			this.sendPacket("infuse", { infusing: false });
		}
		this.sendPacket("disconnectPedestal", offset);
	},
	redstone(signal) {
		this.data.powered = signal.power > 0;
		if (this.pedestals != null && (this.data.progress == null || this.data.progress <= 0)) {
			this.infuse();
		}
	},
	tick() {
		if (this.data.recipe != null) {
			this.data.progress++;
			if (this.data.progress >= 100) {
				this.data.progress = 0;
				InfusionRecipeRegistry.infuse(this.data.recipe, this.data.floatingItem, this.pedestals.map(function(pedestal) {
					return pedestal.data.floatingItem;
				}));
				this.updateFloatingItem();
				for (let i = 0; i < this.pedestals.length; i++) {
					this.pedestals[i].updateFloatingItem();
				}
				delete this.data.recipe;
				this.sendPacket("infuse", { infusing: false });
				this.data.powered && this.infuse();
			}
			return;
		}
		if (this.data.powered && World.getThreadTime() % 5 == 0) {
			this.infuse();
		}
	},
	infuse() {
		let recipe = InfusionRecipeRegistry.match(this.data.floatingItem, this.pedestals.map(function(pedestal) {
			return pedestal.data.floatingItem;
		}));
		if (recipe != null) {
			this.sendPacket("infuse", { infusing: true });
			this.data.recipe = recipe;
			this.data.progress = 0;
		}
	}
});

InfusionAltarTile.searchPedestalAround = function(pedestal, then) {
	for (let i = 0, l = InfusionAltarTile.PEDESTAL_OFFSETS.length; i < l; i++) {
		let offset = InfusionAltarTile.PEDESTAL_OFFSETS[i];
		let altar = TileEntity.getTileEntity(pedestal.x - offset[0], pedestal.y, pedestal.z - offset[1], pedestal.blockSource);
		if (altar != null && altar.blockID == BlockID.infusion_altar) {
			then && then(altar, offset);
		}
	}
};

Callback.addCallback("TileEntityAdded", function(updatable, isTileEntity) {
	if (updatable != null && updatable.blockID == BlockID.infusion_pedestal) {
		InfusionAltarTile.searchPedestalAround(updatable, function(altar, offset) {
			altar.connectPedestal(updatable, offset);
		});
	}
});

Callback.addCallback("TileEntityRemoved", function(updatable) {
	if (updatable != null && updatable.blockID == BlockID.infusion_pedestal) {
		InfusionAltarTile.searchPedestalAround(updatable, function(altar, offset) {
			altar.disconnectPedestal(updatable, offset);
		});
	}
});


IDRegistry.genBlockID("infusion_pedestal");
Block.createBlock("infusion_pedestal", [
	{ name: "Infusion Pedestal", texture: [["stone", 0]], inCreative: true }
]);

{
	let renderer = new ICRender.Model();
	let model = BlockRenderer.createModel();
	model.addBox(1/8, 0, 1/8, 5/16, 1/8, 5/16, "stone", 0);
	model.addBox(11/16, 0, 1/8, 7/8, 1/8, 5/16, "stone", 0);
	model.addBox(1/8, 0, 11/16, 5/16, 1/8, 7/8, "stone", 0);
	model.addBox(11/16, 0, 11/16, 7/8, 1/8, 7/8, "stone", 0);
	model.addBox(3/16, 1/8, 3/16, 13/16, 1/4, 13/16, "stone", 0);
	model.addBox(1/4, 1/4, 1/4, 3/4, 7/8, 3/4, [
		[ "stone", 0 ],
		[ "infusion_pedestal_top", 0 ],
		[ "stone", 0 ]
	]);
	model.addBox(3/16, 7/8, 3/16, 13/16, 1, 5/16, [
		[ "stone", 0 ],
		[ "infusion_pedestal_top", 0 ]
	]);
	model.addBox(3/16, 7/8, 11/16, 13/16, 1, 13/16, [
		[ "stone", 0 ],
		[ "infusion_pedestal_top", 0 ]
	]);
	model.addBox(3/16, 7/8, 5/16, 5/16, 1, 11/16, [
		[ "stone", 0 ],
		[ "infusion_pedestal_top", 0 ],
		[ "stone", 0 ],
		[ "stone", 0 ],
		[ "infusion_pedestal_top", 0 ]
	]);
	model.addBox(11/16, 7/8, 5/16, 13/16, 1, 11/16, [
		[ "stone", 0 ],
		[ "infusion_pedestal_top", 0 ],
		[ "stone", 0 ],
		[ "stone", 0 ],
		[ "infusion_pedestal_top", 0 ]
	]);
	model.addBox(51/64, 11/16, 5/16, 13/16, 7/8, 11/16, [
		[ "stone", 0 ],
		[ "stone", 0 ],
		[ "stone", 0 ],
		[ "stone", 0 ],
		[ "infusion_pedestal_side", 0 ]
	]);
	model.addBox(3/16, 11/16, 5/16, 13/64, 7/8, 11/16, [
		[ "stone", 0 ],
		[ "stone", 0 ],
		[ "stone", 0 ],
		[ "stone", 0 ],
		[ "infusion_pedestal_side", 0 ]
	]);
	model.addBox(5/16, 11/16, 3/16, 11/16, 7/8, 13/64, [
		[ "stone", 0 ],
		[ "stone", 0 ],
		[ "infusion_pedestal_side", 0 ],
		[ "infusion_pedestal_side", 0 ],
		[ "stone", 0 ]
	]);
	model.addBox(5/16, 11/16, 51/64, 11/16, 7/8, 13/16, [
		[ "stone", 0 ],
		[ "stone", 0 ],
		[ "infusion_pedestal_side", 0 ],
		[ "infusion_pedestal_side", 0 ],
		[ "stone", 0 ]
	]);
	renderer.addEntry(model);
	BlockRenderer.setStaticICRender(BlockID.infusion_pedestal, -1, renderer);

	let collision = new ICRender.CollisionShape();
	let shape = collision.addEntry();
	shape.addBox(3/16, 1/8, 3/16, 13/16, 1, 13/16);
	shape.addBox(1/8, 0, 1/8, 7/8, 1/8, 7/8);
	BlockRenderer.setCustomCollisionAndRaycastShape(BlockID.infusion_pedestal, -1, collision);
}

TileEntity.registerPrototype(BlockID.infusion_pedestal, new InfusionPedestalTile());


IDRegistry.genBlockID("infusion_altar");
Block.createBlock("infusion_altar", [
	{ name: "Infusion Altar", texture: [[ "stone", 0 ]], inCreative: true }
]);

{
	let renderer = new ICRender.Model();
	let model = BlockRenderer.createModel();
	model.addBox(0, 0, 0, 1, 1/2, 1, [
		[ "infusion_altar_bottom", 0 ],
		[ "infusion_altar_top", 0 ],
		[ "infusion_altar_side", 0 ]
	]);
	model.addBox(3/16, 13/16, 3/16, 13/16, 7/8, 13/16, "infusion_pedestal_top", 0);
	model.addBox(3/8, 5/8, 3/8, 5/8, 11/16, 5/8, [
		[ "infusion_altar_bottom", 0 ],
		[ "infusion_pedestal_top", 0 ],
		[ "infusion_altar_side", 0 ]
	]);
	model.addBox(5/16, 11/16, 5/16, 11/16, 13/16, 11/16, [
		[ "infusion_pedestal_top", 0 ],
		[ "infusion_pedestal_top", 0 ],
		[ "infusion_altar_side", 0 ]
	]);
	model.addBox(1/8, 27/32, 1/4, 3/16, 29/32, 3/4, [
		[ "infusion_pedestal_top", 0 ],
		[ "infusion_pedestal_top", 0 ],
		[ "infusion_pedestal_top", 0 ],
		[ "infusion_altar_side", 0 ]
	]);
	model.addBox(13/16, 27/32, 1/4, 7/8, 29/32, 3/4, [
		[ "infusion_pedestal_top", 0 ],
		[ "infusion_pedestal_top", 0 ],
		[ "infusion_pedestal_top", 0 ],
		[ "infusion_altar_side", 0 ]
	]);
	model.addBox(1/4, 27/32, 1/8, 3/4, 29/32, 3/16, [
		[ "infusion_pedestal_top", 0 ],
		[ "infusion_pedestal_top", 0 ],
		[ "infusion_altar_side", 0 ]
	]);
	model.addBox(1/4, 27/32, 13/16, 3/4, 29/32, 7/8, [
		[ "infusion_pedestal_top", 0 ],
		[ "infusion_pedestal_top", 0 ],
		[ "infusion_altar_side", 0 ],
		[ "infusion_altar_side", 0 ],
		[ "infusion_pedestal_top", 0 ],
		[ "infusion_altar_side", 0 ]
	]);
	model.addBox(1/32, 1/2, 1/4, 1/4, 5/8, 3/4, [
		[ "infusion_altar_bottom", 0 ],
		[ "infusion_pedestal_top", 0 ],
		[ "infusion_altar_side", 0 ]
	]);
	model.addBox(3/4, 1/2, 1/4, 31/32, 5/8, 3/4, [
		[ "infusion_altar_bottom", 0 ],
		[ "infusion_pedestal_top", 0 ],
		[ "infusion_altar_side", 0 ]
	]);
	model.addBox(1/8, 1/2, 3/4, 7/8, 5/8, 31/32, [
		[ "infusion_altar_bottom", 0 ],
		[ "infusion_pedestal_top", 0 ],
		[ "infusion_altar_side", 0 ]
	]);
	model.addBox(1/8, 1/2, 1/32, 7/8, 5/8, 1/4, [
		[ "infusion_altar_bottom", 0 ],
		[ "infusion_pedestal_top", 0 ],
		[ "infusion_altar_side", 0 ]
	]);
	model.addBox(7/8, 1/2, 1/8, 31/32, 5/8, 1/4, [
		[ "infusion_altar_bottom", 0 ],
		[ "infusion_pedestal_top", 0 ],
		[ "infusion_altar_side", 0 ]
	]);
	model.addBox(7/8, 1/2, 3/4, 31/32, 5/8, 7/8, [
		[ "infusion_altar_bottom", 0 ],
		[ "infusion_pedestal_top", 0 ],
		[ "infusion_altar_side", 0 ]
	]);
	model.addBox(1/32, 1/2, 3/4, 1/8, 5/8, 7/8, [
		[ "infusion_altar_bottom", 0 ],
		[ "infusion_pedestal_top", 0 ],
		[ "infusion_altar_side", 0 ]
	]);
	model.addBox(1/32, 1/2, 1/8, 1/8, 5/8, 1/4, [
		[ "infusion_altar_bottom", 0 ],
		[ "infusion_pedestal_top", 0 ],
		[ "infusion_altar_side", 0 ]
	]);
	model.addBox(1/64, 1/2, 7/8, 1/8, 9/16, 63/64, [
		[ "infusion_altar_bottom", 0 ],
		[ "infusion_pedestal_top", 0 ],
		[ "infusion_altar_side", 0 ]
	]);
	model.addBox(7/8, 1/2, 7/8, 63/64, 9/16, 63/64, [
		[ "infusion_altar_bottom", 0 ],
		[ "infusion_pedestal_top", 0 ],
		[ "infusion_altar_side", 0 ]
	]);
	model.addBox(7/8, 1/2, 1/64, 63/64, 9/16, 1/8, [
		[ "infusion_altar_bottom", 0 ],
		[ "infusion_pedestal_top", 0 ],
		[ "infusion_altar_side", 0 ]
	]);
	model.addBox(1/64, 1/2, 1/64, 1/8, 9/16, 1/8, [
		[ "infusion_altar_bottom", 0 ],
		[ "infusion_pedestal_top", 0 ],
		[ "infusion_altar_side", 0 ]
	]);
	model.addBox(5/16, 1/2, 5/16, 11/16, 5/8, 11/16, [
		[ "infusion_altar_bottom", 0 ],
		[ "infusion_pedestal_top", 0 ],
		[ "infusion_altar_side", 0 ]
	]);
	renderer.addEntry(model);
	BlockRenderer.setStaticICRender(BlockID.infusion_altar, -1, renderer);

	let collision = new ICRender.CollisionShape();
	let shape = collision.addEntry();
	shape.addBox(0, 0, 0, 1, 5/8, 1);
	shape.addBox(1/8, 5/8, 1/8, 7/8, 29/32, 7/8);
	BlockRenderer.setCustomCollisionAndRaycastShape(BlockID.infusion_altar, -1, collision);
}

TileEntity.registerPrototype(BlockID.infusion_altar, new InfusionAltarTile());


const PedestalStorage = function() {};

PedestalStorage.prototype = {
	getSlot(name) {
		return this.tileEntity.data.floatingItem;
	},
	setSlot(name, id, count, data, extra) {
		this.tileEntity.replaceFloatingItem(id, count, data, extra);
	},
	getSlotMaxStack(name) {
		return 1;
	},
	getContainerSlots() {
		return ["floatingItem"];
	},
	clearContainer() {
		this.tileEntity.replaceFloatingItem(0, 0, 0, null);
	}
};

{
	let storage = new PedestalStorage();
	StorageInterface.createInterface(BlockID.infusion_pedestal, storage);
	StorageInterface.createInterface(BlockID.infusion_altar, storage);
}


const InfusionRecipeRegistry = {
	recipes: [],
	fastResultRecipes: {},
	fastMiddleRecipes: {},

	registerRecipe(result, middle, ingredients, callback) {
		result = this.unwrapItemStack(result);
		middle = this.unwrapItemStack(middle);
		if (result == null || middle == null) {
			Logger.Log("Mystical Agriculture: Malformed recipe " + (result ? result.id + ":" + result.data : "<malformed recipe id>") + " within " + (middle ? middle.id + ":" + middle.data : "<malformed middle id>") + " in middle!", "ERROR");
			return;
		}
		let pedestals = [];
		for (let i = 0, l = ingredients.length; i < l; i++) {
			let ingredient = this.unwrapItemStack(ingredients[i]);
			if (Array.isArray(ingredient)) {
				pedestals = pedestals.concat(ingredient);
			} else if (ingredient != null) {
				pedestals.push(ingredient);
			} else {
				Logger.Log("Mystical Agriculture: Malformed ingredient at offset " + i + " in recipe " + result.id + ":" + result.data + ", it will be skipped!", "WARNING");
			}
		}
		if (pedestals.length > InfusionAltarTile.PEDESTAL_OFFSETS) {
			Logger.Log("Mystical Agriculture: Too much ingredients on pedestals (" + pedestals.length + " of " + InfusionAltarTile.PEDESTAL_OFFSETS + "), left one will be screwed!", "WARNING");
			pedestals = pedestals.slice(0, InfusionAltarTile.PEDESTAL_OFFSETS);
		}
		let recipe = {
			result: result,
			middle: middle,
			ingredients: pedestals
		};
		callback && (recipe.callback = callback);
		this.recipes.push(recipe);
		this.fastResultRecipes[result.id] || (this.fastResultRecipes[result.id] = []);
		this.fastResultRecipes[result.id].push(recipe);
		this.fastMiddleRecipes[middle.id] || (this.fastMiddleRecipes[middle.id] = []);
		this.fastMiddleRecipes[middle.id].push(recipe);
	},
	unwrapItemStack(stack) {
		let id = this.unwrapNamespacedId(stack);
		if (id == null) {
			return null;
		}
		if (typeof stack != "object") {
			return { id: id, data: -1 };
		}
		let result = { id: id, data: stack.data != null ? stack.data : -1 };
		stack.extra && (result.extra = stack.extra);
		if (stack.count == null || stack.count == 1) {
			return result;
		}
		let flattened = [];
		for (let i = 0; i < stack.count; i++) {
			flattened.push(i != 0 ? ModAPI.cloneObject(result, true) : result);
		}
		return flattened;
	},
	unwrapNamespacedId(id) {
		id = id !== null && typeof id == "object" ? id.id : id;
		if (typeof id == "string") {
			id = BlockID[id] || ItemID[id] || VanillaBlockID[id] || VanillaItemID[id];
		}
		return typeof id == "number" && !isNaN(id) ? id : null;
	},
	containsRecipe(result) {
		result = this.unwrapNamespacedId(result);
		return result != null && this.fastResultRecipes[id] && this.fastResultRecipes[id].length > 0;
	},
	containsIngredientInMiddle(middle) {
		middle = this.unwrapNamespacedId(middle);
		return middle != null && this.fastMiddleRecipes[id] && this.fastMiddleRecipes[id].length > 0;
	},
	match(middle, ingredients) {
		let middleRecipes = this.unwrapNamespacedId(middle);
		if (middleRecipes != null) {
			middleRecipes = this.fastMiddleRecipes[middleRecipes];
			if (middleRecipes != null) {
				middle = this.unwrapItemStack(middle);
				middleRecipes = middleRecipes.filter(function(recipe) {
					return recipe.middle.data == -1 || recipe.middle.data == middle.data;
				});
			}
		}
		if (middleRecipes == null || middleRecipes.length == 0) {
			return null;
		}
		let self = this;
		ingredients = ingredients.map(function(ingredient) {
			return self.unwrapItemStack(ingredient);
		}).filter(function(ingredient) {
			return ingredient.id != 0;
		});
		for (let i = 0; i < middleRecipes.length; i++) {
			let recipe = middleRecipes[i];
			let matches = recipe.ingredients.slice();
			for (let j = 0; j < ingredients.length; j++) {
				let ingredient = ingredients[j];
				let requests = matches.length;
				for (let k = 0; k < requests; k++) {
					if (ingredient.id == matches[k].id && (matches[k].data == -1 || ingredient.data == matches[k].data)) {
						matches.splice(k, 1);
						break;
					}
				}
				if (requests == matches.length) {
					break;
				}
			}
			if (matches.length == 0) {
				return recipe;
			}
		}
		return null;
	},
	infuse(recipe, altar, pedestals) {
		let middle = JSON.parse(JSON.stringify(altar));
		let ingredients = JSON.parse(JSON.stringify(pedestals));
		altar.id = recipe.result.id;
		altar.data = recipe.result.data != -1 ? recipe.result.data : 0;
		altar.extra = recipe.result.extra || null;
		for (let i = 0; i < pedestals.length; i++) {
			let pedestal = pedestals[i];
			pedestal.id = pedestal.data = 0;
			pedestal.extra = null;
		}
		recipe.callback && recipe.callback(recipe, middle, ingredients, altar, pedestals);
	}
};
