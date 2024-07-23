const MysticalToolType = {
	dagger: Object.assign(ModAPI.cloneObject(ToolType.sword), {
		damage: 0,
		onDestroy(item, coords, block, player) {
			if (item.extra != null) {
				let type = item.extra.getString("attuned");
				if (type != null) {
					return type == "creative";
				}
			}
			let toolData = ToolAPI.getToolData(item.id);
			let enchant = ToolAPI.getEnchantExtraData(item.extra);
			if (toolData.modifyEnchant) {
				toolData.modifyEnchant(enchant, item);
			}
			if (Game.isItemSpendingAllowed(player)) {
				if ((Block.getDestroyTime(block.id) > 0 || ToolAPI.getToolLevelViaBlock(item.id, block.id) > 0) && Math.random() < 1 / (enchant.unbreaking + 1)) {
					item.data += 2;
					if (toolData.isWeapon) {
						item.data += 2;
					}
				}
			}
			return true;
		},
		onAttack(item, victim, attacker) {
			this.damage = 3;
			if (item.extra != null) {
				let type = item.extra.getString("attuned");
				if (type != null) {
					if (type == "passive" || type == "hostile") {
						this.damage = 6;
					} else if (type == "creative") {
						this.damage = 65;
					}
					return type == "creative";
				}
			}
			let toolData = ToolAPI.getToolData(item.id);
			let enchant = ToolAPI.getEnchantExtraData(item.extra);
			if (toolData.modifyEnchant) {
				toolData.modifyEnchant(enchant, item);
			}
			if (Game.isItemSpendingAllowed(attacker)) {
				if (Math.random() < 1 / (enchant.unbreaking + 1)) {
					item.data += 2;
					if (!toolData.isWeapon) {
						item.data += 2;
					}
				}
			}
			return true;
		}
	})
};


ToolAPI.addToolMaterial("soulium", { durability: 800, level: 3, efficiency: 7, damage: 3, enchantability: 14 });

IDRegistry.genItemID("soulium_dagger");
Item.createItem("soulium_dagger", "Soulium Dagger", { name: "soulium_dagger", meta: 0 }, { stack: 1 });
ToolAPI.setTool(ItemID.soulium_dagger, "soulium", MysticalToolType.dagger);

Item.registerIconOverrideFunction(ItemID.soulium_dagger, function(item) {
	if (item.extra != null) {
		let type = item.extra.getString("attuned");
		if (type != null) {
			return { name: type + "_soulium_dagger", data: 0 };
		}
	}
	return { name: "soulium_dagger", data: 0 };
});

Item.registerNameOverrideFunction(ItemID.soulium_dagger, function(item, translation, name) {
	if (item.extra != null) {
		let type = item.extra.getString("attuned");
		if (type != null) {
			let attuned = null;
			if (type == "passive") {
				attuned = Native.Color.GREEN + translate("Passive Attuned");
			} else if (type == "hostile") {
				attuned = Native.Color.RED + translate("Hostile Attuned");
			} else if (type == "creative") {
				attuned = Native.Color.LIGHT_PURPLE + translate("Creative Attuned");
			}
			return translation + (attuned != null ? "\n" + attuned : "");
		}
	}
	return translation;
});
