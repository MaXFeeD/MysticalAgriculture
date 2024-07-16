Recipes.addShaped({ id: ItemID.nature_agglomeratio, count: 1, data: 0 }, [
    "ca",
    "b#"
], ["#", VanillaBlockID.pumpkin, 0, "c", VanillaBlockID.melon_block, 0, "a", VanillaItemID.sugar_cane, 0, "b", VanillaItemID.potato, 0]);


Recipes.addShaped({ id: ItemID.end_agglomeratio, count: 1, data: 0 }, [
    "#a",
    "b#"
], ["#", VanillaBlockID.end_stone, 0, "a", VanillaItemID.chorus_fruit, 0, "b", VanillaBlockID.purpur_block, 0]);


Recipes.addShaped({ id: ItemID.air_agglomeratio, count: 1, data: 0 }, [
    "#a",
    "bs"
], ["#", VanillaItemID.glass_bottle, 0, "a", VanillaBlockID.gravel, 0, "b", VanillaBlockID.dirt, 0, "s", VanillaItemID.clay_ball, 0]);


Recipes.addShaped({ id: ItemID.earth_agglomeratio, count: 1, data: 0 }, [
    "#a",
    "b#"
], ["#", VanillaBlockID.tallgrass, 1, "a", VanillaBlockID.gravel, 0, "b", VanillaBlockID.dirt, 0, "s", VanillaItemID.clay_ball, 0]);


Recipes.addShaped({ id: ItemID.earth_agglomeratio, count: 1, data: 0 }, [
    "#a",
    "b#"
], ["#", VanillaBlockID.tallgrass, 2, "a", VanillaBlockID.gravel, 0, "b", VanillaBlockID.dirt, 0, "s", VanillaItemID.clay_ball, 0]);


Recipes.addShaped({ id: ItemID.earth_agglomeratio, count: 1, data: 0 }, [
    "#a",
    "b#"
], ["#", VanillaBlockID.tallgrass, 0, "a", VanillaBlockID.gravel, 0, "b", VanillaBlockID.dirt, 0, "s", VanillaItemID.clay_ball, 0]);


Recipes.addShaped({ id: ItemID.prismarine_agglomeratio, count: 1, data: 0 }, [
    "#a",
    "a#"
], ["#", VanillaItemID.prismarine_shard, 0, "a", VanillaItemID.prismarine_crystals, 0]);


Recipes.addShaped({ id: ItemID.fire_agglomeratio, count: 1, data: 0 }, [
    "ca",
    "b#"
], ["#", VanillaItemID.lava_bucket, 0, "c", VanillaBlockID.gravel, 0, "a", VanillaItemID.clay_ball, 0, "b", VanillaBlockID.dirt, 0], function (api, field, result, player) {
	for (var i_1 = 0; i_1 < field.length; i_1++) {
                    if (field[i_1].id == VanillaItemID.lava_bucket)
                        api.getFieldSlot(i_1).set(VanillaItemID.bucket, 1, 0, null);
                    else
                        api.decreaseFieldSlot(i_1);
                }
            });


Recipes.addShaped({ id: ItemID.water_agglomeratio, count: 1, data: 0 }, [
    "ca",
    "b#"
], ["#", VanillaItemID.water_bucket, 0, "c", VanillaBlockID.gravel, 0, "a", VanillaItemID.clay_ball, 0, "b", VanillaBlockID.dirt, 0], function (api, field, result, player) {
    for (var i_1 = 0; i_1 < field.length; i_1++) {
                    if (field[i_1].id == VanillaItemID.water_bucket)
                        api.getFieldSlot(i_1).set(VanillaItemID.bucket, 1, 0, null);
                    else
                        api.decreaseFieldSlot(i_1);
                }
            });
