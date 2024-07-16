function seedsRecipe(resultId, essenceId, extraItemId){

Recipes.addShaped({ id: resultId, count: 1, data: 0 }, [
    "a#a",
    "#b#",
    "a#a"
], ["#", essenceId, 0, "a", extraItemId, 0, "b", ItemID.crafting_seed_base, 0]);
}

seedsRecipe(ItemID.dirt_seeds, ItemID.inferium_essence, VanillaBlockID.dirt)
seedsRecipe(ItemID.nature_seeds, ItemID.inferium_essence, ItemID.nature_agglomeratio)
seedsRecipe(ItemID.stone_seeds, ItemID.inferium_essence, VanillaBlockID.stone)
seedsRecipe(ItemID.wood_seeds, ItemID.inferium_essence, VanillaBlockID.log)
seedsRecipe(ItemID.wood_seeds, ItemID.inferium_essence, VanillaBlockID.log2)
seedsRecipe(ItemID.nether_seeds, ItemID.inferium_essence, ItemID.nether_agglomeratio)
seedsRecipe(ItemID.end_seeds, ItemID.inferium_essence, ItemID.end_agglomeratio)
seedsRecipe(ItemID.fire_seeds, ItemID.inferium_essence, ItemID.fire_agglomeratio)
seedsRecipe(ItemID.air_seeds, ItemID.inferium_essence, ItemID.air_agglomeratio)
seedsRecipe(ItemID.earth_seeds, ItemID.inferium_essence, ItemID.earth_agglomeratio)
seedsRecipe(ItemID.water_seeds, ItemID.inferium_essence, ItemID.water_agglomeratio)
seedsRecipe(ItemID.ice_seeds, ItemID.inferium_essence, VanillaBlockID.ice)
seedsRecipe(ItemID.coal_seeds, ItemID.prudentium_essence, VanillaItemID.coal)
seedsRecipe(ItemID.iron_seeds, ItemID.intermedium_essence, VanillaItemID.iron_ingot)
seedsRecipe(ItemID.redstone_seeds, ItemID.intermedium_essence, VanillaItemID.redstone)
seedsRecipe(ItemID.obsidian_seeds, ItemID.intermedium_essence, VanillaBlockID.obsidian)
seedsRecipe(ItemID.prismarine_seeds, ItemID.intermedium_essence, ItemID.prismarine_agglomeratio)
seedsRecipe(ItemID.glowstone_seeds, ItemID.intermedium_essence, VanillaItemID.glowstone_dust)
seedsRecipe(ItemID.quartz_seeds, ItemID.intermedium_essence, VanillaItemID.quartz)
seedsRecipe(ItemID.gold_seeds, ItemID.superium_essence, VanillaItemID.gold_ingot)
seedsRecipe(ItemID.netherite_seeds, ItemID.supremium_essence, 728)
seedsRecipe(ItemID.diamond_seeds, ItemID.supremium_essence, VanillaItemID.diamond)
seedsRecipe(ItemID.emerald_seeds, ItemID.supremium_essence, VanillaItemID.emerald)

ModAPI.addAPICallback("ICore", function(api){
    seedsRecipe(ItemID.copper_seeds, ItemID.intermedium_essence, ItemID.ingotCopper)
    seedsRecipe(ItemID.tin_seeds, ItemID.intermedium_essence, ItemID.ingotTin)
    seedsRecipe(ItemID.bronze_seeds, ItemID.intermedium_essence, ItemID.ingotBronze)
    seedsRecipe(ItemID.steel_seeds, ItemID.superium_essence, ItemID.ingotSteel)
    seedsRecipe(ItemID.lead_seeds, ItemID.superium_essence, ItemID.ingotLead)
    seedsRecipe(ItemID.silver_seeds, ItemID.superium_essence, ItemID.ingotSilver)
});


Recipes.addShaped({ id: ItemID.crafting_seed_base, count: 1, data: 0 }, [
    " # ",
    "#b#",
    " # "
], ["b", VanillaItemID.wheat_seeds, 0, "#", ItemID.prosperity_shard, 0]);


Recipes.addShaped({ id: ItemID.inferium_seeds, count: 1, data: 0 }, [
    "###",
    "#b#",
    "###"
], ["b", VanillaItemID.wheat_seeds, 0, "#", ItemID.inferium_essence, 0]);



Recipes.addShaped({ id: ItemID.wood_seeds, count: 1, data: 0 }, [
    "a#a",
    "#b#",
    "a#a"
], ["b", ItemID.crafting_seed_base, 0, "#", ItemID.inferium_essence, 0, "a", VanillaBlockID.log, 1]);


Recipes.addShaped({ id: ItemID.wood_seeds, count: 1, data: 0 }, [
    "a#a",
    "#b#",
    "a#a"
], ["b", ItemID.crafting_seed_base, 0, "#", ItemID.inferium_essence, 0, "a", VanillaBlockID.log, 2]);


Recipes.addShaped({ id: ItemID.wood_seeds, count: 1, data: 0 }, [
    "a#a",
    "#b#",
    "a#a"
], ["b", ItemID.crafting_seed_base, 0, "#", ItemID.inferium_essence, 0, "a", VanillaBlockID.log, 3]);


Recipes.addShaped({ id: ItemID.wood_seeds, count: 1, data: 0 }, [
    "a#a",
    "#b#",
    "a#a"
], ["b", ItemID.crafting_seed_base, 0, "#", ItemID.inferium_essence, 0, "a", VanillaBlockID.log2, 1]);


Recipes.addShaped({ id: ItemID.coal_seeds, count: 1, data: 0 }, [
    "a#a",
    "#b#",
    "a#a"
], ["b", ItemID.crafting_seed_base, 0, "#", ItemID.prudentium_essence, 0, "a", VanillaItemID.coal, 1]);


Recipes.addShaped({ id: ItemID.lapis_seeds, count: 1, data: 0 }, [
    "a#a",
    "#b#",
    "a#a"
], ["b", ItemID.crafting_seed_base, 0, "#", ItemID.superium_essence, 0, "a", VanillaItemID.dye, 4]);
