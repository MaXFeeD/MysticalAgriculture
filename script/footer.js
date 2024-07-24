Item.addCreativeGroup("ores", translate("Ores"), [
	BlockID.inferium_ore,
	BlockID.prosperity_ore,
	BlockID.soulium_ore
]);

Item.addCreativeGroup("essence_blocks", translate("Essence Blocks"), [
	BlockID.inferium_block,
	BlockID.prosperity_block,
	BlockID.prudentium_block,
	BlockID.tertium_block,
	BlockID.imperium_block,
	BlockID.supremium_block,
	BlockID.soulium_block,

	BlockID.prosperity_ingot_block,
	BlockID.inferium_ingot_block,
	BlockID.prudentium_ingot_block,
	BlockID.tertium_ingot_block,
	BlockID.imperium_ingot_block,
	BlockID.supremium_ingot_block,
	BlockID.soulium_ingot_block,

	BlockID.prosperity_gemstone_block,
	BlockID.inferium_gemstone_block,
	BlockID.prudentium_gemstone_block,
	BlockID.tertium_gemstone_block,
	BlockID.imperium_gemstone_block,
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
	BlockID.tertium_reprocessor,
	BlockID.imperium_reprocessor,
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
	ItemID.tertium_essence,
	ItemID.imperium_essence,
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
	ItemID.tertium_ingot,
	ItemID.imperium_ingot,
	ItemID.supremium_ingot
]);

Item.addCreativeGroup("nugget", translate("Nuggets"), [
	ItemID.prosperity_nugget,
	ItemID.inferium_nugget,
	ItemID.soulium_nugget,
	ItemID.prudentium_nugget,
	ItemID.tertium_nugget,
	ItemID.imperium_nugget,
	ItemID.supremium_nugget
]);

Item.addCreativeGroup("gem", translate("Gemstones"), [
	ItemID.prosperity_gemstone,
	ItemID.inferium_gemstone,
	ItemID.soulium_gemstone,
	ItemID.prudentium_gemstone,
	ItemID.tertium_gemstone,
	ItemID.imperium_gemstone,
	ItemID.supremium_gemstone
]);

Item.addCreativeGroup("sword", translate("Swords"), [
	ItemID.inferium_sword,
	ItemID.prudentium_sword,
	ItemID.tertium_sword,
	ItemID.imperium_sword,
	ItemID.supremium_sword
]);

Item.addCreativeGroup("pickaxe", translate("Pickaxes"), [
	ItemID.inferium_pickaxe,
	ItemID.prudentium_pickaxe,
	ItemID.tertium_pickaxe,
	ItemID.imperium_pickaxe,
	ItemID.supremium_pickaxe
]);

Item.addCreativeGroup("axe", translate("Axes"), [
	ItemID.inferium_axe,
	ItemID.prudentium_axe,
	ItemID.tertium_axe,
	ItemID.imperium_axe,
	ItemID.supremium_axe
]);

Item.addCreativeGroup("shovel", translate("Shovels"), [
	ItemID.inferium_shovel,
	ItemID.prudentium_shovel,
	ItemID.tertium_shovel,
	ItemID.imperium_shovel,
	ItemID.supremium_shovel
]);

Item.addCreativeGroup("hoe", translate("Hoes"), [
	ItemID.inferium_hoe,
	ItemID.prudentium_hoe,
	ItemID.tertium_hoe,
	ItemID.imperium_hoe,
	ItemID.supremium_hoe
]);

Item.addCreativeGroup("helmet", translate("Helmets"), [
	ItemID.inferium_helmet,
	ItemID.prudentium_helmet,
	ItemID.tertium_helmet,
	ItemID.imperium_helmet,
	ItemID.supremium_helmet
]);

Item.addCreativeGroup("chestplate", translate("Chestplates"), [
	ItemID.inferium_chestplate,
	ItemID.prudentium_chestplate,
	ItemID.tertium_chestplate,
	ItemID.imperium_chestplate,
	ItemID.supremium_chestplate
]);

Item.addCreativeGroup("leggings", translate("Leggings"), [
	ItemID.inferium_leggings,
	ItemID.prudentium_leggings,
	ItemID.tertium_leggings,
	ItemID.imperium_leggings,
	ItemID.supremium_leggings
]);

Item.addCreativeGroup("boots", translate("Boots"), [
	ItemID.inferium_boots,
	ItemID.prudentium_boots,
	ItemID.tertium_boots,
	ItemID.imperium_boots,
	ItemID.supremium_boots
]);
