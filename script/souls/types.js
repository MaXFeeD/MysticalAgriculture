const EntitySoulTypeRegistry = {
	entity2type: {},
	names: {},
	capacities: {},

	register(identifier, name, capacity, types) {
		if (this.names.hasOwnProperty(identifier)) {
			Logger.Log("Mystical Agriculture: Entity soul type " + JSON.stringify(identifier) + " already registered!", "WARNING");
			return false;
		}
		for (let offset = 3; offset < arguments.length; offset++) {
			if (this.entity2type.hasOwnProperty(arguments[offset])) {
				Logger.Log("Mystical Agriculture: Entity with type " + arguments[offset] + " already occupied, it will be skipped...", "WARNING");
				continue;
			}
			this.entity2type[arguments[offset]] = identifier;
		}
		this.names[identifier] = name;
		this.capacities[identifier] = capacity;
		return true;
	},
	registerWithSeeds(identifier, seeds, essence, name, capacity, types) {
		let registeringArguments = Array.prototype.slice.call(arguments);
		registeringArguments.splice(1, 2);
		if (this.register.apply(this, registeringArguments)) {
			MysticalRecipes.addSoliumSeeds(seeds, essence, identifier, capacity);
			return true;
		}
		return false;
	},
	getTypeUniversal(entity) {
		return Entity.getTypeAddon(entity) || Entity.getType(entity);
	},
	gather(entity) {
		if (typeof entity != "number") {
			if (this.names.hasOwnProperty(entity)) {
				return {
					type: entity,
					name: this.names[entity],
					capacity: this.capacities[entity]
				};
			}
		} else if (!isNaN(entity)) {
			let type = this.getTypeUniversal(entity);
			if (this.entity2type.hasOwnProperty(type)) {
				type = this.entity2type[type];
				return {
					type: type,
					name: this.names[type],
					capacity: this.capacities[type]
				};
			}
		}
		return null;
	},
	unregister(identifier) {
		if (!this.names.hasOwnProperty(identifier)) {
			return;
		}
		for (let entity in this.entity2type) {
			if (this.entity2type[entity] == identifier) {
				delete this.entity2type[entity];
			}
		}
		delete this.names[identifier];
		delete this.capacities[identifier];
	}
};

EntitySoulTypeRegistry.registerWithSeeds("pig", ItemID.pig_seeds, ItemID.prudentium_essence, "Pig", 8, EEntityType.PIG);
EntitySoulTypeRegistry.registerWithSeeds("chicken", ItemID.chicken_seeds, ItemID.prudentium_essence, "Chicken", 8, EEntityType.CHICKEN);
EntitySoulTypeRegistry.registerWithSeeds("cow", ItemID.cow_seeds, ItemID.prudentium_essence, "Cow", 8, EEntityType.COW); // EEntityType.MUSHROOM_COW
EntitySoulTypeRegistry.registerWithSeeds("sheep", ItemID.sheep_seeds, ItemID.prudentium_essence, "Sheep", 8, EEntityType.SHEEP);
EntitySoulTypeRegistry.registerWithSeeds("squid", ItemID.squid_seeds, ItemID.prudentium_essence, "Squid", 6, EEntityType.SQUID);
// EntitySoulTypeRegistry.registerWithSeeds("fish", ItemID.fish_seeds, ItemID.prudentium_essence, "Fish", 6, EEntityType.COD, EEntityType.SALMON, EEntityType.TROPICALFISH, EEntityType.PUFFERFISH);
EntitySoulTypeRegistry.registerWithSeeds("slime", ItemID.slime_seeds, ItemID.prudentium_essence, "Slime", 12, EEntityType.SLIME); // EEntityType.LAVA_SLIME
EntitySoulTypeRegistry.registerWithSeeds("turtle", ItemID.turtle_seeds, ItemID.prudentium_essence, "Turtle", 6, EEntityType.TURTLE);
EntitySoulTypeRegistry.registerWithSeeds("zombie", ItemID.zombie_seeds, ItemID.intermedium_essence, "Zombie", 10, EEntityType.ZOMBIE, EEntityType.ZOMBIE_VILLAGER, EEntityType.ZOMBIE_VILLAGER_V2); // EEntityType.ZOMBIE_HORSE, EEntityType.HUSK, EEntityType.DROWNED
EntitySoulTypeRegistry.registerWithSeeds("skeleton", ItemID.skeleton_seeds, ItemID.intermedium_essence, "Skeleton", 10, EEntityType.SKELETON); // EEntityType.SKELETON_HORSE, EEntityType.STRAY
EntitySoulTypeRegistry.registerWithSeeds("creeper", ItemID.creeper_seeds, ItemID.intermedium_essence, "Creeper", 10, EEntityType.CREEPER);
EntitySoulTypeRegistry.registerWithSeeds("spider", ItemID.spider_seeds, ItemID.intermedium_essence, "Spider", 10, EEntityType.SPIDER, EEntityType.CAVE_SPIDER);
EntitySoulTypeRegistry.registerWithSeeds("rabbit", ItemID.rabbit_seeds, ItemID.intermedium_essence, "Rabbit", 6, EEntityType.RABBIT);
EntitySoulTypeRegistry.registerWithSeeds("blaze", ItemID.blaze_seeds, ItemID.superium_essence, "Blaze", 10, EEntityType.BLAZE);
EntitySoulTypeRegistry.registerWithSeeds("ghast", ItemID.ghast_seeds, ItemID.superium_essence, "Ghast", 4, EEntityType.GHAST);
EntitySoulTypeRegistry.registerWithSeeds("enderman", ItemID.enderman_seeds, ItemID.superium_essence, "Enderman", 8, EEntityType.ENDERMAN);
EntitySoulTypeRegistry.registerWithSeeds("wither_skeleton", ItemID.wither_skeleton_seeds, ItemID.supremium_essence, "Wither Skeleton", 8, EEntityType.WITHER_SKELETON);
