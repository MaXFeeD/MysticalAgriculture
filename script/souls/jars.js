IDRegistry.genItemID("soul_jar");
Item.createItem("soul_jar", "Soul Jar", { name: "soul_jar", meta: 0 }, { stack: 1 });

Recipes.addShaped({ id: ItemID.soul_jar, count: 1, data: 0 }, [
	" b ",
	"# #",
	" # "
], ["b", ItemID.soulium_ingot, 0, "#", BlockID.soul_glass, 0]);

Item.registerIconOverrideFunction(ItemID.soul_jar, function(item) {
	if (item.extra != null) {
		let type = item.extra.getString("soulType");
		if (type != null && EntitySoulTypeRegistry.capacities.hasOwnProperty(type)) {
			let capacity = EntitySoulTypeRegistry.capacities[type];
			item.data = Math.min(capacity * 2, Math.max(item.data, 0));
			return {
				name: "soul_jar_" + type,
				data: Math.floor(item.data / capacity * 1.5)
			};
		}
	}
	return { name: "soul_jar", data: 0 };
});

Item.registerNameOverrideFunction(ItemID.soul_jar, function(item, translation, name) {
	if (item.extra != null) {
		let type = item.extra.getString("soulType");
		if (type != null && (type = EntitySoulTypeRegistry.gather(type)) != null) {
			return translation + "\n" + Native.Color.GRAY + translate(type.name) + " (" + (item.data / 2) + "/" + type.capacity + ")";
		}
	}
	return translation + "\n" + Native.Color.GRAY + translate("Empty");
});

Callback.addCallback("EntityDeath", function(entity, attacker) {
	if (Entity.getType(attacker) != EEntityType.PLAYER) {
		return;
	}
	let hand = Entity.getCarriedItem(attacker);
	if (hand.id != ItemID.soulium_dagger) {
		return;
	}
	let soul = EntitySoulTypeRegistry.gather(entity);
	if (soul != null) {
		let attuned = hand.extra != null ? hand.extra.getString("attuned") : null;
		if (attuned == "passive" || attuned == "hostile") {
			let type = EntitySoulTypeRegistry.getTypeUniversal(entity);
			attuned = ~ENTITY_HOSTILE.indexOf(type) ? attuned == "hostile" ? 3 : 2 : attuned == "passive" ? 3 : 2;
		} else {
			attuned = attuned != "creative" ? 2 : -1;
		}
		attacker = new PlayerActor(attacker);
		let jars = MysticalInventory.searchForItems(attacker, ItemID.soul_jar, 0, soul.capacity * 2 - 1)
			.filter(function(item) {
				return item.extra == null || item.extra.getString("soulType", soul.type) == soul.type;
			})
			.sort(function(a, b) {
				if (a.extra == null || b.extra == null) {
					return a.extra == b.extra ? 0 : a.extra == null ? 1 : -1;
				}
				return a.data == b.data ? 0 : a.data > b.data ? -1 : 1;
			});
		for (let offset = 0; attuned != 0 && offset < jars.length; offset++) {
			let jar = jars[offset];
			jar.extra || (jar.extra = new ItemExtraData());
			jar.extra.putString("soulType", soul.type);
			if (attuned == -1) {
				jar.data = soul.capacity * 2;
			} else if (jar.data + attuned > soul.capacity * 2) {
				attuned = jar.data + attuned - (jar.data = soul.capacity * 2);
			} else {
				jar.data += attuned;
				attuned = 0;
			}
			attacker.setInventorySlot(jar.slot, jar.id, jar.count, jar.data, jar.extra);
		}
	}
});
