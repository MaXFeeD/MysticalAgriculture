IDRegistry.genItemID("coal_essence");
Item.createItem("coal_essence", "Coal Essence", { name: "coal_essence", meta: 0 });

Recipes.addShaped({ id: VanillaItemID.coal, count: 12, data: 0 }, [
    "###",
    "# #",
    "###"
], ["#", ItemID.coal_essence, 0]);
Recipes.addShaped({ id: VanillaBlockID.stone, count: 20, data: 0 }, [
    "###",
    "#~#",
    "###"
], ["#", ItemID.stone_essence, 0, "~", ItemID.coal_essence, 0]);


IDRegistry.genItemID("iron_essence");
Item.createItem("iron_essence", "Iron Essence", { name: "iron_essence", meta: 0 });

Recipes.addShaped({ id: VanillaItemID.iron_ingot, count: 6, data: 0 }, [
    "###",
    "# #",
    "###"
], ["#", ItemID.iron_essence, 0]);


IDRegistry.genItemID("gold_essence");
Item.createItem("gold_essence", "Gold Essence", { name: "gold_essence", meta: 0 });

Recipes.addShaped({ id: VanillaItemID.gold_ingot, count: 4, data: 0 }, [
    "###",
    "# #",
    "###"
], ["#", ItemID.gold_essence, 0]);


IDRegistry.genItemID("lapis_essence");
Item.createItem("lapis_essence", "Lapis Lazuli Essence", { name: "lapis_essence", meta: 0 });

Recipes.addShaped({ id: VanillaItemID.dye, count: 12, data: 4 }, [
    "###",
    "# #",
    "###"
], ["#", ItemID.lapis_essence, 0]);


IDRegistry.genItemID("redstone_essence");
Item.createItem("redstone_essence", "Redstone Essence", { name: "redstone_essence", meta: 0 });

Recipes.addShaped({ id: VanillaItemID.redstone, count: 12, data: 0 }, [
    "###",
    "# #",
    "###"
], ["#", ItemID.redstone_essence, 0]);


IDRegistry.genItemID("diamond_essence");
Item.createItem("diamond_essence", "Diamond Essence", { name: "diamond_essence", meta: 0 });

Recipes.addShaped({ id: VanillaItemID.diamond, count: 1, data: 0 }, [
    "###",
    "###",
    "###"
], ["#", ItemID.diamond_essence, 0]);


IDRegistry.genItemID("emerald_essence");
Item.createItem("emerald_essence", "Emerald Essence", { name: "emerald_essence", meta: 0 });

Recipes.addShaped({ id: VanillaItemID.emerald, count: 1, data: 0 }, [
    "###",
    "###",
    "###"
], ["#", ItemID.emerald_essence, 0]);


IDRegistry.genItemID("quartz_essence");
Item.createItem("quartz_essence", "Nether Quartz Essence", { name: "quartz_essence", meta: 0 });

Recipes.addShaped({ id: VanillaItemID.quartz, count: 12, data: 0 }, [
    "###",
    "# #",
    "###"
], ["#", ItemID.quartz_essence, 0]);
Recipes.addShaped({ id: VanillaBlockID.stone, count: 16, data: 1 }, [
    " # ",
    "#~#",
    " # "
], ["#", ItemID.stone_essence, 0, "~", ItemID.quartz_essence, 0]);
Recipes.addShaped({ id: VanillaBlockID.stone, count: 16, data: 3 }, [
    " ~ ",
    "###",
    " # "
], ["#", ItemID.stone_essence, 0, "~", ItemID.quartz_essence, 0]);
Recipes.addShaped({ id: VanillaBlockID.stone, count: 16, data: 5 }, [
    "  #",
    "###",
    " s "
], ["#", ItemID.stone_essence, 0, "s", ItemID.quartz_essence, 0]);


IDRegistry.genItemID("netherite_essence");
Item.createItem("netherite_essence", "Netherite Essence", { name: "netherite_essence", meta: 0 });


// TODO: Move to integrations!

IDRegistry.genItemID("copper_essence");
Item.createItem("copper_essence", "Copper Essence", { name: "copper_essence", meta: 0 });


IDRegistry.genItemID("tin_essence");
Item.createItem("tin_essence", "Tin Essence", { name: "tin_essence", meta: 0 });


IDRegistry.genItemID("steel_essence");
Item.createItem("steel_essence", "Steel Essence", { name: "steel_essence", meta: 0 });


IDRegistry.genItemID("lead_essence");
Item.createItem("lead_essence", "Lead Essence", { name: "lead_essence", meta: 0 });


IDRegistry.genItemID("bronze_essence");
Item.createItem("bronze_essence", "Bronze Essence", { name: "bronze_essence", meta: 0 });
