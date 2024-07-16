
Recipes.addCraftEssRecipeItem = function(result, shape, data){
 data.push("#", ItemID.infusion_crystal, -1);
 Recipes.addShaped(result, shape, data, function(api, field, result){
    for(var i in field)
      if(field[i].id!=ItemID.infusion_crystal)
        api.decreaseFieldSlot(i);
    else field[i].data++;
  });
};

function essenceUpgradeRecipe(newEssence, oldEssence){
    Recipes.addCraftEssRecipeItem({id: newEssence, data: 0, count: 1}, [
" x ",
"x#x",
" x "
], ["x", oldEssence, 0]);
}

essenceUpgradeRecipe(ItemID.prudentium_essence, ItemID.inferium_essence)
essenceUpgradeRecipe(ItemID.intermedium_essence, ItemID.prudentium_essence)
essenceUpgradeRecipe(ItemID.superium_essence, ItemID.intermedium_essence)
essenceUpgradeRecipe(ItemID.supremium_essence, ItemID.superium_essence)

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

Recipes.addCraftEssencRecipeItem = function(result, shape, data){
 data.push("#", ItemID.master_infusion_crystal, -1);
 Recipes.addShaped(result, shape, data, function(api, field, result){
    for(var i in field)
      if(field[i].id!=ItemID.master_infusion_crystal)
        api.decreaseFieldSlot(i);
    else field[i].data++;
  });
};

function essencUpgradeRecipe(newEssence, oldEssence){
    Recipes.addCraftEssencRecipeItem({id: newEssence, data: 0, count: 1}, [
" x ",
"x#x",
" x "
], ["x", oldEssence, 0]);
}

essencUpgradeRecipe(ItemID.prudentium_essence, ItemID.inferium_essence)

essencUpgradeRecipe(ItemID.intermedium_essence, ItemID.prudentium_essence)

essencUpgradeRecipe(ItemID.superium_essence, ItemID.intermedium_essence)

essencUpgradeRecipe(ItemID.supremium_essence, ItemID.superium_essence)

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//



function itemRecipe(result, itemb){

Recipes.addShaped({ id: result, count: 9, data: 0 }, [
    "#"
], ["#", itemb, 0]);
}

itemRecipe(ItemID.prosperity_shard, BlockID.prosperity_block)
itemRecipe(ItemID.inferium_essence, BlockID.inferium_block)
itemRecipe(ItemID.prudentium_essence, BlockID.prudentium_block)
itemRecipe(ItemID.intermedium_essence, BlockID.intermedium_block)
itemRecipe(ItemID.superium_essence, BlockID.superium_block)
itemRecipe(ItemID.supremium_essence, BlockID.supremium_block)
itemRecipe(ItemID.prosperity_ingot, BlockID.prosperity_ingot_block)
itemRecipe(ItemID.inferium_ingot, BlockID.inferium_ingot_block)
itemRecipe(ItemID.prudentium_ingot, BlockID.prudentium_ingot_block)
itemRecipe(ItemID.intermedium_ingot, BlockID.intermedium_ingot_block)
itemRecipe(ItemID.superium_ingot, BlockID.superium_ingot_block)
itemRecipe(ItemID.supremium_ingot, BlockID.supremium_ingot_block)
itemRecipe(ItemID.prosperity_gemstone, BlockID.prosperity_gemstone_block)
itemRecipe(ItemID.inferium_gemstone, BlockID.inferium_gemstone_block)
itemRecipe(ItemID.prudentium_gemstone, BlockID.prudentium_gemstone_block)
itemRecipe(ItemID.intermedium_gemstone, BlockID.intermedium_gemstone_block)
itemRecipe(ItemID.superium_gemstone, BlockID.superium_gemstone_block)
itemRecipe(ItemID.supremium_gemstone, BlockID.supremium_gemstone_block)
itemRecipe(ItemID.prosperity_nugget, ItemID.prosperity_ingot)
itemRecipe(ItemID.inferium_nugget, ItemID.inferium_ingot)
itemRecipe(ItemID.prudentium_nugget, ItemID.prudentium_ingot)
itemRecipe(ItemID.intermedium_nugget, ItemID.intermedium_ingot)
itemRecipe(ItemID.superium_nugget, ItemID.superium_ingot)
itemRecipe(ItemID.supremium_nugget, ItemID.supremium_ingot)



function essRevers(item, essItem){

Recipes.addShaped({ id: item, count: 4, data: 0 }, [
    "#"
], ["#", essItem, 0]);
}

essRevers(ItemID.inferium_essence, ItemID.prudentium_essence)
essRevers(ItemID.prudentium_essence, ItemID.intermedium_essence)
essRevers(ItemID.intermedium_essence, ItemID.superium_essence)
essRevers(ItemID.superium_essence, ItemID.supremium_essence)
