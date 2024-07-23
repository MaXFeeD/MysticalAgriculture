IDRegistry.genItemID("fertilized_essence");
Item.createItem("fertilized_essence", "Fertilized Essence", { name: "fertilized_essence", meta: 0 });


IDRegistry.genItemID("mystical_fertilizer");
Item.createItem("mystical_fertilizer", "Mystical Fertilizer", { name: "mystical_fertilizer", meta: 0 });

Recipes.addShaped({ id: ItemID.mystical_fertilizer, count: 4, data: 0 }, [
	"a#a",
	"#b#",
	"a#a"
], ["#", VanillaItemID.bone_meal, 0, "a", ItemID.inferium_essence, 0, "b", VanillaItemID.diamond, 0]);
Recipes.addShaped({ id: ItemID.mystical_fertilizer, count: 8, data: 0 }, [
	"a#a",
	"#b#",
	"a#a"
], ["#", ItemID.fertilized_essence, 0, "a", ItemID.inferium_essence, 0, "b", VanillaItemID.diamond, 0]);


IDRegistry.genItemID("soulium_dust");
Item.createItem("soulium_dust", "Soulium Dust", { name: "soulium_dust", meta: 0 });


IDRegistry.genItemID("soul_dust");
Item.createItem("soul_dust", "Soul Dust", { name: "soul_dust", meta: 0 });


IDRegistry.genItemID("blank_skull");
Item.createItem("blank_skull", "Blank Skull", { name: "blank_skull", meta: 0 });

Recipes.addShaped({ id: ItemID.blank_skull, count: 1, data: 0 }, [
	" # ",
	"#@#",
	" # "
], ["@", VanillaBlockID.bone_block, 0, "#", ItemID.soul_dust, 0]);


IDRegistry.genItemID("infusion_crystal");
Item.createItem("infusion_crystal", "Infusion Crystal", { name: "infusion_crystal", meta: 0 }, { stack: 1 });
Item.setMaxDamage(ItemID.infusion_crystal, 1000);

Recipes.addShaped({ id: ItemID.infusion_crystal, count: 1, data: 0 }, [
	"x#x",
	"#b#",
	"x#x"
], ["b", VanillaItemID.diamond, 0, "#", ItemID.prosperity_shard, 0, "x", ItemID.inferium_essence, 0]);


IDRegistry.genItemID("master_infusion_crystal");
Item.createItem("master_infusion_crystal", "Master Infusion Crystal", { name: "master_infusion_crystal", meta: 0 }, { stack: 1 });
Item.setGlint(ItemID.master_infusion_crystal, true);

Recipes.addShaped({ id: ItemID.master_infusion_crystal, count: 1, data: 0 }, [
	"x#x",
	"#b#",
	"x#x"
], ["b", VanillaItemID.diamond, 0, "#", ItemID.prosperity_shard, 0, "x", ItemID.supremium_essence, 0]);


IDRegistry.genItemID("crafting_seed_base");
Item.createItem("crafting_seed_base", "Prosperity Seed Base", { name: "crafting_seed_base", meta: 0 });

Recipes.addShaped({ id: ItemID.crafting_seed_base, count: 1, data: 0 }, [
	" # ",
	"#b#",
	" # "
], ["b", VanillaItemID.wheat_seeds, 0, "#", ItemID.prosperity_shard, 0]);


IDRegistry.genItemID("soulium_seed_base");
Item.createItem("soulium_seed_base", "Soulium Seed Base", { name: "soulium_seed_base", meta: 0 });
