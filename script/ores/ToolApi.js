ToolAPI.registerBlockMaterial(BlockID.inferium_ore, "stone", 2, true);
Block.registerDropFunction("inferium_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 2, 4, enchant.experience);
		return [[ItemID.inferium_essence, Math.floor(Math.random() * 3) + 1, 0]]
	}
	return [];
}, 3);

ToolAPI.registerBlockMaterial(BlockID.prosperity_ore, "stone", 2, true);
Block.registerDropFunction("prosperity_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 2, 4, enchant.experience);
		return [[ItemID.prosperity_shard, Math.floor(Math.random() * 2) + 1, 0]]
	}
	return [];
}, 3);

ToolAPI.registerBlockMaterial(BlockID.nether_inferium_ore, "stone", 2, true);
Block.registerDropFunction("nether_inferium_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 2, 4, enchant.experience);
		return [[ItemID.inferium_essence, Math.floor(Math.random() * 3) + 1, 0]]
	}
	return [];
}, 3);

ToolAPI.registerBlockMaterial(BlockID.nether_prosperity_ore, "stone", 2, true);
Block.registerDropFunction("nether_prosperity_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 2, 4, enchant.experience);
		return [[ItemID.prosperity_shard, Math.floor(Math.random() * 2) + 1, 0]]
	}
	return [];
}, 3);

ToolAPI.registerBlockMaterial(BlockID.soulium_ore, "stone", 2, true);
Block.registerDropFunction("soulium_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 2, 3, enchant.experience);
		return [[ItemID.soulium_dust, Math.floor(Math.random() * 4) + 1, 0]]
	}
	return [];
}, 3);

ToolAPI.registerBlockMaterial(BlockID.end_inferium_ore, "stone", 2, true);
Block.registerDropFunction("end_inferium_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 2, 4, enchant.experience);
		return [[ItemID.inferium_essence, Math.floor(Math.random() * 3) + 1, 0]]
	}
	return [];
}, 3);

ToolAPI.registerBlockMaterial(BlockID.end_prosperity_ore, "stone", 2, true);
Block.registerDropFunction("end_prosperity_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 2, 4, enchant.experience);
		return [[ItemID.prosperity_shard, Math.floor(Math.random() * 2) + 1, 0]]
	}
	return [];
}, 3);

ToolAPI.registerBlockMaterial(BlockID.soulstone, "stone", 2, true);
Block.registerDropFunction("soulstone", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		return [[BlockID.soulstone_cobble, 1, 0]]
	}
	return [];
}, 3);

ToolAPI.registerBlockMaterial(BlockID.inferium_block, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.prosperity_block, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.prudentium_block, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.intermedium_block, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.superium_block, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.supremium_block, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.prosperity_ingot_block, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.inferium_ingot_block, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.prudentium_ingot_block, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.intermedium_ingot_block, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.superium_ingot_block, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.supremium_ingot_block, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.prosperity_gemstone_block, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.inferium_gemstone_block, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.prudentium_gemstone_block, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.intermedium_gemstone_block, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.superium_gemstone_block, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.supremium_gemstone_block, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.soulstone_cobble, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.soulstone_smooth_slab_side, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.soulstone_smooth, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.soulstone_chiseled_bricks, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.soulstone_cracked_bricks, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.soulium_gemstone_block, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.soulstone_bricks, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.soulium_ingot_block, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.soul_glass, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.soulium_block, "stone", 2, true);
