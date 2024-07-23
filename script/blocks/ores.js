IDRegistry.genBlockID("inferium_ore");
Block.createBlock("inferium_ore", [
	{ name: "Inferium Ore", texture: [["inferium_ore", 0]], inCreative: true }
]);
Recipes.addFurnace(BlockID.inferium_ore, ItemID.inferium_essence, 0);
ToolAPI.registerBlockMaterial(BlockID.inferium_ore, "stone", 2, true);

Block.registerDropFunction("inferium_ore", function(coords, blockID, blockData, level, enchant) {
	if (level > 1) {
		if (enchant.silk) {
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 2, 4, enchant.experience);
		return [[ItemID.inferium_essence, Math.floor(Math.random() * 3) + 1, 0]];
	}
	return [];
}, 3);


IDRegistry.genBlockID("prosperity_ore");
Block.createBlock("prosperity_ore", [
	{ name: "Prosperity Ore", texture: [["prosperity_ore", 0]], inCreative: true }
]);
Recipes.addFurnace(BlockID.prosperity_ore, ItemID.prosperity_shard, 0);
ToolAPI.registerBlockMaterial(BlockID.prosperity_ore, "stone", 2, true);

Block.registerDropFunction("prosperity_ore", function(coords, blockID, blockData, level, enchant) {
	if (level > 1) {
		if (enchant.silk) {
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 2, 4, enchant.experience);
		return [[ItemID.prosperity_shard, Math.floor(Math.random() * 2) + 1, 0]];
	}
	return [];
}, 3);


Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random, dimensiondimensionId, chunkSeed, worldSeed, dimensionSeed) {
	for (var vein = 0; vein < 15; vein++) {
		if (random.nextFloat() < .8) {
			GenerationUtils.generateOre(chunkX * 16 + random.nextInt(16), 10 + random.nextInt(55), chunkZ * 16 + random.nextInt(16), BlockID.inferium_ore, 0, 4, false, dimensionSeed);
		} else {
			GenerationUtils.generateOre(chunkX * 16 + random.nextInt(16), 10 + random.nextInt(55), chunkZ * 16 + random.nextInt(16), BlockID.prosperity_ore, 0, 4, false, dimensionSeed);
		}
	}
});


IDRegistry.genBlockID("nether_inferium_ore");
Block.createBlock("nether_inferium_ore", [
	{ name: "Nether Inferium Ore", texture: [["nether_inferium_ore", 0]], inCreative: true }
]);
Recipes.addFurnace(BlockID.nether_inferium_ore, ItemID.inferium_essence, 0);
ToolAPI.registerBlockMaterial(BlockID.nether_inferium_ore, "stone", 2, true);

Block.registerDropFunction("nether_inferium_ore", function(coords, blockID, blockData, level, enchant) {
	if (level > 1) {
		if (enchant.silk) {
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 2, 4, enchant.experience);
		return [[ItemID.inferium_essence, Math.floor(Math.random() * 3) + 1, 0]];
	}
	return [];
}, 3);


IDRegistry.genBlockID("nether_prosperity_ore");
Block.createBlock("nether_prosperity_ore", [
	{ name: "Nether Prosperity Ore", texture: [["nether_prosperity_ore", 0]], inCreative: true }
]);
Recipes.addFurnace(BlockID.nether_prosperity_ore, ItemID.prosperity_shard, 0);
ToolAPI.registerBlockMaterial(BlockID.nether_prosperity_ore, "stone", 2, true);

Block.registerDropFunction("nether_prosperity_ore", function(coords, blockID, blockData, level, enchant) {
	if (level > 1) {
		if (enchant.silk) {
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 2, 4, enchant.experience);
		return [[ItemID.prosperity_shard, Math.floor(Math.random() * 2) + 1, 0]];
	}
	return [];
}, 3);


Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ, random, dimensionId, chunkSeed, worldSeed, dimensionSeed) {
	for (var vein = 0; vein < 15; vein++) {
		if (random.nextFloat() < .8) {
			GenerationUtils.generateOre(chunkX * 16 + random.nextInt(16), 10 + random.nextInt(70), chunkZ * 16 + random.nextInt(16), BlockID.nether_inferium_ore, 0, 4, false, dimensionSeed);
		} else {
			GenerationUtils.generateOre(chunkX * 16 + random.nextInt(16), 10 + random.nextInt(70), chunkZ * 16 + random.nextInt(16), BlockID.nether_prosperity_ore, 0, 4, false, dimensionSeed);
		}
	}
});


IDRegistry.genBlockID("end_inferium_ore");
Block.createBlock("end_inferium_ore", [
	{ name: "End Inferium Ore", texture: [["end_inferium_ore", 0]], inCreative: true }
]);
Recipes.addFurnace(BlockID.end_inferium_ore, ItemID.inferium_essence, 0);
ToolAPI.registerBlockMaterial(BlockID.end_inferium_ore, "stone", 2, true);

Block.registerDropFunction("end_inferium_ore", function(coords, blockID, blockData, level, enchant) {
	if (level > 2) {
		if (enchant.silk) {
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 2, 4, enchant.experience);
		return [[ItemID.inferium_essence, Math.floor(Math.random() * 3) + 1, 0]];
	}
	return [];
}, 3);


IDRegistry.genBlockID("end_prosperity_ore");
Block.createBlock("end_prosperity_ore", [
	{ name: "End Prosperity Ore", texture: [["end_prosperity_ore", 0]], inCreative: true }
]);
Recipes.addFurnace(BlockID.end_prosperity_ore, ItemID.prosperity_shard, 0);
ToolAPI.registerBlockMaterial(BlockID.end_prosperity_ore, "stone", 2, true);

Block.registerDropFunction("end_prosperity_ore", function(coords, blockID, blockData, level, enchant) {
	if (level > 2) {
		if (enchant.silk) {
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 2, 4, enchant.experience);
		return [[ItemID.prosperity_shard, Math.floor(Math.random() * 2) + 1, 0]];
	}
	return [];
}, 3);


Callback.addCallback("GenerateEndChunk", function(chunkX, chunkZ, random, dimensionId, chunkSeed, worldSeed, dimensionSeed) {
	for (var vein = 0; vein < 15; vein++) {
		if (random.nextFloat() < .8) {
			GenerationUtils.generateOre(chunkX * 16 + random.nextInt(16), 10 + random.nextInt(65), chunkZ * 16 + random.nextInt(16), BlockID.end_inferium_ore, 0, 4, false, dimensionSeed);
		} else {
			GenerationUtils.generateOre(chunkX * 16 + random.nextInt(16), 10 + random.nextInt(65), chunkZ * 16 + random.nextInt(16), BlockID.end_prosperity_ore, 0, 4, false, dimensionSeed);
		}
	}
});


IDRegistry.genBlockID("soulium_ore");
Block.createBlock("soulium_ore", [
	{ name: "Soulium Ore", texture: [["soulium_ore", 0]], inCreative: true }
]);
Recipes.addFurnace(BlockID.soulium_ore, ItemID.soulium_dust, 0);
ToolAPI.registerBlockMaterial(BlockID.soulium_ore, "stone", 2, true);

Block.registerDropFunction("soulium_ore", function(coords, blockID, blockData, level, enchant) {
	if (level > 1) {
		if (enchant.silk) {
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 2, 3, enchant.experience);
		return [[ItemID.soulium_dust, Math.floor(Math.random() * 4) + 1, 0]];
	}
	return [];
}, 3);

World.addGenerationCallback("GenerateNetherChunk", function(chunkX, chunkZ, random) {
	if (random.nextInt(100) < MysticalGenerationUtils.SOULSTONE_FREQUENCY) {
		let region = BlockSource.getCurrentWorldGen();
		if (region != null) {
			let coords = MysticalGenerationUtils.randomChunkXYZ(random, chunkX, chunkZ, 32, 96);
			if (region.getBlockId(coords.x, coords.y, coords.z) == VanillaBlockID.netherrack) {
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.soulstone, 0, 72, false, random.nextInt());
				GenerationUtils.generateOre(coords.x + random.nextInt(6), coords.y, coords.z + random.nextInt(6), BlockID.soulstone, 0, 64, false, random.nextInt());
				GenerationUtils.generateOre(coords.x + random.nextInt(6), coords.y, coords.z + random.nextInt(6), BlockID.soulium_ore, 0, 25, false, random.nextInt());
			}
		}
	}
}, "mystical:soulium_ore");
