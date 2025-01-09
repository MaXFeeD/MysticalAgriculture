ModAPI.addAPICallback("ICore", function(api) {

	IDRegistry.genItemID("copper_essence");
	Item.createItem("copper_essence", "Copper Essence", { name: "copper_essence", meta: 0 });

	Recipes.addShaped({ id: ItemID.ingotCopper, count: 6, data: 0 }, [
		"###",
		"# #",
		"###"
	], ["#", ItemID.copper_essence, 0]);

	IDRegistry.genItemID("tin_essence");
	Item.createItem("tin_essence", "Tin Essence", { name: "tin_essence", meta: 0 });

	Recipes.addShaped({ id: ItemID.ingotTin, count: 6, data: 0 }, [
		"###",
		"# #",
		"###"
	], ["#", ItemID.tin_essence, 0]);

	IDRegistry.genItemID("steel_essence");
	Item.createItem("steel_essence", "Steel Essence", { name: "steel_essence", meta: 0 });

	Recipes.addShaped({ id: ItemID.ingotSteel, count: 3, data: 0 }, [
		"###",
		"# #",
		"###"
	], ["#", ItemID.steel_essence, 0]);

	IDRegistry.genItemID("lead_essence");
	Item.createItem("lead_essence", "Lead Essence", { name: "lead_essence", meta: 0 });

	Recipes.addShaped({ id: ItemID.ingotLead, count: 4, data: 0 }, [
		"###",
		"# #",
		"###"
	], ["#", ItemID.lead_essence, 0]);

	IDRegistry.genItemID("bronze_essence");
	Item.createItem("bronze_essence", "Bronze Essence", { name: "bronze_essence", meta: 0 });

	Recipes.addShaped({ id: ItemID.ingotBronze, count: 4, data: 0 }, [
		"###",
		"# #",
		"###"
	], ["#", ItemID.bronze_essence, 0]);

	IDRegistry.genItemID("silver_essence");
	Item.createItem("silver_essence", "Silver Essence", { name: "silver_essence", meta: 0 });

	Recipes.addShaped({ id: ItemID.ingotSilver, count: 4, data: 0 }, [
		"###",
		"# #",
		"###"
	], ["#", ItemID.silver_essence, 0]);

	
	CropRegistry.register("bronze", "Bronze", CropTier.THREE, CropType.RESOURCE, ItemID.bronze_essence);
	InfusionRecipeRegistry.registerRecipe(ItemID.bronze_seeds, ItemID.crafting_seed_base, [
		{ id: ItemID.ingotBronze, count: 4 },
		{ id: ItemID.tertium_essence, count: 4 }
	]);

	CropRegistry.register("copper", "Copper", CropTier.THREE, CropType.RESOURCE, ItemID.copper_essence);
	InfusionRecipeRegistry.registerRecipe(ItemID.copper_seeds, ItemID.crafting_seed_base, [
		{ id: ItemID.ingotCopper, count: 4 },
		{ id: ItemID.tertium_essence, count: 4 }
	]);

	CropRegistry.register("tin", "Tin", CropTier.THREE, CropType.RESOURCE, ItemID.tin_essence);
	InfusionRecipeRegistry.registerRecipe(ItemID.tin_seeds, ItemID.crafting_seed_base, [
		{ id: ItemID.ingotTin, count: 4 },
		{ id: ItemID.tertium_essence, count: 4 }
	]);

	CropRegistry.register("steel", "Steel", CropTier.FOUR, CropType.RESOURCE, ItemID.steel_essence);
	InfusionRecipeRegistry.registerRecipe(ItemID.steel_seeds, ItemID.crafting_seed_base, [
		{ id: ItemID.ingotSteel, count: 4 },
		{ id: ItemID.imperium_essence, count: 4 }
	]);

	CropRegistry.register("lead", "Lead", CropTier.THREE, CropType.RESOURCE, ItemID.lead_essence);
	InfusionRecipeRegistry.registerRecipe(ItemID.lead_seeds, ItemID.crafting_seed_base, [
		{ id: ItemID.ingotLead, count: 4 },
		{ id: ItemID.tertium_essence, count: 4 }
	]);

	CropRegistry.register("silver", "Silver", CropTier.THREE, CropType.RESOURCE, ItemID.silver_essence);
	InfusionRecipeRegistry.registerRecipe(ItemID.silver_seeds, ItemID.crafting_seed_base, [
		{ id: ItemID.ingotSilver, count: 4 },
		{ id: ItemID.tertium_essence, count: 4 }
	]);
});