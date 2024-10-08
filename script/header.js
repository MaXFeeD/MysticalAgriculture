/*
      ▄▄▄▄███▄▄▄▄   ▄██   ▄      ▄████████     ███      ▄█   ▄████████    ▄████████  ▄█                                        
    ▄██▀▀▀███▀▀▀██▄ ███   ██▄   ███    ███ ▀█████████▄ ███  ███    ███   ███    ███ ███                                        
    ███   ███   ███ ███▄▄▄███   ███    █▀     ▀███▀▀██ ███▌ ███    █▀    ███    ███ ███                                        
    ███   ███   ███ ▀▀▀▀▀▀███   ███            ███   ▀ ███▌ ███          ███    ███ ███                                        
    ███   ███   ███ ▄██   ███ ▀███████████     ███     ███▌ ███        ▀███████████ ███                                        
    ███   ███   ███ ███   ███          ███     ███     ███  ███    █▄    ███    ███ ███                                        
    ███   ███   ███ ███   ███    ▄█    ███     ███     ███  ███    ███   ███    ███ ███▌    ▄                                  
     ▀█   ███   █▀   ▀█████▀   ▄████████▀     ▄████▀   █▀   ████████▀    ███    █▀  █████▄▄██                                  
                                                                                    ▀                                          
      ▄████████    ▄██████▄     ▄████████  ▄█   ▄████████ ███    █▄   ▄█           ███     ███    █▄     ▄████████    ▄████████
     ███    ███   ███    ███   ███    ███ ███  ███    ███ ███    ███ ███       ▀█████████▄ ███    ███   ███    ███   ███    ███
     ███    ███   ███    █▀    ███    ███ ███▌ ███    █▀  ███    ███ ███          ▀███▀▀██ ███    ███   ███    ███   ███    █▀ 
     ███    ███  ▄███         ▄███▄▄▄▄██▀ ███▌ ███        ███    ███ ███           ███   ▀ ███    ███  ▄███▄▄▄▄██▀  ▄███▄▄▄    
   ▀███████████ ▀▀███ ████▄  ▀▀███▀▀▀▀▀   ███▌ ███        ███    ███ ███           ███     ███    ███ ▀▀███▀▀▀▀▀   ▀▀███▀▀▀    
     ███    ███   ███    ███ ▀███████████ ███  ███    █▄  ███    ███ ███           ███     ███    ███ ▀███████████   ███    █▄ 
     ███    ███   ███    ███   ███    ███ ███  ███    ███ ███    ███ ███▌    ▄     ███     ███    ███   ███    ███   ███    ███
     ███    █▀    ████████▀    ███    ███ █▀   ████████▀  ████████▀  █████▄▄██    ▄████▀   ████████▀    ███    ███   ██████████
                               ███    ███                            ▀                                  ███    ███             

   Copyright 2024 Mystical Agriculture BE
      MaXFeeD (github.com/MaXFeeD)
      Artem0n4 (github.com/Artem0n4)
      Sergeyoshi (github.com/sergeyoshi)
      Hunabis (github.com/Hunabis)
      hed3i (github.com/hed3i)

   Terms of use:
      Forbidden to distribute code, resources and any parts of this mod without mentioning original source (vk.com/mysticalpe).
      Forbidden to directly copy or rewrite code or assets to be reused in other projects.
      Forbidden to sell, or earn money in any way (for example, by a link shortener) on archive and files of this mod.
      Original idea and assets belong to BlakeBr0 (github.com/BlakeBr0/MysticalAgriculture), follow terms of license of this project.
      By using code, assets and any other files of this project, you automatically agree to ALL these terms.

   If you still have questions, want to report a bug, or just follow development news, we recommend subscribing to us!
*/

IMPORT("inherit");
IMPORT("ToolLib");
IMPORT("EnergyNet");
IMPORT("StorageInterface");

const ENTITY_HOSTILE = [32, 33, 34, 35, 37, 38, 39, 40, 41, 42, 43,
	44, 45, 46, 47, 48, 49, 50, 52, 53, 54, 55, 57, 58, 59, 104, 105,
	110, 114, 116, 120, 123, 124, 127];

const GLASS_ANTIBOOM = Block.createSpecialType({
	renderlayer: EBlockRenderLayer.BLEND,
	lightopacity: 1,
	explosionres: 500.0,
	translucency: 1.0,
	destroytime: 4,
	sound: "glass"
});
const BLOCK_ANTIBOOM = Block.createSpecialType({
	solid: true,
	renderlayer: EBlockRenderLayer.BLEND,
	lightopacity: 9,
	explosionres: 500.0,
	translucency: 1.0
});
const BLOCK_GLASS = Block.createSpecialType({
	renderlayer: EBlockRenderLayer.BLEND,
	lightopacity: 1,
	destroytime: 4,
	sound: "glass"
});
const BLOCK_INGOTXGEMSTONE = Block.createSpecialType({
	solid: true,
	renderlayer: EBlockRenderLayer.BLEND,
	lightopacity: 9,
	explosionres: 4.0,
	translucency: 1.0,
	sound: "metal"
});
const BLOCK_STONE = Block.createSpecialType({
	solid: true,
	renderlayer: EBlockRenderLayer.BLEND,
	explosionres: 6.0
});
var PLANT_BLOCKTYPE = Block.createSpecialType({
	renderlayer: 3,
	translucency: 0,
	lightopacity: 0,
	destroytime: 0,
	rendertype: 1,
	sound: "grass"
}, "crop");

const translate = function(str, args) {
	try {
		str = Translation.translate(str);
		if (args !== undefined) {
			Array.isArray(args) || (args = [args]);
			str = java.lang.String.format(str, args);
		}
		return "" + str;
	} catch (e) {
		Logger.Log("Mystical Agriculture#translate: " + e, "ERROR");
		return "" + str;
	}
};

const randomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const MysticalRecipes = {
	addCompressium(input, result) {
		for (let offset = 1; offset < arguments.length; offset++) {
			if (offset != 1) {
				input = arguments[offset - 1];
				result = arguments[offset];
			}
			Recipes.addShaped({ id: result, count: 1, data: 0 }, [
				"###",
				"###",
				"###"
			], ["#", input, 0]);
			Recipes.addShapeless({ id: input, count: 9, data: 0 }, [
				{ id: result, data: 0 }
			]);
		}
	},
	addSeeds(result, essence, platingId, platingData) {
		platingData || (platingData = 0);
		Recipes.addShaped({ id: result, count: 1, data: 0 }, [
			"x#x",
			"#b#",
			"x#x"
		], ["#", essence, 0, "x", platingId, platingData, "b", ItemID.crafting_seed_base, 0]);
	},
	addSoliumSeeds(result, essence, type, capacity) {
		Recipes.addShaped({ id: result, count: 1, data: 0 }, [
			"x#x",
			"#b#",
			"x#x"
		], ["#", essence, 0, "x", ItemID.soul_jar, capacity, "b", ItemID.soulium_seed_base, 0], function(api, fields, result, player) {
			for (let slot = 0; slot < 9; slot++){
				let field = api.getFieldSlot(slot);
				if (field.id == ItemID.soul_jar && (!field.extra || field.extra.getString("soulType") != type)) {
					api.prevent();
				} else {
				    api.decreaseFieldSlot(slot);
				}
			}
		});
	},
	addGemstoneUpgrade(result, input, gemstone, ingot) {
		Recipes.addShaped({ id: result, count: 1, data: 0 }, [
			" g ",
			"x#x",
			" g "
		], ["#", input, 0, "g", gemstone, 0, "x", ingot, 0]);
	},
	addEssenceUpgrade(result, input) {
		Recipes.addShaped({ id: result, count: 1, data: 0 }, [
			" x ",
			"x#x",
			" x "
		], ["#", ItemID.infusion_crystal, -1, "x", input, 0], function(api, fields, result, player) {
			for (let slot in fields) {
				if (fields[slot].id != ItemID.infusion_crystal) {
					api.decreaseFieldSlot(slot);
				} else {
					fields[slot].data++;
				}
			}
		});
		Recipes.addShaped({ id: result, count: 1, data: 0 }, [
			" x ",
			"x#x",
			" x "
		], ["#", ItemID.master_infusion_crystal, -1, "x", input, 0], function(api, fields, result, player) {
			for (let slot in fields) {
				if (fields[slot].id != ItemID.master_infusion_crystal) {
					api.decreaseFieldSlot(slot);
				}
			}
		});
		Recipes.addShapeless({ id: input, count: 4, data: 0 }, [
			{ id: result, data: 0 }
		]);
	}
};

const MysticalGenerationUtils = {
	SOULSTONE_FREQUENCY: __config__.getInteger("world_gen.soulstone") || 48,
	randomChunkXZ(random, chunkX, chunkZ) {
		return {
			x: chunkX * 16 + random.nextInt(16),
			z: chunkZ * 16 + random.nextInt(16)
		};
	},
	randomChunkXYZ(random, chunkX, chunkZ, minHeight, maxHeight) {
		minHeight == null && (minHeight = 0);
		maxHeight == null && (maxHeight = 128);
		let coords = MysticalGenerationUtils.randomChunkXZ(chunkX, chunkZ);
		coords.y = random.nextInt(maxHeight - minHeight + 1) + minHeight;
		return coords;
	}
};

const MysticalInventory = {
	searchForItems(player, id, fromData, toData) {
		if (!(player instanceof PlayerActor)) {
			player = new PlayerActor(player);
		}
		(toData == null || toData < fromData) && (toData = fromData);
		let slots = [];
		for (let slot = 0; slot < 36; slot++) {
			let item = player.getInventorySlot(slot);
			if (item.id == id && (fromData == -1 || (item.data >= fromData && item.data <= toData))) {
				slots.push(Object.assign({ slot: slot }, item));
			}
		}
		return slots;
	}
};

const MysticalTranslation = {
	RUSSIAN_UIM: __config__.getBool("translation.russian_uim"),
	cropTranslations: {
		"%s Essence": {
			ko: "%s의 에센스",
			ru: "Эссенция %s",
			zh: "%s精华"
		},
		"%s Seeds": {
			ko: "%s 씨앗",
			ru: "Семена %s",
			zh: "%s种子"
		},
		"%s Crop": {
			ko: "%s 작물", // !
			ru: "Посев %s",
			zh: "%s作物"
		}
	},
	addCropTranslation(source, translation) {
		let translations = {};
		for (let key in this.cropTranslations) {
			let origin = this.cropTranslations[key];
			key = java.lang.String.format(key, source);
			translations[key] = {};
			for (let lang in translation) {
				if (origin.hasOwnProperty(lang)) {
					translations[key][lang] = java.lang.String.format(origin[lang], translation[lang]);
				} else {
					Logger.Log("Mystical Agriculture: Crop translation in language " + lang + " for " + JSON.stringify(key) + " does not exists!", "WARNING");
				}
			}
		}
		for (let key in translations) {
			Translation.addTranslation(key, translations[key]);
		}
	}
};

const LevelDisplayedQueue = {
	isDisplayed: false,
	queue: [],

	schedule(func) {
		if (this.isDisplayed) {
			func && func();
			return;
		}
		this.queue.push(func);
	},
	to(state) {
		if (this.isDisplayed == (this.isDisplayed = state) || !state) {
			return;
		}
		while (this.queue.length > 0) {
			let func = this.queue.shift();
			func && func();
		}
	}
};

Callback.addCallback("LevelDisplayed", function() {
	LevelDisplayedQueue.to(true);
});
Callback.addCallback("LevelPreLeft", function() {
	LevelDisplayedQueue.to(false);
});

const LocalTileEntity = {
	map: {},
	get(x, y, z, dimension) {
		let key = Math.floor(x) + "," + Math.floor(y) + "," + Math.floor(z);
		dimension == null && (dimension = Player.getDimension());
		key += "," + dimension;
		let tile = this.map[key];
		if (tile != null) {
			if (tile.x == x && tile.y == y && tile.z == z && tile.dimension == dimension) {
				return tile;
			} else {
				delete this.map[key];
			}
		}
		return null;
	},
	notifyAdded(tile) {
		let key = tile.x + "," + tile.y + "," + tile.z + "," + tile.dimension;
		if (this.map[key] != null) {
			this.notifyRemoved(tile);
		}
		this.map[key] = tile;
	},
	notifyRemoved(tile) {
		let key = tile.x + "," + tile.y + "," + tile.z + "," + tile.dimension;
		delete this.map[key];
	}
};
