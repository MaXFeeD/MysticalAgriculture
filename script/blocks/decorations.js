IDRegistry.genBlockID("soulstone");
Block.createBlock("soulstone", [
	{ name: "Soulstone", texture: [["soulstone", 0]], inCreative: true }
]);
Recipes.addFurnace(BlockID.soulstone, BlockID.soulstone_smooth, 0);
ToolAPI.registerBlockMaterial(BlockID.soulstone, "stone", 2, true);

Block.registerDropFunction("soulstone", function(coords, blockID, blockData, level, enchant) {
	if (level > 2) {
		if (enchant.silk) {
			return [[blockID, 1, 0]];
		}
		return [[BlockID.soulstone_cobble, 1, 0]];
	}
	return [];
}, 3);


IDRegistry.genBlockID("soulstone_bricks");
Block.createBlock("soulstone_bricks", [
	{ name: "Soulstone Bricks", texture: [["soulstone_bricks", 0]], inCreative: true }
]);
ToolAPI.registerBlockMaterial(BlockID.soulstone_bricks, "stone", 2, true);


IDRegistry.genBlockID("soulstone_smooth");
Block.createBlock("soulstone_smooth", [
	{ name: "Smooth Soulstone", texture: [["soulstone_smooth", 0]], inCreative: true }
]);
Recipes.addFurnace(BlockID.soulstone_smooth, ItemID.soul_dust, 0);
ToolAPI.registerBlockMaterial(BlockID.soulstone_smooth, "stone", 2, true);


IDRegistry.genBlockID("soulstone_cracked_bricks");
Block.createBlock("soulstone_cracked_bricks", [
	{ name: "Cracked Soulstone Bricks", texture: [["soulstone_cracked_bricks", 0]], inCreative: true }
]);
ToolAPI.registerBlockMaterial(BlockID.soulstone_cracked_bricks, "stone", 2, true);


IDRegistry.genBlockID("soulstone_chiseled_bricks");
Block.createBlock("soulstone_chiseled_bricks", [
	{ name: "Chiseled Soulstone Bricks", texture: [["soulstone_chiseled_bricks", 0]], inCreative: true }
]);
ToolAPI.registerBlockMaterial(BlockID.soulstone_chiseled_bricks, "stone", 2, true);


IDRegistry.genBlockID("soulstone_cobble");
Block.createBlock("soulstone_cobble", [
	{ name: "Soulstone Cobble", texture: [["soulstone_cobble", 0]], inCreative: true }
]);
Recipes.addFurnace(BlockID.soulstone_cobble, BlockID.soulstone, 0);
ToolAPI.registerBlockMaterial(BlockID.soulstone_cobble, "stone", 2, true);


IDRegistry.genBlockID("soul_glass");
Block.createBlock("soul_glass", [
	{ name: "Soul Glass", texture: [["soul_glass", 0]], inCreative: true }
], BLOCK_GLASS);
ToolAPI.registerBlockMaterial(BlockID.soul_glass, "stone", 2, true);

Recipes.addShaped({ id: BlockID.soul_glass, count: 1, data: 0 }, [
    " # ",
    "#b#",
    " # "
], ["b", VanillaBlockID.glass, 0, "#", ItemID.soul_dust, 0]);


IDRegistry.genBlockID("witherproof_block");
Block.createBlock("witherproof_block", [
    { name: "Witherproof Block", texture: [["witherproof_block", 0]], inCreative: true }
], BLOCK_ANTIBOOM);
ToolAPI.registerBlockMaterial(BlockID.witherproof_block, "stone", 2, true);


IDRegistry.genBlockID("witherproof_bricks");
Block.createBlock("witherproof_bricks", [
    { name: "Witherproof Bricks", texture: [["witherproof_bricks", 0]], inCreative: true }
], BLOCK_ANTIBOOM);
ToolAPI.registerBlockMaterial(BlockID.witherproof_bricks, "stone", 2, true);


IDRegistry.genBlockID("witherproof_glass");
Block.createBlock("witherproof_glass", [
    { name: "Witherproof Glass", texture: [["witherproof_glass", 0]], inCreative: true }
], GLASS_ANTIBOOM);
ToolAPI.registerBlockMaterial(BlockID.witherproof_glass, "stone", 2, true);
