const ReprocessorTile = function() {
	this.defaultValues || (this.defaultValues = {});
	Object.assign(this.defaultValues, {
		tier: "basic",
		progress: 0,
		fuel: 0,
		burning: 0,
		energy: 0
	});
};

ReprocessorTile.prototype = {
	useNetworkItemContainer: true,
	getScreenName(player, coords) {
		return "main";
	},
	getScreenByName(name) {
		return ReprocessorUI;
	},
	init() {
		this.data.tier = Reprocessor.blockTiers[this.blockID];
	},
	load() {
		let tier = Reprocessor.tiers[this.data.tier];
		if (tier == null) {
			this.init();
			tier = Reprocessor.tiers[this.data.tier];
		}
		if (tier == null) {
			Logger.Log("Mystical Agriculture: Reprocessor tier " + JSON.stringify(this.data.tier) + " does not exists or apparently deprecated!", "ERROR");
			this.selfDestroy();
			return;
		}
		this.capacity = tier.capacity;
		this.usage = tier.usage;
		this.operation = tier.operation;
	},
	tick() {
		if (this.data.energy < this.capacity) {
			if (this.data.burning <= 0) {
				let fuel = this.container.getSlot("fuel_slot");
				if (fuel.id != 0) {
					let duration = Recipes.getFuelBurnDuration(fuel.id, fuel.data);
					if (duration > 0) {
						this.container.setSlot("fuel_slot", fuel.id, fuel.count - 1, fuel.data, fuel.extra);
						this.data.fuel = this.data.burning = duration * 20;
					}
				}
			}
			if (this.data.burning > 0) {
				let received = Math.min(this.usage * 2, this.data.burning, this.capacity - this.data.energy);
				this.data.burning -= received;
				this.data.energy += received;
			}
		}

		if (this.data.energy >= this.usage) {
			let input = this.container.getSlot("input_slot");
			if (input.id == this.input || (input.id != 0 && this.input == null)) {
				if (this.recipe == null || this.input == null) {
					if (Reprocessor.recipes.hasOwnProperty(input.id)) {
						this.recipe = Reprocessor.recipes[input.id];
						this.input = input.id;
					} else {
						delete this.recipe;
						delete this.input;
					}
				}
				if (this.recipe != null) {
					let output = this.container.getSlot("output_slot");
					if (output.count == 0 || (output.id == this.recipe && output.count <= 62)) {
						this.data.progress++;
						this.data.energy -= this.usage;
						if (this.data.progress >= this.operation) {
							output.count += 2;
							this.container.setSlot("output_slot", this.recipe, output.count, output.data, output.extra);
							input.count--;
							this.container.setSlot("input_slot", input.id, input.count, input.data, input.extra);
							this.data.progress = 0;
						}
					}
				}
			} else {
				this.data.progress = 0;
				delete this.recipe;
				delete this.input;
			}
		}

		this.container.setScale("burning_scale", this.data.fuel != 0 ? this.data.burning / this.data.fuel : 0);
		this.container.setScale("energy_scale", this.data.energy / this.capacity);
		this.container.setScale("progress_scale", this.data.progress / this.operation);
		this.container.validateAll();
		this.container.sendChanges();
	}
};


const Reprocessor = {
	recipes: {},
	addRecipe: function(input, output) {
		this.recipes[input] = output;
	},
	tiers: {},
	blockTiers: {},
	registerTier(type, block, operation, usage, capacity, color) {
		if (this.tiers.hasOwnProperty(type)) {
			Logger.Log("Mystical Agriculture: Reprocessor tier " + JSON.stringify(type) + " already exist, registration skipped!", "WARNING");
			return;
		}
		let tier = this.tiers[type] = {
			type: type,
			operation: operation,
			usage: usage,
			capacity: capacity,
			color: color
		};
		if (this.blockTiers.hasOwnProperty(block)) {
			Logger.Log("Mystical Agriculture: Reprocessor block " + block + " of tier " + JSON.stringify(type) + " already exist and linked to " + JSON.stringify(this.blockTiers[block]) + ", skipping this block...", "WARNING");
		} else if (block != 0) {
			this.blockTiers[block] = type;
			Item.registerNameOverrideFunction(block, function(item, translation, name) {
				return translation + Native.Color.GRAY + "\n" +
					translate("Operation Speed: %st", tier.color + tier.operation + Native.Color.GRAY) + "\n" +
					translate("Fuel Usage: %s/t", tier.color + tier.usage + Native.Color.GRAY) + "\n" +
					translate("Fuel Capacity: %s", tier.color + tier.capacity + Native.Color.GRAY);
			});
		}
	}
};

Reprocessor.addRecipe(ItemID.inferium_seeds, ItemID.inferium_essence);
Reprocessor.addRecipe(ItemID.dirt_seeds, ItemID.dirt_essence);
Reprocessor.addRecipe(ItemID.air_seeds, ItemID.air_essence);
Reprocessor.addRecipe(ItemID.earth_seeds, ItemID.earth_essence);
Reprocessor.addRecipe(ItemID.netherite_seeds, ItemID.netherite_essence);
Reprocessor.addRecipe(ItemID.prismarine_seeds, ItemID.prismarine_essence);
Reprocessor.addRecipe(ItemID.nature_seeds, ItemID.nature_essence);
Reprocessor.addRecipe(ItemID.wood_seeds, ItemID.wood_essence);
Reprocessor.addRecipe(ItemID.stone_seeds, ItemID.stone_essence);
Reprocessor.addRecipe(ItemID.coal_seeds, ItemID.coal_essence);
Reprocessor.addRecipe(ItemID.iron_seeds, ItemID.iron_essence);
Reprocessor.addRecipe(ItemID.gold_seeds, ItemID.gold_essence);
Reprocessor.addRecipe(ItemID.lapis_lazuli_seeds, ItemID.lapis_essence);
Reprocessor.addRecipe(ItemID.redstone_seeds, ItemID.redstone_essence);
Reprocessor.addRecipe(ItemID.diamond_seeds, ItemID.diamond_essence);
Reprocessor.addRecipe(ItemID.emerald_seeds, ItemID.emerald_essence);
Reprocessor.addRecipe(ItemID.end_seeds, ItemID.end_essence);
Reprocessor.addRecipe(ItemID.nether_seeds, ItemID.nether_essence);
Reprocessor.addRecipe(ItemID.glowstone_seeds, ItemID.glowstone_essence);
Reprocessor.addRecipe(ItemID.fire_seeds, ItemID.fire_essence);
Reprocessor.addRecipe(ItemID.water_seeds, ItemID.water_essence);
Reprocessor.addRecipe(ItemID.ice_seeds, ItemID.ice_essence);
Reprocessor.addRecipe(ItemID.obsidian_seeds, ItemID.obsidian_essence);
Reprocessor.addRecipe(ItemID.nether_quartz_seeds, ItemID.quartz_essence);
Reprocessor.addRecipe(ItemID.zombie_seeds, ItemID.zombie_essence);
Reprocessor.addRecipe(ItemID.cow_seeds, ItemID.cow_essence);
Reprocessor.addRecipe(ItemID.wither_skeleton_seeds, ItemID.wither_skeleton_essence);
Reprocessor.addRecipe(ItemID.turtle_seeds, ItemID.turtle_essence);
Reprocessor.addRecipe(ItemID.blaze_seeds, ItemID.blaze_essence);
Reprocessor.addRecipe(ItemID.bronze_seeds, ItemID.bronze_essence);
Reprocessor.addRecipe(ItemID.chicken_seeds, ItemID.chicken_essence);
Reprocessor.addRecipe(ItemID.copper_seeds, ItemID.copper_essence);
Reprocessor.addRecipe(ItemID.tin_seeds, ItemID.tin_essence);
Reprocessor.addRecipe(ItemID.creeper_seeds, ItemID.creeper_essence);
Reprocessor.addRecipe(ItemID.enderman_seeds, ItemID.enderman_essence);
Reprocessor.addRecipe(ItemID.fish_seeds, ItemID.fish_essence);
Reprocessor.addRecipe(ItemID.ghast_seeds, ItemID.ghast_essence);
Reprocessor.addRecipe(ItemID.lead_seeds, ItemID.lead_essence);
Reprocessor.addRecipe(ItemID.pig_seeds, ItemID.pig_essence);
Reprocessor.addRecipe(ItemID.steel_seeds, ItemID.steel_essence);
Reprocessor.addRecipe(ItemID.rabbit_seeds, ItemID.rabbit_essence);
Reprocessor.addRecipe(ItemID.sheep_seeds, ItemID.sheep_essence);
Reprocessor.addRecipe(ItemID.silver_seeds, ItemID.silver_essence);
Reprocessor.addRecipe(ItemID.skeleton_seeds, ItemID.skeleton_essence);
Reprocessor.addRecipe(ItemID.slime_seeds, ItemID.slime_essence);
Reprocessor.addRecipe(ItemID.spider_seeds, ItemID.spider_essence);
Reprocessor.addRecipe(ItemID.squid_seeds, ItemID.squid_essence);


const ReprocessorUI = new UI.StandardWindow({
	standard: {
		header: {
			text: {
				text: translate("Seed Reprocessor")
			}
		},
		inventory: {
			standard: true
		},
		background: {
			standard: true
		}
	},
	drawing: [{
		type: "bitmap",
		x: 700,
		y: 150,
		bitmap: "arrow_bar_background",
		scale: 4.2
	}, {
		type: "bitmap",
		x: 425,
		y: 120,
		bitmap: "fire_background",
		scale: 4.1
	}, {
		type: "bitmap",
		x: 350,
		y: 100,
		bitmap: "ground",
		scale: 1.8
	}],
	elements: {
		progress_scale: {
			type: "scale",
			x: 700,
			y: 150,
			direction: 0,
			bitmap: "arrow_bar_scale",
			scale: 4.2
		},
		burning_scale: {
			type: "scale",
			x: 425,
			y: 120,
			direction: 1,
			bitmap: "fire_scale",
			scale: 4.1
		},
		fuel_slot: {
			type: "slot",
			x: 420,
			y: 180,
			bitmap: "slot",
			size: 60
		},
		input_slot: {
			type: "slot",
			x: 600,
			y: 150,
			bitmap: "slot",
			size: 60
		},
		energy_scale: {
			type: "scale",
			x: 350,
			y: 100,
			direction: 1,
			bitmap: "scale",
			scale: 1.8
		},
		output_slot: {
			type: "slot",
			x: 830,
			y: 130,
			bitmap: "slot",
			size: 100
		}
	}
});


IDRegistry.genBlockID("basic_reprocessor");
Block.createBlockWithRotation("basic_reprocessor", [
	{ name: "Seed Reprocessor", texture: [["basic_reprocessor_side", 0], ["basic_reprocessor_side", 0], ["basic_reprocessor_side", 0], ["basic_reprocessor_front", 0], ["basic_reprocessor_side", 0], ["basic_reprocessor_side", 0]], inCreative: true }
]);
Reprocessor.registerTier("basic", BlockID.basic_reprocessor, 200, 20, 80000, Native.Color.GRAY);

IDRegistry.genBlockID("inferium_reprocessor");
Block.createBlockWithRotation("inferium_reprocessor", [
	{ name: "Inferium Seed Reprocessor", texture: [["inferium_reprocessor_side", 0], ["inferium_reprocessor_side", 0], ["inferium_reprocessor_side", 0], ["inferium_reprocessor_front", 0], ["inferium_reprocessor_side", 0], ["inferium_reprocessor_side", 0]], inCreative: true }
]);
Reprocessor.registerTier("inferium", BlockID.inferium_reprocessor, 100, 40, 120000, Native.Color.YELLOW);

IDRegistry.genBlockID("prudentium_reprocessor");
Block.createBlockWithRotation("prudentium_reprocessor", [
	{ name: "Prudentium Seed Reprocessor", texture: [["prudentium_reprocessor_side", 0], ["prudentium_reprocessor_side", 0], ["prudentium_reprocessor_side", 0], ["prudentium_reprocessor_front", 0], ["prudentium_reprocessor_side", 0], ["prudentium_reprocessor_side", 0]], inCreative: true }
]);
Reprocessor.registerTier("prudentium", BlockID.prudentium_reprocessor, 80, 60, 180000, Native.Color.GREEN);

IDRegistry.genBlockID("tertium_reprocessor");
Block.createBlockWithRotation("tertium_reprocessor", [
	{ name: "Tertium Seed Reprocessor", texture: [["tertium_reprocessor_side", 0], ["tertium_reprocessor_side", 0], ["tertium_reprocessor_side", 0], ["tertium_reprocessor_front", 0], ["tertium_reprocessor_side", 0], ["tertium_reprocessor_side", 0]], inCreative: true }
]);
Reprocessor.registerTier("tertium", BlockID.tertium_reprocessor, 55, 100, 300000, Native.Color.GOLD);

IDRegistry.genBlockID("imperium_reprocessor");
Block.createBlockWithRotation("imperium_reprocessor", [
	{ name: "Imperium Seed Reprocessor", texture: [["imperium_reprocessor_side", 0], ["imperium_reprocessor_side", 0], ["imperium_reprocessor_side", 0], ["imperium_reprocessor_front", 0], ["imperium_reprocessor_side", 0], ["imperium_reprocessor_side", 0]], inCreative: true }
]);
Reprocessor.registerTier("imperium", BlockID.imperium_reprocessor, 20, 320, 420000, Native.Color.AQUA);

IDRegistry.genBlockID("supremium_reprocessor");
Block.createBlockWithRotation("supremium_reprocessor", [
	{ name: "Supremium Seed Reprocessor", texture: [["supremium_reprocessor_side", 0], ["supremium_reprocessor_side", 0], ["supremium_reprocessor_side", 0], ["supremium_reprocessor_front", 0], ["supremium_reprocessor_side", 0], ["supremium_reprocessor_side", 0]], inCreative: true }
]);
Reprocessor.registerTier("supremium", BlockID.supremium_reprocessor, 5, 1440, 640000, Native.Color.RED);

{
	let reprocessor = new ReprocessorTile();
	TileEntity.registerPrototype(BlockID.basic_reprocessor, reprocessor);
	TileEntity.registerPrototype(BlockID.inferium_reprocessor, reprocessor);
	TileEntity.registerPrototype(BlockID.prudentium_reprocessor, reprocessor);
	TileEntity.registerPrototype(BlockID.tertium_reprocessor, reprocessor);
	TileEntity.registerPrototype(BlockID.imperium_reprocessor, reprocessor);
	TileEntity.registerPrototype(BlockID.supremium_reprocessor, reprocessor);
}
