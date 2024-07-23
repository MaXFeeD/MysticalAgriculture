IDRegistry.genItemID("prosperity_shard");
Item.createItem("prosperity_shard", "Prosperity Shard", { name: "prosperity_shard", meta: 0 });


IDRegistry.genItemID("inferium_essence");
Item.createItem("inferium_essence", "Inferium Essence", { name: "inferium_essence", meta: 0 });

Callback.addCallback("EntityDeath", function(entity) {
	let coords = Entity.getPosition(entity);
	let essences = Math.floor(Math.random() * 2);
	World.drop(coords.x, coords.y, coords.z, ItemID.inferium_essence, essences);
});


IDRegistry.genItemID("prudentium_essence");
Item.createItem("prudentium_essence", "Prudentium Essence", { name: "prudentium_essence", meta: 0 });
MysticalRecipes.addEssenceUpgrade(ItemID.prudentium_essence, ItemID.inferium_essence);


IDRegistry.genItemID("intermedium_essence");
Item.createItem("intermedium_essence", "Tertium Essence", { name: "intermedium_essence", meta: 0 });
MysticalRecipes.addEssenceUpgrade(ItemID.intermedium_essence, ItemID.prudentium_essence);


IDRegistry.genItemID("superium_essence");
Item.createItem("superium_essence", "Imperium Essence", { name: "superium_essence", meta: 0 });
MysticalRecipes.addEssenceUpgrade(ItemID.superium_essence, ItemID.intermedium_essence);


IDRegistry.genItemID("supremium_essence");
Item.createItem("supremium_essence", "Supremium Essence", { name: "supremium_essence", meta: 0 });
MysticalRecipes.addEssenceUpgrade(ItemID.supremium_essence, ItemID.superium_essence);


IDRegistry.genItemID("prosperity_ingot");
Item.createItem("prosperity_ingot", "Prosperity Ingot", { name: "prosperity_ingot", meta: 0 });

Recipes.addShaped({ id: ItemID.prosperity_ingot, count: 1, data: 0 }, [
	" # ",
	"#b#",
	" # "
], ["b", VanillaItemID.iron_ingot, 0, "#", ItemID.prosperity_shard, 0]);


IDRegistry.genItemID("inferium_ingot");
Item.createItem("inferium_ingot", "Inferium Ingot", { name: "inferium_ingot", meta: 0 });

Recipes.addShaped({ id: ItemID.inferium_ingot, count: 1, data: 0 }, [
	" # ",
	"#b#",
	" # "
], ["b", ItemID.prosperity_ingot, 0, "#", ItemID.inferium_essence, 0]);


IDRegistry.genItemID("prudentium_ingot");
Item.createItem("prudentium_ingot", "Prudentium Ingot", { name: "prudentium_ingot", meta: 0 });

Recipes.addShaped({ id: ItemID.prudentium_ingot, count: 1, data: 0 }, [
	" # ",
	"#b#",
	" # "
], ["b", ItemID.inferium_ingot, 0, "#", ItemID.prudentium_essence, 0]);


IDRegistry.genItemID("intermedium_ingot");
Item.createItem("intermedium_ingot", "Tertium Ingot", { name: "intermedium_ingot", meta: 0 });

Recipes.addShaped({ id: ItemID.intermedium_ingot, count: 1, data: 0 }, [
	" # ",
	"#b#",
	" # "
], ["b", ItemID.prudentium_ingot, 0, "#", ItemID.intermedium_essence, 0]);


IDRegistry.genItemID("superium_ingot");
Item.createItem("superium_ingot", "Imperium Ingot", { name: "superium_ingot", meta: 0 });

Recipes.addShaped({ id: ItemID.superium_ingot, count: 1, data: 0 }, [
	" # ",
	"#b#",
	" # "
], ["b", ItemID.intermedium_ingot, 0, "#", ItemID.superium_essence, 0]);


IDRegistry.genItemID("supremium_ingot");
Item.createItem("supremium_ingot", "Supremium Ingot", { name: "supremium_ingot", meta: 0 });

Recipes.addShaped({ id: ItemID.supremium_ingot, count: 1, data: 0 }, [
	" # ",
	"#b#",
	" # "
], ["b", ItemID.superium_ingot, 0, "#", ItemID.supremium_essence, 0]);


IDRegistry.genItemID("soulium_ingot");
Item.createItem("soulium_ingot", "Soulium Ingot", { name: "soulium_ingot", meta: 0 });

Recipes.addShaped({ id: ItemID.soulium_ingot, count: 1, data: 0 }, [
	" # ",
	"#b#",
	" # "
], ["b", ItemID.prosperity_ingot, 0, "#", ItemID.soulium_dust, 0]);


IDRegistry.genItemID("prosperity_gemstone");
Item.createItem("prosperity_gemstone", "Prosperity Gemstone", { name: "prosperity_gemstone", meta: 0 });

Recipes.addShaped({ id: ItemID.prosperity_gemstone, count: 1, data: 0 }, [
	" # ",
	"#b#",
	" # "
], ["b", VanillaItemID.diamond, 0, "#", ItemID.prosperity_shard, 0]);


IDRegistry.genItemID("inferium_gemstone");
Item.createItem("inferium_gemstone", "Inferium Gemstone", { name: "inferium_gemstone", meta: 0 });

Recipes.addShaped({ id: ItemID.inferium_gemstone, count: 1, data: 0 }, [
	" # ",
	"#b#",
	" # "
], ["b", ItemID.prosperity_gemstone, 0, "#", ItemID.inferium_essence, 0]);


IDRegistry.genItemID("prudentium_gemstone");
Item.createItem("prudentium_gemstone", "Prudentium Gemstone", { name: "prudentium_gemstone", meta: 0 });

Recipes.addShaped({ id: ItemID.prudentium_gemstone, count: 1, data: 0 }, [
	" # ",
	"#b#",
	" # "
], ["b", ItemID.inferium_gemstone, 0, "#", ItemID.prudentium_essence, 0]);


IDRegistry.genItemID("intermedium_gemstone");
Item.createItem("intermedium_gemstone", "Tertium Gemstone", { name: "intermedium_gemstone", meta: 0 });

Recipes.addShaped({ id: ItemID.intermedium_gemstone, count: 1, data: 0 }, [
    " # ",
    "#b#",
    " # "
], ["b", ItemID.prudentium_gemstone, 0, "#", ItemID.intermedium_essence, 0]);


IDRegistry.genItemID("superium_gemstone");
Item.createItem("superium_gemstone", "Imperium Gemstone", { name: "superium_gemstone", meta: 0 });

Recipes.addShaped({ id: ItemID.superium_gemstone, count: 1, data: 0 }, [
    " # ",
    "#b#",
    " # "
], ["b", ItemID.intermedium_gemstone, 0, "#", ItemID.superium_essence, 0]);


IDRegistry.genItemID("supremium_gemstone");
Item.createItem("supremium_gemstone", "Supremium Gemstone", { name: "supremium_gemstone", meta: 0 });

Recipes.addShaped({ id: ItemID.supremium_gemstone, count: 1, data: 0 }, [
    " # ",
    "#b#",
    " # "
], ["b", ItemID.superium_gemstone, 0, "#", ItemID.supremium_essence, 0]);


IDRegistry.genItemID("soulium_gemstone");
Item.createItem("soulium_gemstone", "Soulium Gemstone", { name: "soulium_gemstone", meta: 0 });

Recipes.addShaped({ id: ItemID.soulium_gemstone, count: 1, data: 0 }, [
	" # ",
	"#b#",
	" # "
], ["b", ItemID.prosperity_gemstone, 0, "#", ItemID.soulium_dust, 0]);


IDRegistry.genItemID("prosperity_nugget");
Item.createItem("prosperity_nugget", "Prosperity Nugget", { name: "prosperity_nugget", meta: 0 });
MysticalRecipes.addCompressium(ItemID.prosperity_nugget, ItemID.prosperity_ingot);


IDRegistry.genItemID("inferium_nugget");
Item.createItem("inferium_nugget", "Inferium Nugget", { name: "inferium_nugget", meta: 0 });
MysticalRecipes.addCompressium(ItemID.inferium_nugget, ItemID.inferium_ingot);


IDRegistry.genItemID("prudentium_nugget");
Item.createItem("prudentium_nugget", "Prudentium Nugget", { name: "prudentium_nugget", meta: 0 });
MysticalRecipes.addCompressium(ItemID.prudentium_nugget, ItemID.prudentium_ingot);


IDRegistry.genItemID("intermedium_nugget");
Item.createItem("intermedium_nugget", "Tertium Nugget", { name: "intermedium_nugget", meta: 0 });
MysticalRecipes.addCompressium(ItemID.intermedium_nugget, ItemID.intermedium_ingot);


IDRegistry.genItemID("superium_nugget");
Item.createItem("superium_nugget", "Imperium Nugget", { name: "superium_nugget", meta: 0 });
MysticalRecipes.addCompressium(ItemID.superium_nugget, ItemID.superium_ingot);


IDRegistry.genItemID("supremium_nugget");
Item.createItem("supremium_nugget", "Supremium Nugget", { name: "supremium_nugget", meta: 0 });
MysticalRecipes.addCompressium(ItemID.supremium_nugget, ItemID.supremium_ingot);


IDRegistry.genItemID("soulium_nugget");
Item.createItem("soulium_nugget", "Soulium Nugget", { name: "soulium_nugget", meta: 0 });
