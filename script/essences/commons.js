IDRegistry.genItemID("earth_essence");
Item.createItem("earth_essence", "Earth Essence", { name: "earth_essence", meta: 0 });


IDRegistry.genItemID("air_essence");
Item.createItem("air_essence", "Air Essence", { name: "air_essence", meta: 0 });


IDRegistry.genItemID("fire_essence");
Item.createItem("fire_essence", "Fire Essence", { name: "fire_essence", meta: 0 });

Recipes.addShaped({ id: VanillaItemID.lava_bucket, count: 1, data: 0 }, [
    " # ",
    "#~#",
    " # "
], ["#", ItemID.fire_essence, 0, "~", VanillaItemID.bucket, 0]);


IDRegistry.genItemID("water_essence");
Item.createItem("water_essence", "Water Essence", { name: "water_essence", meta: 0 });

Recipes.addShaped({ id: VanillaItemID.water_bucket, count: 1, data: 0 }, [
    " # ",
    "#~#",
    " # "
], ["#", ItemID.water_essence, 0, "~", VanillaItemID.bucket, 0]);


IDRegistry.genItemID("nature_essence");
Item.createItem("nature_essence", "Nature Essence", { name: "nature_essence", meta: 0 });

Recipes.addShaped({ id: VanillaItemID.apple, count: 8, data: 0 }, [
    "#  ",
    " # ",
    "  #"
], ["#", ItemID.nature_essence, 0]);
Recipes.addShaped({ id: 457, count: 8, data: 0 }, [
    "#  ",
    "#  ",
    "#  "
], ["#", ItemID.nature_essence, 0]);
Recipes.addShaped({ id: VanillaItemID.potato, count: 8, data: 0 }, [
    "   ",
    "###",
    "   "
], ["#", ItemID.nature_essence, 0]);
Recipes.addShaped({ id: VanillaBlockID.cactus, count: 16, data: 0 }, [
    "###",
    " # ",
    "###"
], ["#", ItemID.nature_essence, 0]);
Recipes.addShaped({ id: VanillaBlockID.pumpkin, count: 16, data: 0 }, [
    "###",
    "# #",
    "###"
], ["#", ItemID.nature_essence, 0]);
Recipes.addShaped({ id: VanillaItemID.carrot, count: 8, data: 0 }, [
    "   ",
    "   ",
    "###"
], ["#", ItemID.nature_essence, 0]);
Recipes.addShaped({ id: 296, count: 8, data: 0 }, [
    "###",
    "   ",
    "   "
], ["#", ItemID.nature_essence, 0]);
Recipes.addShaped({ id: VanillaBlockID.vine, count: 12, data: 0 }, [
    " # ",
    " # ",
    " # "
], ["#", ItemID.nature_essence, 0]);
Recipes.addShaped({ id: VanillaItemID.dye, count: 8, data: 3 }, [
    "  #",
    "  #",
    "  #"
], ["#", ItemID.nature_essence, 0]);
Recipes.addShaped({ id: VanillaBlockID.melon_block, count: 16, data: 0 }, [
    "###",
    "###",
    "###"
], ["#", ItemID.nature_essence, 0]);
Recipes.addShaped({ id: VanillaItemID.sugar_cane, count: 16, data: 0 }, [
    " # ",
    "###",
    "# #"
], ["#", ItemID.nature_essence, 0]);
Recipes.addShaped({ id: VanillaItemID.poisonous_potato, count: 1, data: 0 }, [
    "#~"
], ["#", VanillaItemID.potato, 0, "~", ItemID.nature_essence, 0]);


IDRegistry.genItemID("dirt_essence");
Item.createItem("dirt_essence", "Dirt Essence", { name: "dirt_essence", meta: 0 });

Recipes.addShaped({ id: VanillaBlockID.dirt, count: 24, data: 0 }, [
    "###",
    "# #",
    "###"
], ["#", ItemID.dirt_essence, 0]);
Recipes.addShaped({ id: VanillaBlockID.sand, count: 16, data: 0 }, [
    "s#",
    "#s"
], ["#", ItemID.dirt_essence, 0, "s", ItemID.fire_essence, 0]);
Recipes.addShaped({ id: VanillaBlockID.sand, count: 16, data: 1 }, [
    "s# ",
    "#s ",
    "   "
], ["s", ItemID.dirt_essence, 0, "#", ItemID.fire_essence, 0]);
Recipes.addShaped({ id: VanillaItemID.clay_ball, count: 24, data: 0 }, [
    "s#",
    "#s"
], ["#", ItemID.dirt_essence, 0, "s", ItemID.water_essence, 0]);
Recipes.addShaped({ id: VanillaBlockID.grass, count: 20, data: 0 }, [
    "###",
    "#~#",
    "###"
], ["#", ItemID.dirt_essence, 0, "~", ItemID.nature_essence, 0]);
Recipes.addShaped({ id: VanillaBlockID.podzol, count: 12, data: 0 }, [
    " # ",
    "#~#",
    " # "
], ["#", ItemID.dirt_essence, 0, "~", ItemID.nature_essence, 0]);
Recipes.addShaped({ id: VanillaBlockID.mycelium, count: 20, data: 0 }, [
    "#~#",
    "#~#",
    "#~#"
], ["#", ItemID.dirt_essence, 0, "~", ItemID.nature_essence, 0]);
Recipes.addShaped({ id: VanillaBlockID.brown_mushroom, count: 8, data: 0 }, [
    "#s#",
    "   ",
    "   "
], ["s", ItemID.dirt_essence, 0, "#", ItemID.nature_essence, 0]);
Recipes.addShaped({ id: VanillaBlockID.red_mushroom, count: 8, data: 0 }, [
    " s ",
    " # ",
    " s "
], ["s", ItemID.dirt_essence, 0, "#", ItemID.nature_essence, 0]);


IDRegistry.genItemID("wood_essence");
Item.createItem("wood_essence", "Wood Essence", { name: "wood_essence", meta: 0 });

Recipes.addShaped({ id: VanillaBlockID.log, count: 16, data: 0 }, [
    "###",
    "   ",
    "   "
], ["#", ItemID.wood_essence, 0]);
Recipes.addShaped({ id: VanillaBlockID.log, count: 16, data: 1 }, [
    "   ",
    "###",
    "   "
], ["#", ItemID.wood_essence, 0]);
Recipes.addShaped({ id: VanillaBlockID.log, count: 16, data: 2 }, [
    "   ",
    "   ",
    "###"
], ["#", ItemID.wood_essence, 0]);
Recipes.addShaped({ id: VanillaBlockID.log, count: 16, data: 3 }, [
    "#  ",
    "#  ",
    "#  "
], ["#", ItemID.wood_essence, 0]);
Recipes.addShaped({ id: VanillaBlockID.log2, count: 16, data: 0 }, [
    " # ",
    " # ",
    " # "
], ["#", ItemID.wood_essence, 0]);
Recipes.addShaped({ id: VanillaBlockID.log2, count: 16, data: 1 }, [
    "  #",
    "  #",
    "  #"
], ["#", ItemID.wood_essence, 0]);
Recipes.addShaped({ id: VanillaBlockID.sapling, count: 8, data: 4 }, [
    " # ",
    " s ",
    " # "
], ["#", ItemID.wood_essence, 0, "s", ItemID.nature_essence, 0]);
Recipes.addShaped({ id: VanillaBlockID.sapling, count: 8, data: 3 }, [
    "#  ",
    "s  ",
    "#  "
], ["#", ItemID.wood_essence, 0, "s", ItemID.nature_essence, 0]);
Recipes.addShaped({ id: VanillaBlockID.sapling, count: 8, data: 0 }, [
    "#s#",
    "   ",
    "   "
], ["#", ItemID.wood_essence, 0, "s", ItemID.nature_essence, 0]);
Recipes.addShaped({ id: VanillaBlockID.sapling, count: 8, data: 2 }, [
    "   ",
    "   ",
    "#s#"
], ["#", ItemID.wood_essence, 0, "s", ItemID.nature_essence, 0]);
Recipes.addShaped({ id: VanillaBlockID.sapling, count: 8, data: 1 }, [
    "   ",
    "#s#",
    "   "
], ["#", ItemID.wood_essence, 0, "s", ItemID.nature_essence, 0]);
Recipes.addShaped({ id: VanillaBlockID.sapling, count: 8, data: 5 }, [
    "  #",
    "  s",
    "  #"
], ["#", ItemID.wood_essence, 0, "s", ItemID.nature_essence, 0]);


IDRegistry.genItemID("stone_essence");
Item.createItem("stone_essence", "Stone Essence", { name: "stone_essence", meta: 0 });

Recipes.addShaped({ id: VanillaBlockID.cobblestone, count: 24, data: 0 }, [
    "###",
    "# #",
    "###"
], ["#", ItemID.stone_essence, 0]);
Recipes.addShaped({ id: VanillaItemID.flint, count: 8, data: 0 }, [
    "s#",
    "#s"
], ["#", ItemID.stone_essence, 0, "s", ItemID.fire_essence, 0]);
Recipes.addShaped({ id: VanillaBlockID.gravel, count: 16, data: 0 }, [
    "s#",
    "#s"
], ["#", ItemID.dirt_essence, 0, "s", ItemID.stone_essence, 0]);
