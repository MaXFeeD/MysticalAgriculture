function blockRecipe(block, item){

Recipes.addShaped({ id: block, count: 1, data: 0 }, [
    "###",
    "###",
    "###"
], ["#", item, 0]);
}

blockRecipe(BlockID.prosperity_block, ItemID.prosperity_shard)
blockRecipe(BlockID.inferium_block, ItemID.inferium_essence)
blockRecipe(BlockID.prudentium_block, ItemID.prudentium_essence)
blockRecipe(BlockID.intermedium_block, ItemID.intermedium_essence)
blockRecipe(BlockID.superium_block, ItemID.superium_essence)
blockRecipe(BlockID.supremium_block, ItemID.supremium_essence)
blockRecipe(BlockID.prosperity_ingot_block, ItemID.prosperity_ingot)
blockRecipe(BlockID.inferium_ingot_block, ItemID.inferium_ingot)
blockRecipe(BlockID.prudentium_ingot_block, ItemID.prudentium_ingot)
blockRecipe(BlockID.intermedium_ingot_block, ItemID.intermedium_ingot)
blockRecipe(BlockID.superium_ingot_block, ItemID.superium_ingot)
blockRecipe(BlockID.supremium_ingot_block, ItemID.supremium_ingot)
blockRecipe(BlockID.prosperity_gemstone_block, ItemID.prosperity_gemstone)
blockRecipe(BlockID.inferium_gemstone_block, ItemID.inferium_gemstone)
blockRecipe(BlockID.prudentium_gemstone_block, ItemID.prudentium_gemstone)
blockRecipe(BlockID.intermedium_gemstone_block, ItemID.intermedium_gemstone)
blockRecipe(BlockID.superium_gemstone_block, ItemID.superium_gemstone)
blockRecipe(BlockID.supremium_gemstone_block, ItemID.supremium_gemstone)
blockRecipe(ItemID.prosperity_ingot, ItemID.prosperity_nugget)
blockRecipe(ItemID.inferium_ingot, ItemID.inferium_nugget)
blockRecipe(ItemID.prudentium_ingot, ItemID.prudentium_nugget)
blockRecipe(ItemID.intermedium_ingot, ItemID.intermedium_nugget)
blockRecipe(ItemID.superium_ingot, ItemID.superium_nugget)
blockRecipe(ItemID.supremium_ingot, ItemID.supremium_nugget)
