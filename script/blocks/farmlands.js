
const FarmlandTier = {
    ONE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5
};

function CreateEssenceFarmland(id, tier, essence, upgrade) {
    
    Block.setShape(id, 0, 0, 0, 1, 15/16, 1);
    ToolAPI.registerBlockMaterial(id, "dirt", 1, false);
    
    Block.setRandomTickCallback(id, function(x, y, z, id, data, region) {
        let truth = false;
    
        for (let xr = -4; xr <= 4; xr++) {
            for (let zr = -4; zr <= 4; zr++) {
                let blockId = region.getBlock(x + xr, y, z + zr).id;
                if (blockId == VanillaBlockID.water || blockId == VanillaBlockID.flowing_water) {
                    truth = true;
                    break; 
                }
            }
            if (truth) break;
        }
    
        if (region.getRainLevel() == 1 || region.getRainLevel() == 2) {
            truth = true;
        }
    
        region.setBlock(x, y, z, id, truth ? 1 : 0);
    });
    

    Block.registerDropFunction(id, function(coords, blockID, blockData, level, enchant) {
    	let drop = [];
            if (enchant.silk) {
                return [[id, 1, 0]];
            }
            if (Math.random() <= 0.2) {
                drop.push([essence, 1, 0]);
            }
        drop.push([VanillaBlockID.dirt, 1, 0]);

        return drop;
    });

    let color = [Native.Color.YELLOW, Native.Color.GREEN, Native.Color.GOLD, Native.Color.AQUA, Native.Color.RED][(tier - 1) % 5];

        Item.registerNameOverrideFunction(id, function(item, translation, name) {
            return translation + "\n" + Native.Color.GRAY + translate("Tier: %s", color + tier);
        });
        
        Block.registerClickFunctionForID(upgrade, function(coords, item, block, player) {
			if (item.id == essence) {
				let region = BlockSource.getDefaultForActor(player);
				region.setBlock(coords.x, coords.y, coords.z, id, 0);
				let actor = new PlayerActor(player);
				if (actor.getGameMode() != EGameMode.CREATIVE) {
					Entity.setCarriedItem(player, item.id, item.count - 1, item.data, item.extra);
				}
			}
		});
};


IDRegistry.genBlockID("inferium_farmland");
    Block.createBlock("inferium_farmland", [
     {
        name: "Inferium Farmland", 
        texture: [
            ["inferium_dirt", 0], 
            ["farmland_inferium_dry", 0], 
            ["inferium_dirt", 0], 
            ["inferium_dirt", 0], 
            ["inferium_dirt", 0], 
            ["inferium_dirt", 0]
        ], 
            inCreative: true
        }, 
    {	
        name: "Inferium Farmland", 
        texture: [
            ["inferium_dirt", 0], 
            ["farmland_inferium_wet", 0], 
            ["inferium_dirt", 0], 
            ["inferium_dirt", 0], 
            ["inferium_dirt", 0], 
            ["inferium_dirt", 0]
        ], 
                  inCreative: false
        }
    ], FARMLAND_BLOCKTYPE);
CreateEssenceFarmland(BlockID.inferium_farmland, FarmlandTier.ONE, ItemID.inferium_essence, VanillaBlockID.farmland)


IDRegistry.genBlockID("prudentium_farmland");
    Block.createBlock("prudentium_farmland", [
     {
        name: "Prudentium Farmland", 
        texture: [
            ["prudentium_dirt", 0], 
            ["farmland_prudentium_dry", 0], 
            ["prudentium_dirt", 0], 
            ["prudentium_dirt", 0], 
            ["prudentium_dirt", 0], 
            ["prudentium_dirt", 0]
        ], 
            inCreative: true
        }, 
    {	
        name: "Prudentium Farmland", 
        texture: [
            ["prudentium_dirt", 0], 
            ["farmland_prudentium_wet", 0], 
            ["prudentium_dirt", 0], 
            ["prudentium_dirt", 0], 
            ["prudentium_dirt", 0], 
            ["prudentium_dirt", 0]
        ], 
                  inCreative: false
        }
    ], FARMLAND_BLOCKTYPE);
CreateEssenceFarmland(BlockID.prudentium_farmland, FarmlandTier.TWO, ItemID.prudentium_essence, BlockID.inferium_farmland)


IDRegistry.genBlockID("tertium_farmland");
    Block.createBlock("tertium_farmland", [
     {
        name: "Tertium Farmland", 
        texture: [
            ["tertium_dirt", 0], 
            ["farmland_tertium_dry", 0], 
            ["tertium_dirt", 0], 
            ["tertium_dirt", 0], 
            ["tertium_dirt", 0], 
            ["tertium_dirt", 0]
        ], 
            inCreative: true
        }, 
    {	
        name: "Tertium Farmland", 
        texture: [
            ["tertium_dirt", 0], 
            ["farmland_tertium_wet", 0], 
            ["tertium_dirt", 0], 
            ["tertium_dirt", 0], 
            ["tertium_dirt", 0], 
            ["tertium_dirt", 0]
        ], 
                  inCreative: false
        }
    ], FARMLAND_BLOCKTYPE);
CreateEssenceFarmland(BlockID.tertium_farmland, FarmlandTier.THREE, ItemID.tertium_essence, BlockID.prudentium_farmland)


IDRegistry.genBlockID("imperium_farmland");
    Block.createBlock("imperium_farmland", [
     {
        name: "Imperium Farmland", 
        texture: [
            ["imperium_dirt", 0], 
            ["farmland_imperium_dry", 0], 
            ["imperium_dirt", 0], 
            ["imperium_dirt", 0], 
            ["imperium_dirt", 0], 
            ["imperium_dirt", 0]
        ], 
            inCreative: true
        }, 
    {	
        name: "Imperium Farmland", 
        texture: [
            ["imperium_dirt", 0], 
            ["farmland_imperium_wet", 0], 
            ["imperium_dirt", 0], 
            ["imperium_dirt", 0], 
            ["imperium_dirt", 0], 
            ["imperium_dirt", 0]
        ], 
                  inCreative: false
        }
    ], FARMLAND_BLOCKTYPE);
CreateEssenceFarmland(BlockID.imperium_farmland, FarmlandTier.FOUR, ItemID.imperium_essence, BlockID.tertium_farmland)


IDRegistry.genBlockID("supremium_farmland");
    Block.createBlock("supremium_farmland", [
     {
        name: "Supremium Farmland", 
        texture: [
            ["supremium_dirt", 0], 
            ["farmland_supremium_dry", 0], 
            ["supremium_dirt", 0], 
            ["supremium_dirt", 0], 
            ["supremium_dirt", 0], 
            ["supremium_dirt", 0]
        ], 
            inCreative: true
        }, 
    {	
        name: "Supremium Farmland", 
        texture: [
            ["supremium_dirt", 0], 
            ["farmland_supremium_wet", 0], 
            ["supremium_dirt", 0], 
            ["supremium_dirt", 0], 
            ["supremium_dirt", 0], 
            ["supremium_dirt", 0]
        ], 
                  inCreative: false
        }
    ], FARMLAND_BLOCKTYPE);
CreateEssenceFarmland(BlockID.supremium_farmland, FarmlandTier.FIVE, ItemID.supremium_essence, BlockID.imperium_farmland)