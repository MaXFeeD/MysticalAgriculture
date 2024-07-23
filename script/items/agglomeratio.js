IDRegistry.genItemID("air_agglomeratio");
Item.createItem("air_agglomeratio", "Air Agglomeratio", { name: "air_agglomeratio", meta: 0 });

Recipes.addShaped({ id: ItemID.air_agglomeratio, count: 1, data: 0 }, [
	"#a",
	"bs"
], ["#", VanillaItemID.glass_bottle, 0, "a", VanillaBlockID.gravel, 0, "b", VanillaBlockID.dirt, 0, "s", VanillaItemID.clay_ball, 0]);


IDRegistry.genItemID("earth_agglomeratio");
Item.createItem("earth_agglomeratio", "Earth Agglomeratio", { name: "earth_agglomeratio", meta: 0 });

Recipes.addShaped({ id: ItemID.earth_agglomeratio, count: 1, data: 0 }, [
	"#a",
	"b#"
], ["#", VanillaBlockID.tallgrass, 0, "a", VanillaBlockID.gravel, 0, "b", VanillaBlockID.dirt, 0, "s", VanillaItemID.clay_ball, 0]);
Recipes.addShaped({ id: ItemID.earth_agglomeratio, count: 1, data: 0 }, [
	"#a",
	"b#"
], ["#", VanillaBlockID.tallgrass, 1, "a", VanillaBlockID.gravel, 0, "b", VanillaBlockID.dirt, 0, "s", VanillaItemID.clay_ball, 0]);
Recipes.addShaped({ id: ItemID.earth_agglomeratio, count: 1, data: 0 }, [
	"#a",
	"b#"
], ["#", VanillaBlockID.tallgrass, 2, "a", VanillaBlockID.gravel, 0, "b", VanillaBlockID.dirt, 0, "s", VanillaItemID.clay_ball, 0]);


IDRegistry.genItemID("water_agglomeratio");
Item.createItem("water_agglomeratio", "Water Agglomeratio", { name: "water_agglomeratio", meta: 0 });

Recipes.addShaped({ id: ItemID.water_agglomeratio, count: 1, data: 0 }, [
	"ca",
	"b#"
], ["#", VanillaItemID.water_bucket, 0, "c", VanillaBlockID.gravel, 0, "a", VanillaItemID.clay_ball, 0, "b", VanillaBlockID.dirt, 0], function (api, field, result, player) {
	for (var slot = 0; slot < field.length; slot++) {
		if (field[slot].id == VanillaItemID.water_bucket) {
			api.getFieldSlot(slot).set(VanillaItemID.bucket, 1, 0, null);
		} else {
			api.decreaseFieldSlot(slot);
		}
	}
});


IDRegistry.genItemID("fire_agglomeratio");
Item.createItem("fire_agglomeratio", "Fire Agglomeratio", { name: "fire_agglomeratio", meta: 0 });

Recipes.addShaped({ id: ItemID.fire_agglomeratio, count: 1, data: 0 }, [
	"ca",
	"b#"
], ["#", VanillaItemID.lava_bucket, 0, "c", VanillaBlockID.gravel, 0, "a", VanillaItemID.clay_ball, 0, "b", VanillaBlockID.dirt, 0], function(api, field, result, player) {
	for (var slot = 0; slot < field.length; slot++) {
		if (field[slot].id == VanillaItemID.lava_bucket) {
			api.getFieldSlot(slot).set(VanillaItemID.bucket, 1, 0, null);
		} else {
			api.decreaseFieldSlot(slot);
		}
	}
});


IDRegistry.genItemID("nature_agglomeratio");
Item.createItem("nature_agglomeratio", "Nature Agglomeratio", { name: "nature_agglomeratio", meta: 0 });

Recipes.addShaped({ id: ItemID.nature_agglomeratio, count: 1, data: 0 }, [
	"ca",
	"b#"
], ["#", VanillaBlockID.pumpkin, 0, "c", VanillaBlockID.melon_block, 0, "a", VanillaItemID.sugar_cane, 0, "b", VanillaItemID.potato, 0]);


IDRegistry.genItemID("nether_agglomeratio");
Item.createItem("nether_agglomeratio", "Nether Agglomeratio", { name: "nether_agglomeratio", meta: 0 });


IDRegistry.genItemID("end_agglomeratio");
Item.createItem("end_agglomeratio", "End Agglomeratio", { name: "end_agglomeratio", meta: 0 });

Recipes.addShaped({ id: ItemID.end_agglomeratio, count: 1, data: 0 }, [
	"#a",
	"b#"
], ["#", VanillaBlockID.end_stone, 0, "a", VanillaItemID.chorus_fruit, 0, "b", VanillaBlockID.purpur_block, 0]);


IDRegistry.genItemID("prismarine_agglomeratio");
Item.createItem("prismarine_agglomeratio", "Prismarine Agglomeratio", { name: "prismarine_agglomeratio", meta: 0 });

Recipes.addShaped({ id: ItemID.prismarine_agglomeratio, count: 1, data: 0 }, [
	"#a",
	"a#"
], ["#", VanillaItemID.prismarine_shard, 0, "a", VanillaItemID.prismarine_crystals, 0]);
