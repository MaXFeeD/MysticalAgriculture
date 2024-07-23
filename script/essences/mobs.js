IDRegistry.genItemID("slime_essence");
Item.createItem("slime_essence", "Slime Essence", { name: "slime_essence", meta: 0 });

Recipes.addShaped({ id: VanillaItemID.slime_ball, count: 8, data: 0 }, [
    "###",
    "   ",
    "   "
], ["#", ItemID.slime_essence, 0]);


IDRegistry.genItemID("zombie_essence");
Item.createItem("zombie_essence", "Zombie Essence", { name: "zombie_essence", meta: 0 });

Recipes.addShaped({ id: VanillaItemID.rotten_flesh, count: 12, data: 0 }, [
    "###",
    "   ",
    "   "
], ["#", ItemID.zombie_essence, 0]);
Recipes.addShaped({ id: VanillaBlockID.skull, count: 1, data: 2 }, [
    "###",
    "#b#",
    "###"
], ["#", ItemID.zombie_essence, 0, "b", ItemID.blank_skull, 0]);


IDRegistry.genItemID("cow_essence");
Item.createItem("cow_essence", "Cow Essence", { name: "cow_essence", meta: 0 });

Recipes.addShaped({ id: VanillaItemID.beef, count: 6, data: 0 }, [
    "###",
    "   ",
    "   "
], ["#", ItemID.cow_essence, 0]);
Recipes.addShaped({ id: VanillaItemID.leather, count: 6, data: 0 }, [
    "   ",
    "###",
    "   "
], ["#", ItemID.cow_essence, 0]);
Recipes.addShaped({ id: VanillaItemID.milk_bucket, count: 1, data: 0 }, [
    " # ",
    "#~#",
    " # "
], ["#", ItemID.cow_essence, 0, "~", VanillaItemID.bucket, 0]);


IDRegistry.genItemID("wither_skeleton_essence");
Item.createItem("wither_skeleton_essence", "Wither Skeleton Essence", { name: "wither_skeleton_essence", meta: 0 });

Recipes.addShaped({ id: VanillaBlockID.skull, count: 1, data: 1 }, [
    "###",
    "#b#",
    "###"
], ["#", ItemID.wither_skeleton_essence, 0, "b", ItemID.blank_skull, 0]);


IDRegistry.genItemID("turtle_essence");
Item.createItem("turtle_essence", "Turtle Essence", { name: "turtle_essence", meta: 0 });


IDRegistry.genItemID("blaze_essence");
Item.createItem("blaze_essence", "Blaze Essence", { name: "blaze_essence", meta: 0 });

Recipes.addShaped({ id: VanillaItemID.blaze_rod, count: 6, data: 0 }, [
    "###",
    "# #",
    "###"
], ["#", ItemID.blaze_essence, 0]);
Recipes.addShaped({ id: VanillaItemID.magma_cream, count: 6, data: 0 }, [
    " # ",
    "#~#",
    " # "
], ["~", ItemID.blaze_essence, 0, "#", ItemID.slime_essence, 0]);


IDRegistry.genItemID("enderman_essence");
Item.createItem("enderman_essence", "Enderman Essence", { name: "enderman_essence", meta: 0 });

Recipes.addShaped({ id: VanillaItemID.ender_pearl, count: 4, data: 0 }, [
    "###",
    "# #",
    "###"
], ["#", ItemID.enderman_essence, 0]);
Recipes.addShaped({ id: VanillaItemID.ender_eye, count: 3, data: 0 }, [
    "###",
    "#~#",
    "###"
], ["#", ItemID.enderman_essence, 0, "~", ItemID.blaze_essence, 0]);


IDRegistry.genItemID("chicken_essence");
Item.createItem("chicken_essence", "Chicken Essence", { name: "chicken_essence", meta: 0 });

Recipes.addShaped({ id: VanillaItemID.chicken, count: 6, data: 0 }, [
    "###",
    "   ",
    "   "
], ["#", ItemID.chicken_essence, 0]);
Recipes.addShaped({ id: VanillaItemID.egg, count: 8, data: 0 }, [
    "   ",
    "   ",
    "###"
], ["#", ItemID.chicken_essence, 0]);
Recipes.addShaped({ id: VanillaItemID.feather, count: 8, data: 0 }, [
    "   ",
    "###",
    "   "
], ["#", ItemID.chicken_essence, 0]);


IDRegistry.genItemID("creeper_essence");
Item.createItem("creeper_essence", "Creeper Essence", { name: "creeper_essence", meta: 0 });

Recipes.addShaped({ id: VanillaBlockID.skull, count: 1, data: 4 }, [
    "###",
    "#b#",
    "###"
], ["#", ItemID.creeper_essence, 0, "b", ItemID.blank_skull, 0]);
Recipes.addShaped({ id: VanillaItemID.gunpowder, count: 6, data: 0 }, [
    "###",
    "   ",
    "   "
], ["#", ItemID.creeper_essence, 0]);


IDRegistry.genItemID("fish_essence");
Item.createItem("fish_essence", "Fish Essence", { name: "fish_essence", meta: 0 });


IDRegistry.genItemID("ghast_essence");
Item.createItem("ghast_essence", "Ghast Essence", { name: "ghast_essence", meta: 0 });

Recipes.addShaped({ id: VanillaItemID.ghast_tear, count: 2, data: 0 }, [
    "###",
    "# #",
    "###"
], ["#", ItemID.ghast_essence, 0]);


IDRegistry.genItemID("pig_essence");
Item.createItem("pig_essence", "Pig Essence", { name: "pig_essence", meta: 0 });

Recipes.addShaped({ id: VanillaItemID.porkchop, count: 6, data: 0 }, [
    "###",
    "   ",
    "   "
], ["#", ItemID.pig_essence, 0]);


IDRegistry.genItemID("rabbit_essence");
Item.createItem("rabbit_essence", "Rabbit Essence", { name: "rabbit_essence", meta: 0 });

Recipes.addShaped({ id: VanillaItemID.rabbit, count: 6, data: 0 }, [
    "###",
    "   ",
    "   "
], ["#", ItemID.rabbit_essence, 0]);
Recipes.addShaped({ id: VanillaItemID.rabbit_hide, count: 8, data: 0 }, [
    "   ",
    "   ",
    "###"
], ["#", ItemID.rabbit_essence, 0]);
Recipes.addShaped({ id: VanillaItemID.rabbit_foot, count: 3, data: 0 }, [
    "   ",
    "###",
    "   "
], ["#", ItemID.rabbit_essence, 0]);


IDRegistry.genItemID("sheep_essence");
Item.createItem("sheep_essence", "Sheep Essence", { name: "sheep_essence", meta: 0 });

Recipes.addShaped({ id: VanillaItemID.mutton, count: 6, data: 0 }, [
    "###",
    "   ",
    "   "
], ["#", ItemID.sheep_essence, 0]);
Recipes.addShaped({ id: VanillaBlockID.wool, count: 6, data: 0 }, [
    "###",
    "# #",
    "###"
], ["#", ItemID.sheep_essence, 0]);


IDRegistry.genItemID("silver_essence");
Item.createItem("silver_essence", "Silver Essence", { name: "silver_essence", meta: 0 });


IDRegistry.genItemID("skeleton_essence");
Item.createItem("skeleton_essence", "Skeleton Essence", { name: "skeleton_essence", meta: 0 });

Recipes.addShaped({ id: VanillaBlockID.skull, count: 1, data: 0 }, [
    "###",
    "#b#",
    "###"
], ["#", ItemID.skeleton_essence, 0, "b", ItemID.blank_skull, 0]);
Recipes.addShaped({ id: VanillaItemID.arrow, count: 8, data: 0 }, [
    "###",
    "   ",
    "   "
], ["#", ItemID.skeleton_essence, 0]);
Recipes.addShaped({ id: VanillaItemID.bone, count: 12, data: 0 }, [
    "###",
    "# #",
    "###"
], ["#", ItemID.skeleton_essence, 0]);


IDRegistry.genItemID("spider_essence");
Item.createItem("spider_essence", "Spider Essence", { name: "spider_essence", meta: 0 });

Recipes.addShaped({ id: VanillaItemID.spider_eye, count: 4, data: 0 }, [
    "###",
    "# #",
    "###"
], ["#", ItemID.spider_essence, 0]);
Recipes.addShaped({ id: VanillaItemID.string, count: 8, data: 0 }, [
    "###",
    "   ",
    "   "
], ["#", ItemID.spider_essence, 0]);


IDRegistry.genItemID("squid_essence");
Item.createItem("squid_essence", "Squid Essence", { name: "squid_essence", meta: 0 });

Recipes.addShaped({ id: VanillaItemID.ink_sac, count: 6, data: 0 }, [
    "###",
    "   ",
    "   "
], ["#", ItemID.squid_essence, 0]);
