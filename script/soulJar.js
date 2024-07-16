function entityTypeToName(type){
 for(let i in EEntityType)
     if(EEntityType[i] == type) return i.toLowerCase();
}

let entityEssence = {zombie: ItemID.intermedium_essence, chicken: ItemID.prudentium_essence, cow: ItemID.prudentium_essence, creeper: ItemID.intermedium_essence, blaze: ItemID.superium_essence, enderman: ItemID.superium_essence, ghast: ItemID.superium_essence, pig: ItemID.prudentium_essence, rabbit: ItemID.intermedium_essence, sheep: ItemID.prudentium_essence, skeleton: ItemID.intermedium_essence, slime: ItemID.prudentium_essence, spider: ItemID.intermedium_essence, squid: ItemID.prudentium_essence, turtle: ItemID.prudentium_essence, wither_skeleton: ItemID.supremium_essence};
let evilTypes = [28, 32, 33, 35, 37, 38, 43, 44, 19];
let peaceTypes = [10, 11, 12, 13, 17];

Callback.addCallback("EntityDeath", function(entity, attacker) {
 if (Entity.getType(attacker) != 63) return;

 let actor = new PlayerActor(attacker);
 let index = [ItemID.soulium_dagger_hostile, ItemID.soulium_dagger_passive].indexOf(Entity.getCarriedItem(attacker).id);
 if (!!~index) {
  if(!~[evilTypes, peaceTypes][index].indexOf(Entity.getType(entity)))
 return;
  for (let i = 0; i < 36; i++) {
   let inventoryStack = actor.getInventorySlot(i);
   if (inventoryStack.id == ItemID.soul_jar && inventoryStack.data < 4 && (!inventoryStack.extra || (inventoryStack.extra.getString("entityTypeName", "") == entityTypeToName(Entity.getType(entity))))) {
    if (!inventoryStack.extra)
     inventoryStack.extra = new ItemExtraData();
    inventoryStack.extra.putString("entityTypeName", entityTypeToName(Entity.getType(entity)));
    inventoryStack.data++;
    actor.setInventorySlot(i, inventoryStack.id, inventoryStack.count, inventoryStack.data, inventoryStack.extra);
    break;
   }
  }
 }
});

Item.registerIconOverrideFunction(ItemID.soul_jar, function(stack) {
 let entityName = "";
 if(stack.extra){
  let typeName = stack.extra.getString("entityTypeName", "");
     if(typeName != "")
         entityName = "_" + typeName;
 }

 if(entityName) stack.data--;
 return { name: "soul_jar" + entityName, data: stack.data };
});

Item.registerNameOverrideFunction(ItemID.soul_jar, function(stack){
 let entityName = "";
 if(stack.extra){
  let typeName = stack.extra.getString("entityTypeName", "");
     if(typeName != "")
         entityName = typeName;
 }

 return Translation.translate("soul_jar") + (entityName ? ("\n§7"+Translation.translate("contains_soul") + ": " +Translation.translate(entityName) + " " + stack.data + " / 4") : "\n§7" + Translation.translate("empty_jar"));
});

for(let i in entityEssence){
	let i_ = i;
    Recipes.addShaped({ id: ItemID[i + "_seeds"], count: 1, data: 0 }, [
        "a#a",
        "#b#",
        "a#a"
    ], ["b", ItemID.soulium_seed_base, 0, "#", entityEssence[i], 0, "a", ItemID.soul_jar, 4],
    function (api, fields, result, player){
     for(let j = 0; j < 9; j++){
         let field = api.getFieldSlot(j);
            if(field.id == ItemID.soul_jar && !field.extra || (field.extra && field.extra.getString("entityTypeName", "") != i_))
                    api.prevent();
            else {
                api.decreaseFieldSlot(j);
            }
        }
    });
}