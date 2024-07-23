new Plant("inferium", 7, "§e1", [VanillaBlockID.farmland], "inferium_essence");

Recipes.addShaped({ id: ItemID.inferium_seeds, count: 1, data: 0 }, [
	"###",
	"#b#",
	"###"
], ["b", VanillaItemID.wheat_seeds, 0, "#", ItemID.inferium_essence, 0]);


new Plant("dirt", 7, "§e1", [VanillaBlockID.farmland], "dirt_essence");
MysticalRecipes.addSeeds(ItemID.dirt_seeds, ItemID.inferium_essence, VanillaBlockID.dirt);

new Plant("air", 7, "§e1", [VanillaBlockID.farmland], "air_essence");
MysticalRecipes.addSeeds(ItemID.air_seeds, ItemID.inferium_essence, ItemID.air_agglomeratio);

new Plant("earth", 7, "§e1", [VanillaBlockID.farmland], "earth_essence");
MysticalRecipes.addSeeds(ItemID.earth_seeds, ItemID.inferium_essence, ItemID.earth_agglomeratio);

new Plant("nature", 7, "§e1", [VanillaBlockID.farmland], "nature_essence");
MysticalRecipes.addSeeds(ItemID.nature_seeds, ItemID.inferium_essence, ItemID.nature_agglomeratio);

new Plant("wood", 7, "§e1", [VanillaBlockID.farmland], "wood_essence");
MysticalRecipes.addSeeds(ItemID.wood_seeds, ItemID.inferium_essence, VanillaBlockID.log, -1);
MysticalRecipes.addSeeds(ItemID.wood_seeds, ItemID.inferium_essence, VanillaBlockID.log2, -1);

new Plant("stone", 7, "§e1", [VanillaBlockID.farmland], "stone_essence");
MysticalRecipes.addSeeds(ItemID.stone_seeds, ItemID.inferium_essence, VanillaBlockID.stone);

new Plant("coal", 7, "§a2", [VanillaBlockID.farmland], "coal_essence");
MysticalRecipes.addSeeds(ItemID.coal_seeds, ItemID.prudentium_essence, VanillaItemID.coal, -1);

new Plant("iron", 7, "§63", [VanillaBlockID.farmland], "iron_essence");
MysticalRecipes.addSeeds(ItemID.iron_seeds, ItemID.intermedium_essence, VanillaItemID.iron_ingot);

new Plant("gold", 7, "§b4", [VanillaBlockID.farmland], "gold_essence");
MysticalRecipes.addSeeds(ItemID.gold_seeds, ItemID.superium_essence, VanillaItemID.gold_ingot);

new Plant("lapis_lazuli", 7, "§b4", [VanillaBlockID.farmland], "lapis_essence");
MysticalRecipes.addSeeds(ItemID.lapis_lazuli_seeds, ItemID.superium_essence, VanillaItemID.dye, 4);

new Plant("redstone", 7, "§63", [VanillaBlockID.farmland], "redstone_essence");
MysticalRecipes.addSeeds(ItemID.redstone_seeds, ItemID.intermedium_essence, VanillaItemID.redstone);

new Plant("diamond", 7, "§c5", [VanillaBlockID.farmland], "diamond_essence");
MysticalRecipes.addSeeds(ItemID.diamond_seeds, ItemID.supremium_essence, VanillaItemID.diamond);

new Plant("emerald", 7, "§c5", [VanillaBlockID.farmland], "emerald_essence");
MysticalRecipes.addSeeds(ItemID.emerald_seeds, ItemID.supremium_essence, VanillaItemID.emerald);

new Plant("prismarine", 7, "§63", [VanillaBlockID.farmland], "prismarine_essence");
MysticalRecipes.addSeeds(ItemID.prismarine_seeds, ItemID.intermedium_essence, ItemID.prismarine_agglomeratio);

new Plant("netherite", 7, "§c5", [VanillaBlockID.farmland], "netherite_essence");
MysticalRecipes.addSeeds(ItemID.netherite_seeds, ItemID.supremium_essence, 728);

new Plant("end", 7, "§e1", [VanillaBlockID.farmland], "end_essence");
MysticalRecipes.addSeeds(ItemID.end_seeds, ItemID.inferium_essence, ItemID.end_agglomeratio);

new Plant("glowstone", 7, "§63", [VanillaBlockID.farmland], "glowstone_essence");
MysticalRecipes.addSeeds(ItemID.glowstone_seeds, ItemID.intermedium_essence, VanillaItemID.glowstone_dust);

new Plant("fire", 7, "§e1", [VanillaBlockID.farmland], "fire_essence");
MysticalRecipes.addSeeds(ItemID.fire_seeds, ItemID.inferium_essence, ItemID.fire_agglomeratio);

new Plant("ice", 7, "§e1", [VanillaBlockID.farmland], "ice_essence");
MysticalRecipes.addSeeds(ItemID.ice_seeds, ItemID.inferium_essence, VanillaBlockID.ice);

new Plant("water", 7, "§e1", [VanillaBlockID.farmland], "water_essence");
MysticalRecipes.addSeeds(ItemID.water_seeds, ItemID.inferium_essence, ItemID.water_agglomeratio);

new Plant("nether", 7, "§e1", [VanillaBlockID.farmland], "nether_essence");
MysticalRecipes.addSeeds(ItemID.nether_seeds, ItemID.inferium_essence, ItemID.nether_agglomeratio);

new Plant("obsidian", 7, "§63", [VanillaBlockID.farmland], "obsidian_essence");
MysticalRecipes.addSeeds(ItemID.obsidian_seeds, ItemID.intermedium_essence, VanillaBlockID.obsidian);

new Plant("nether_quartz", 7, "§63", [VanillaBlockID.farmland], "quartz_essence");
MysticalRecipes.addSeeds(ItemID.nether_quartz_seeds, ItemID.intermedium_essence, VanillaItemID.quartz);

new Plant("zombie", 7, "§63", [VanillaBlockID.farmland], "zombie_essence", "mob");
new Plant("cow", 7, "§a2", [VanillaBlockID.farmland], "cow_essence", "mob");
new Plant("wither_skeleton", 7, "§c5", [VanillaBlockID.farmland], "wither_skeleton_essence", "mob");
new Plant("turtle", 7, "§a2", [VanillaBlockID.farmland], "turtle_essence", "mob");
new Plant("blaze", 7, "§b4", [VanillaBlockID.farmland], "blaze_essence", "mob");
new Plant("creeper", 7, "§63", [VanillaBlockID.farmland], "creeper_essence", "mob");
new Plant("chicken", 7, "§a2", [VanillaBlockID.farmland], "chicken_essence", "mob");
new Plant("fish", 7, "§a2", [VanillaBlockID.farmland], "fish_essence", "mob");
new Plant("ghast", 7, "§b4", [VanillaBlockID.farmland], "ghast_essence", "mob");
new Plant("enderman", 7, "§b4", [VanillaBlockID.farmland], "enderman_essence", "mob");
new Plant("pig", 7, "§a2", [VanillaBlockID.farmland], "pig_essence", "mob");
new Plant("rabbit", 7, "§63", [VanillaBlockID.farmland], "rabbit_essence", "mob");
new Plant("silver", 7, "§b4", [VanillaBlockID.farmland], "silver_essence", "mob");
new Plant("skeleton", 7, "§63", [VanillaBlockID.farmland], "skeleton_essence", "mob");
new Plant("sheep", 7, "§a2", [VanillaBlockID.farmland], "sheep_essence", "mob");
new Plant("spider", 7, "§63", [VanillaBlockID.farmland], "spider_essence", "mob");
new Plant("squid", 7, "§a2", [VanillaBlockID.farmland], "squid_essence", "mob");
new Plant("slime", 7, "§a2", [VanillaBlockID.farmland], "slime_essence", "mob");

// TODO: Move to integrations!
new Plant("bronze", 7, "§63", [VanillaBlockID.farmland], "bronze_essence");
new Plant("copper", 7, "§63", [VanillaBlockID.farmland], "copper_essence");
new Plant("tin", 7, "§63", [VanillaBlockID.farmland], "tin_essence");
new Plant("steel", 7, "§b4", [VanillaBlockID.farmland], "steel_essence");
new Plant("lead", 7, "§63", [VanillaBlockID.farmland], "lead_essence");
