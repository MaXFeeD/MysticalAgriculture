IDRegistry.genItemID("nether_essence");
Item.createItem("nether_essence", "Nether Essence", { name: "nether_essence", meta: 0 });

Recipes.addShaped({ id: VanillaBlockID.netherrack, count: 24, data: 0 }, [
    "###",
    "# #",
    "###"
], ["#", ItemID.nether_essence, 0]);
Recipes.addShaped({ id: VanillaItemID.netherbrick, count: 8, data: 0 }, [
    " # ",
    "# #",
    " # "
], ["#", ItemID.nether_essence, 0]);
Recipes.addShaped({ id: VanillaBlockID.soul_sand, count: 16, data: 0 }, [
    "###",
    "#~#",
    "###"
], ["#", ItemID.nether_essence, 0, "~", ItemID.fire_essence, 0]);
Recipes.addShaped({ id: VanillaBlockID.nether_wart, count: 8, data: 0 }, [
    "#s#",
    "   ",
    "   "
], ["#", ItemID.nether_essence, 0, "s", ItemID.nature_essence, 0]);


IDRegistry.genItemID("end_essence");
Item.createItem("end_essence", "End Essence", { name: "end_essence", meta: 0 });

Recipes.addShaped({ id: VanillaBlockID.end_stone, count: 24, data: 0 }, [
    "###",
    "# #",
    "###"
], ["#", ItemID.end_essence, 0]);


IDRegistry.genItemID("glowstone_essence");
Item.createItem("glowstone_essence", "Glowstone Essence", { name: "glowstone_essence", meta: 0 });

Recipes.addShaped({ id: VanillaItemID.glowstone_dust, count: 12, data: 0 }, [
    "###",
    "# #",
    "###"
], ["#", ItemID.glowstone_essence, 0]);


IDRegistry.genItemID("ice_essence");
Item.createItem("ice_essence", "Ice Essence", { name: "ice_essence", meta: 0 });

Recipes.addShaped({ id: VanillaBlockID.snow, count: 12, data: 0 }, [
    " # ",
    "# #",
    " # "
], ["#", ItemID.ice_essence, 0]);
Recipes.addShaped({ id: VanillaBlockID.ice, count: 24, data: 0 }, [
    "###",
    "# #",
    "###"
], ["#", ItemID.ice_essence, 0]);
Recipes.addShaped({ id: VanillaBlockID.packed_ice, count: 20, data: 0 }, [
    "###",
    "###",
    "###"
], ["#", ItemID.ice_essence, 0]);


IDRegistry.genItemID("obsidian_essence");
Item.createItem("obsidian_essence", "Obsidian Essence", { name: "obsidian_essence", meta: 0 });

Recipes.addShaped({ id: VanillaBlockID.obsidian, count: 8, data: 0 }, [
    "###",
    "# #",
    "###"
], ["#", ItemID.obsidian_essence, 0]);


IDRegistry.genItemID("prismarine_essence");
Item.createItem("prismarine_essence", "Prismarine Essence", { name: "prismarine_essence", meta: 0 });
