ModAPI.addAPICallback("ICore", function(api) {
	MysticalRecipes.addSeeds(ItemID.copper_seeds, ItemID.tertium_essence, ItemID.ingotCopper);
	MysticalRecipes.addSeeds(ItemID.tin_seeds, ItemID.tertium_essence, ItemID.ingotTin);
	MysticalRecipes.addSeeds(ItemID.bronze_seeds, ItemID.tertium_essence, ItemID.ingotBronze);
	MysticalRecipes.addSeeds(ItemID.steel_seeds, ItemID.imperium_essence, ItemID.ingotSteel);
	MysticalRecipes.addSeeds(ItemID.lead_seeds, ItemID.imperium_essence, ItemID.ingotLead);
	MysticalRecipes.addSeeds(ItemID.silver_seeds, ItemID.imperium_essence, ItemID.ingotSilver);

	Recipes.addShaped({ id: ItemID.ingotCopper, count: 6, data: 0 }, [
		"###",
		"# #",
		"###"
	], ["#", ItemID.copper_essence, 0]);
	Recipes.addShaped({ id: ItemID.ingotTin, count: 6, data: 0 }, [
		"###",
		"# #",
		"###"
	], ["#", ItemID.tin_essence, 0]);
	Recipes.addShaped({ id: ItemID.ingotBronze, count: 4, data: 0 }, [
		"###",
		"# #",
		"###"
	], ["#", ItemID.bronze_essence, 0]);
	Recipes.addShaped({ id: ItemID.ingotSteel, count: 3, data: 0 }, [
		"###",
		"# #",
		"###"
	], ["#", ItemID.steel_essence, 0]);
	Recipes.addShaped({ id: ItemID.ingotLead, count: 4, data: 0 }, [
		"###",
		"# #",
		"###"
	], ["#", ItemID.lead_essence, 0]);
	Recipes.addShaped({ id: ItemID.ingotSilver, count: 4, data: 0 }, [
		"###",
		"# #",
		"###"
	], ["#", ItemID.silver_essence, 0]);
});
