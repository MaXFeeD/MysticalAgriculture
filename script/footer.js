Item.addCreativeGroup("ores", translate("Ores"), [
	BlockID.inferium_ore,
	BlockID.prosperity_ore,
	BlockID.nether_inferium_ore,
	BlockID.nether_prosperity_ore,
	BlockID.soulium_ore,
	BlockID.end_inferium_ore,
	BlockID.end_prosperity_ore
]);

Item.addCreativeGroup("essence_blocks", translate("Essence Blocks"), [
	BlockID.inferium_block,
	BlockID.prosperity_block,
	BlockID.prudentium_block,
	BlockID.intermedium_block,
	BlockID.superium_block,
	BlockID.supremium_block,
	BlockID.soulium_block,

	BlockID.prosperity_ingot_block,
	BlockID.inferium_ingot_block,
	BlockID.prudentium_ingot_block,
	BlockID.intermedium_ingot_block,
	BlockID.superium_ingot_block,
	BlockID.supremium_ingot_block,
	BlockID.soulium_ingot_block,

	BlockID.prosperity_gemstone_block,
	BlockID.inferium_gemstone_block,
	BlockID.prudentium_gemstone_block,
	BlockID.intermedium_gemstone_block,
	BlockID.superium_gemstone_block,
	BlockID.supremium_gemstone_block,
	BlockID.soulium_gemstone_block
]);

Item.addCreativeGroup("soulstone", translate("Soulstone Blocks"), [
	BlockID.soulstone_cobble,
	BlockID.soulstone,
	BlockID.soul_glass,
	BlockID.soulstone_bricks,
	BlockID.soulstone_cracked_bricks,
	BlockID.soulstone_chiseled_bricks,
	BlockID.soulstone_smooth
]);

Item.addCreativeGroup("witherproof", translate("Witherproof Blocks"), [
	BlockID.witherproof_block,
	BlockID.witherproof_bricks,
	BlockID.witherproof_glass
]);

Item.addCreativeGroup("reprocessor", translate("Seed Reprocessors"), [
	BlockID.basic_reprocessor,
	BlockID.inferium_reprocessor,
	BlockID.prudentium_reprocessor,
	BlockID.intermedium_reprocessor,
	BlockID.superium_reprocessor,
	BlockID.supremium_reprocessor
]);

Item.addCreativeGroup("fertilizer", translate("Growth Accelerators"), [
	ItemID.mystical_fertilizer,
	ItemID.fertilized_essence
]);

Item.addCreativeGroup("agglomeratio", translate("Agglomerations"), [
	ItemID.air_agglomeratio,
	ItemID.earth_agglomeratio,
	ItemID.water_agglomeratio,
	ItemID.fire_agglomeratio,
	ItemID.nature_agglomeratio,
	ItemID.end_agglomeratio,
	ItemID.nether_agglomeratio,
	ItemID.prismarine_agglomeratio
]);

Item.addCreativeGroup("material", translate("Materials"), [
	ItemID.prosperity_shard,
	ItemID.inferium_essence,
	ItemID.prudentium_essence,
	ItemID.intermedium_essence,
	ItemID.superium_essence,
	ItemID.supremium_essence,
	ItemID.soulium_dust,
	ItemID.soul_dust,
	ItemID.crafting_seed_base,
	ItemID.soulium_seed_base,
	ItemID.blank_skull
]);

Item.addCreativeGroup("essence", translate("Essences"), [
	ItemID.air_essence,
	ItemID.earth_essence,
	ItemID.water_essence,
	ItemID.fire_essence,

	ItemID.nature_essence,
	ItemID.dirt_essence,
	ItemID.wood_essence,
	ItemID.stone_essence,
	ItemID.coal_essence,
	ItemID.iron_essence,
	ItemID.gold_essence,
	ItemID.lapis_essence,
	ItemID.redstone_essence,
	ItemID.diamond_essence,
	ItemID.netherite_essence,
	ItemID.emerald_essence,
	ItemID.nether_essence,
	ItemID.end_essence,
	ItemID.prismarine_essence,
	ItemID.glowstone_essence,
	ItemID.ice_essence,
	ItemID.obsidian_essence,
	ItemID.quartz_essence,

	ItemID.zombie_essence,
	ItemID.cow_essence,
	ItemID.wither_skeleton_essence,
	ItemID.turtle_essence,
	ItemID.blaze_essence,
	ItemID.chicken_essence,
	ItemID.creeper_essence,
	ItemID.enderman_essence,
	ItemID.fish_essence,
	ItemID.ghast_essence,
	ItemID.pig_essence,
	ItemID.rabbit_essence,
	ItemID.sheep_essence,
	ItemID.skeleton_essence,
	ItemID.slime_essence,
	ItemID.spider_essence,
	ItemID.squid_essence,

	ItemID.bronze_essence,
	ItemID.tin_essence,
	ItemID.copper_essence,
	ItemID.lead_essence,
	ItemID.steel_essence,
	ItemID.silver_essence
]);

for (let soul in EntitySoulTypeRegistry.capacities) {
	Item.addToCreative(ItemID.soul_jar, 1, EntitySoulTypeRegistry.capacities[soul] * 2, new ItemExtraData().putString("soulType", soul));
}

["passive", "hostile", "creative"].forEach(function(attuned) {
	Item.addToCreative(ItemID.soulium_dagger, 1, 0, new ItemExtraData().putString("attuned", attuned));
});

Item.addCreativeGroup("soul", translate("Soul Extraction"), [
	ItemID.soul_jar,
	ItemID.soulium_dagger
]);

Item.addCreativeGroup("ingot", translate("Ingots"), [
	ItemID.prosperity_ingot,
	ItemID.inferium_ingot,
	ItemID.soulium_ingot,
	ItemID.prudentium_ingot,
	ItemID.intermedium_ingot,
	ItemID.superium_ingot,
	ItemID.supremium_ingot
]);

Item.addCreativeGroup("nugget", translate("Nuggets"), [
	ItemID.prosperity_nugget,
	ItemID.inferium_nugget,
	ItemID.soulium_nugget,
	ItemID.prudentium_nugget,
	ItemID.intermedium_nugget,
	ItemID.superium_nugget,
	ItemID.supremium_nugget
]);

Item.addCreativeGroup("gem", translate("Gemstones"), [
	ItemID.prosperity_gemstone,
	ItemID.inferium_gemstone,
	ItemID.soulium_gemstone,
	ItemID.prudentium_gemstone,
	ItemID.intermedium_gemstone,
	ItemID.superium_gemstone,
	ItemID.supremium_gemstone
]);

Item.addCreativeGroup("sword", translate("Swords"), [
	ItemID.inferium_sword,
	ItemID.prudentium_sword,
	ItemID.intermedium_sword,
	ItemID.superium_sword,
	ItemID.supremium_sword
]);

Item.addCreativeGroup("pickaxe", translate("Pickaxes"), [
	ItemID.inferium_pickaxe,
	ItemID.prudentium_pickaxe,
	ItemID.intermedium_pickaxe,
	ItemID.superium_pickaxe,
	ItemID.supremium_pickaxe
]);

Item.addCreativeGroup("axe", translate("Axes"), [
	ItemID.inferium_axe,
	ItemID.prudentium_axe,
	ItemID.intermedium_axe,
	ItemID.superium_axe,
	ItemID.supremium_axe
]);

Item.addCreativeGroup("shovel", translate("Shovels"), [
	ItemID.inferium_shovel,
	ItemID.prudentium_shovel,
	ItemID.intermedium_shovel,
	ItemID.superium_shovel,
	ItemID.supremium_shovel
]);

Item.addCreativeGroup("hoe", translate("Hoes"), [
	ItemID.inferium_hoe,
	ItemID.prudentium_hoe,
	ItemID.intermedium_hoe,
	ItemID.superium_hoe,
	ItemID.supremium_hoe
]);

Item.addCreativeGroup("helmet", translate("Helmets"), [
	ItemID.inferium_helmet,
	ItemID.prudentium_helmet,
	ItemID.intermedium_helmet,
	ItemID.superium_helmet,
	ItemID.supremium_helmet
]);

Item.addCreativeGroup("chestplate", translate("Chestplates"), [
	ItemID.inferium_chestplate,
	ItemID.prudentium_chestplate,
	ItemID.intermedium_chestplate,
	ItemID.superium_chestplate,
	ItemID.supremium_chestplate
]);

Item.addCreativeGroup("leggings", translate("Leggings"), [
	ItemID.inferium_leggings,
	ItemID.prudentium_leggings,
	ItemID.intermedium_leggings,
	ItemID.superium_leggings,
	ItemID.supremium_leggings
]);

Item.addCreativeGroup("boots", translate("Boots"), [
	ItemID.inferium_boots,
	ItemID.prudentium_boots,
	ItemID.intermedium_boots,
	ItemID.superium_boots,
	ItemID.supremium_boots
]);
