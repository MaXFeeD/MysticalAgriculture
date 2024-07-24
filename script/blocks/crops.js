const CropTier = {
	ONE: 1,
	TWO: 2,
	THREE: 3,
	FOUR: 4,
	FIVE: 5
};

const CropType = {
	RESOURCE: "plant",
	MOB: "mob"
};

const CropRegistry = {
	GROW_LIGHT_LEVEL: 9,

	register(key, name, tier, type, essence, farmlands) {
		farmlands || (farmlands = [VanillaBlockID.farmland]);
		this.createPlant(key, name, tier, type, 7, essence, farmlands);
		this.createSeeds(key, name, tier, farmlands);
	},
	createPlant(key, name, tier, type, growth, essence, farmlands) {
		let variants = [];
		for (let data = 0; data <= growth; data++) {
			variants.push({
				name: java.lang.String.format("%s Crop", name),
				texture: data != growth ? [[type + "_resources", data]] : [[key + "_plant", 0]],
				isTech: true
			});
		}
		let id = IDRegistry.genBlockID(key + "_plant");
		Block.createBlock(key + "_plant", variants, PLANT_BLOCKTYPE);
		Block.setShape(id, 3/16, 0, 3/16, 13/16, 1, 13/16, -1);
		BlockRenderer.setCustomCollisionShape(id, -1, new ICRender.CollisionShape());

		Block.registerNeighbourChangeFunction(id, function(coords, block, changeCoords, region) {
			if (!~farmlands.indexOf(region.getBlockId(coords.x, coords.y - 1, coords.z))) {
				region.destroyBlock(coords.x, coords.y, coords.z, true);
			}
		});
		Block.setRandomTickCallback(id, function(x, y, z, id, data, region) {
			if (region.getLightLevel(x, y, z) >= CropRegistry.GROW_LIGHT_LEVEL) {
				region.setBlock(x, y, z, id, data < growth ? data + 1 : data);
			}
		});
		Block.registerClickFunctionForID(id, function(coords, item, block, player) {
			if (block.data >= growth || (item.id != ItemID.mystical_fertilizer && item.id != ItemID.fertilized_essence)) {
				return;
			}
			if (item.id == ItemID.mystical_fertilizer) {
				block.data = growth;
			} else if (item.id == ItemID.fertilized_essence) {
				block.data = Math.min(block.data + randomInt(1, 7), growth);
			}
			let region = BlockSource.getDefaultForActor(player);
			for (let offset = 0; offset < 16; offset++) {
				Particles.addParticle(EParticleType.HAPPY_VILLAGER, coords.x + Math.random(), coords.z + Math.random(), coords.y + Math.random(), 0, 0, 0);
			}
			region.setBlock(coords.x, coords.y, coords.z, block.id, block.data);
			let actor = new PlayerActor(player);
			if (actor.getGameMode() != EGameMode.CREATIVE) {
				Entity.setCarriedItem(player, item.id, item.count - 1, item.data, item.extra);
			}
		});
		Block.registerDropFunction(id, function(coords, id, data, diggingLevel) {
			if (data < growth) {
				return [[ItemID[key + "_seeds"], 1, 0]];
			}
			let drop = [
				[ItemID[key + "_seeds"], randomInt(1, 3), 0],
				[essence, 1, 0]
			];
			if (Math.random() <= 0.1) {
				drop.push([ItemID.fertilized_essence, 1, 0]);
			}
			return drop;
		});
	},
	createSeeds(key, name, tier, farmlands) {
		let id = IDRegistry.genItemID(key + "_seeds");
		Item.createItem(key + "_seeds", java.lang.String.format("%s Seeds", name), { name: key + "_seeds", meta: 0 });
		Item.addCreativeGroup("seeds", translate("Resource Crops"), [ id ]);

        let color = [Native.Color.YELLOW, Native.Color.GREEN, Native.Color.GOLD, Native.Color.BLUE, Native.Color.RED][(tier - 1) % 5];
        Item.registerNameOverrideFunction(id, function(item, translation, name) {
            return translation + "\n" + Native.Color.GRAY + translate("Tier: %s", color + tier);
        });
		Item.registerUseFunctionForID(id, function(coords, item, block, player) {
			if (!~farmlands.indexOf(block.id)) {
				return;
			}
			let region = BlockSource.getDefaultForActor(player);
			region.setBlock(coords.x, coords.y + 1, coords.z, BlockID[key + "_plant"], 0);
			let actor = new PlayerActor(player);
			if (actor.getGameMode() != EGameMode.CREATIVE) {
				let item = Entity.getCarriedItem(player);
				Entity.setCarriedItem(player, item.id, item.count - 1, item.data, item.extra);
			}
			Commands.execAt("playsound dig.grass @a[r=16] ~~~ 0.6 0.8", coords.x, coords.y, coords.z);
		});
	}
};


CropRegistry.register("inferium", "Inferium", CropTier.ONE, CropType.RESOURCE, ItemID.inferium_essence);

Recipes.addShaped({ id: ItemID.inferium_seeds, count: 1, data: 0 }, [
	"###",
	"#b#",
	"###"
], ["b", VanillaItemID.wheat_seeds, 0, "#", ItemID.inferium_essence, 0]);


CropRegistry.register("dirt", "Dirt", CropTier.ONE, CropType.RESOURCE, ItemID.dirt_essence);
MysticalRecipes.addSeeds(ItemID.dirt_seeds, ItemID.inferium_essence, VanillaBlockID.dirt);

CropRegistry.register("air", "Air", CropTier.ONE, CropType.RESOURCE, ItemID.air_essence);
MysticalRecipes.addSeeds(ItemID.air_seeds, ItemID.inferium_essence, ItemID.air_agglomeratio);

CropRegistry.register("earth", "Earth", CropTier.ONE, CropType.RESOURCE, ItemID.earth_essence);
MysticalRecipes.addSeeds(ItemID.earth_seeds, ItemID.inferium_essence, ItemID.earth_agglomeratio);

CropRegistry.register("nature", "Nature", CropTier.ONE, CropType.RESOURCE, ItemID.nature_essence);
MysticalRecipes.addSeeds(ItemID.nature_seeds, ItemID.inferium_essence, ItemID.nature_agglomeratio);

CropRegistry.register("wood", "Wood", CropTier.ONE, CropType.RESOURCE, ItemID.wood_essence);
MysticalRecipes.addSeeds(ItemID.wood_seeds, ItemID.inferium_essence, VanillaBlockID.log, -1);
MysticalRecipes.addSeeds(ItemID.wood_seeds, ItemID.inferium_essence, VanillaBlockID.log2, -1);

CropRegistry.register("stone", "Stone", CropTier.ONE, CropType.RESOURCE, ItemID.stone_essence);
MysticalRecipes.addSeeds(ItemID.stone_seeds, ItemID.inferium_essence, VanillaBlockID.stone);

CropRegistry.register("coal", "Coal", CropTier.TWO, CropType.RESOURCE, ItemID.coal_essence);
MysticalRecipes.addSeeds(ItemID.coal_seeds, ItemID.prudentium_essence, VanillaItemID.coal, -1);

CropRegistry.register("iron", "Iron", CropTier.THREE, CropType.RESOURCE, ItemID.iron_essence);
MysticalRecipes.addSeeds(ItemID.iron_seeds, ItemID.tertium_essence, VanillaItemID.iron_ingot);

CropRegistry.register("gold", "Gold", CropTier.FOUR, CropType.RESOURCE, ItemID.gold_essence);
MysticalRecipes.addSeeds(ItemID.gold_seeds, ItemID.imperium_essence, VanillaItemID.gold_ingot);

CropRegistry.register("lapis_lazuli", "Lapis Lazuli", CropTier.FOUR, CropType.RESOURCE, ItemID.lapis_essence);
MysticalRecipes.addSeeds(ItemID.lapis_lazuli_seeds, ItemID.imperium_essence, VanillaItemID.dye, 4);

CropRegistry.register("redstone", "Redstone", CropTier.THREE, CropType.RESOURCE, ItemID.redstone_essence);
MysticalRecipes.addSeeds(ItemID.redstone_seeds, ItemID.tertium_essence, VanillaItemID.redstone);

CropRegistry.register("diamond", "Diamond", CropTier.FIVE, CropType.RESOURCE, ItemID.diamond_essence);
MysticalRecipes.addSeeds(ItemID.diamond_seeds, ItemID.supremium_essence, VanillaItemID.diamond);

CropRegistry.register("emerald", "Emerald", CropTier.FIVE, CropType.RESOURCE, ItemID.emerald_essence);
MysticalRecipes.addSeeds(ItemID.emerald_seeds, ItemID.supremium_essence, VanillaItemID.emerald);

CropRegistry.register("prismarine", "Prismarine", CropTier.THREE, CropType.RESOURCE, ItemID.prismarine_essence);
MysticalRecipes.addSeeds(ItemID.prismarine_seeds, ItemID.tertium_essence, ItemID.prismarine_agglomeratio);

CropRegistry.register("netherite", "Netherite", CropTier.FIVE, CropType.RESOURCE, ItemID.netherite_essence);
MysticalRecipes.addSeeds(ItemID.netherite_seeds, ItemID.supremium_essence, 728);

CropRegistry.register("glowstone", "Glowstone", CropTier.THREE, CropType.RESOURCE, ItemID.glowstone_essence);
MysticalRecipes.addSeeds(ItemID.glowstone_seeds, ItemID.tertium_essence, VanillaItemID.glowstone_dust);

CropRegistry.register("fire", "Fire", CropTier.ONE, CropType.RESOURCE, ItemID.fire_essence);
MysticalRecipes.addSeeds(ItemID.fire_seeds, ItemID.inferium_essence, ItemID.fire_agglomeratio);

CropRegistry.register("ice", "Ice", CropTier.ONE, CropType.RESOURCE, ItemID.ice_essence);
MysticalRecipes.addSeeds(ItemID.ice_seeds, ItemID.inferium_essence, VanillaBlockID.ice);

CropRegistry.register("water", "Water", CropTier.ONE, CropType.RESOURCE, ItemID.water_essence);
MysticalRecipes.addSeeds(ItemID.water_seeds, ItemID.inferium_essence, ItemID.water_agglomeratio);

CropRegistry.register("nether", "Nether", CropTier.ONE, CropType.RESOURCE, ItemID.nether_essence);
MysticalRecipes.addSeeds(ItemID.nether_seeds, ItemID.inferium_essence, ItemID.nether_agglomeratio);

CropRegistry.register("end", "End", CropTier.ONE, CropType.RESOURCE, ItemID.end_essence);
MysticalRecipes.addSeeds(ItemID.end_seeds, ItemID.inferium_essence, ItemID.end_agglomeratio);

CropRegistry.register("obsidian", "Obsidian", CropTier.THREE, CropType.RESOURCE, ItemID.obsidian_essence);
MysticalRecipes.addSeeds(ItemID.obsidian_seeds, ItemID.tertium_essence, VanillaBlockID.obsidian);

CropRegistry.register("nether_quartz", "Nether Quartz", CropTier.THREE, CropType.RESOURCE, ItemID.quartz_essence);
MysticalRecipes.addSeeds(ItemID.nether_quartz_seeds, ItemID.tertium_essence, VanillaItemID.quartz);

CropRegistry.register("zombie", "Zombie", CropTier.THREE, CropType.MOB, ItemID.zombie_essence);
CropRegistry.register("cow", "Cow", CropTier.TWO, CropType.MOB, ItemID.cow_essence);
CropRegistry.register("wither_skeleton", "Wither Skeleton", CropTier.FIVE, CropType.MOB, ItemID.wither_skeleton_essence);
CropRegistry.register("turtle", "Turtle", CropTier.TWO, CropType.MOB, ItemID.turtle_essence);
CropRegistry.register("blaze", "Blaze", CropTier.FOUR, CropType.MOB, ItemID.blaze_essence);
CropRegistry.register("creeper", "Creeper", CropTier.THREE, CropType.MOB, ItemID.creeper_essence);
CropRegistry.register("chicken", "Chicken", CropTier.TWO, CropType.MOB, ItemID.chicken_essence);
CropRegistry.register("fish", "Fish", CropTier.TWO, CropType.MOB, ItemID.fish_essence);
CropRegistry.register("ghast", "Ghast", CropTier.FOUR, CropType.MOB, ItemID.ghast_essence);
CropRegistry.register("enderman", "Enderman", CropTier.FOUR, CropType.MOB, ItemID.enderman_essence);
CropRegistry.register("pig", "Pig", CropTier.TWO, CropType.MOB, ItemID.pig_essence);
CropRegistry.register("rabbit", "Rabbit", CropTier.THREE, CropType.MOB, ItemID.rabbit_essence);
CropRegistry.register("silver", "Silver", CropTier.FOUR, CropType.MOB, ItemID.silver_essence);
CropRegistry.register("skeleton", "Skeleton", CropTier.THREE, CropType.MOB, ItemID.skeleton_essence);
CropRegistry.register("sheep", "Sheep", CropTier.TWO, CropType.MOB, ItemID.sheep_essence);
CropRegistry.register("spider", "Spider", CropTier.THREE, CropType.MOB, ItemID.spider_essence);
CropRegistry.register("squid", "Squid", CropTier.TWO, CropType.MOB, ItemID.squid_essence);
CropRegistry.register("slime", "Slime", CropTier.TWO, CropType.MOB, ItemID.slime_essence);

// TODO: Move to integrations!
CropRegistry.register("bronze", "Bronze", CropTier.THREE, CropType.RESOURCE, ItemID.bronze_essence);
CropRegistry.register("copper", "Copper", CropTier.THREE, CropType.RESOURCE, ItemID.copper_essence);
CropRegistry.register("tin", "Tin", CropTier.THREE, CropType.RESOURCE, ItemID.tin_essence);
CropRegistry.register("steel", "Steel", CropTier.FOUR, CropType.RESOURCE, ItemID.steel_essence);
CropRegistry.register("lead", "Lead", CropTier.THREE, CropType.RESOURCE, ItemID.lead_essence);
