
const ValidFunc = {
    source: function(id, count, data){
        return !!Recipes.getFurnaceRecipeResult(id, data);
    },
    fuel: function(id, count, data){
        return Recipes.getFuelBurnDuration(id, data) > 0;
    },
    result: function(){
        return false;
    }
};


const Furnace = {
    
    genTexArray: function(level, active){
        const meta = level * 4;
        return [
            ["mystical_furnace", meta],
            ["mystical_furnace", meta],
            ["mystical_furnace", meta + 3],
            ["mystical_furnace", meta + (active ? 2 : 1)],
            ["mystical_furnace", meta + 3],
            ["mystical_furnace", meta + 3]
        ];
    },
    
    genTexRender: function(level, active){
        const render = new ICRender.Model();
        const model = BlockRenderer.createTexturedBlock(this.genTexArray(level, active));
        render.addEntry(model);
        return render;
    },
    
    window0: new UI.StandartWindow({
        standart: {
            header: {
                text: {
                    text: translate("Inferium Furnace")
                }
            },
            inventory: {
                standart: true
            },
            background: {
                standart: true
            }
        },
        drawing: [{
            type: "bitmap",
            x: 565, 
            y: 175, 
            bitmap: "fire_background", 
            scale: 4
        }, {
            type: "bitmap", 
            x: 660, 
            y: 170, 
            bitmap: "arrow_bar_background", 
            scale: 4
        }
        ],
        elements: {
            scaleBurn: {
                type: "scale", 
                x: 565, 
                y: 175, 
                bitmap: "fire_scale", 
                scale: 4, 
                direction: 1
            },
            scaleProgress: {
                type: "scale", 
                x: 660, 
                y: 170, 
                bitmap: "arrow_bar_scale", 
                scale: 4
            },
            slotSource: {
                type: "slot", 
                x: 550, 
                y: 80, 
                size: 80, 
                isValid: ValidFunc.source
            },
            slotFuel: {
                type: "slot", 
                x: 550, 
                y: 240, 
                size: 80, 
                isValid: ValidFunc.fuel
            },
            slotResult: {
                type: "slot", 
                x: 780, 
                y: 150, 
                size: 100, 
                isValid: ValidFunc.result
            }
        }
    }),
    
    window1: new UI.StandartWindow({
        standart: {
            header: {
                text: {
                    text: translate("Prudentium Furnace")
                }
            },
            inventory: {
                standart: true
            },
            background: {
                standart: true
            }
        },
        drawing: [{
            type: "bitmap",
            x: 565, 
            y: 175, 
            bitmap: "fire_background", 
            scale: 4
        }, {
            type: "bitmap", 
            x: 660, 
            y: 170, 
            bitmap: "arrow_bar_background", 
            scale: 4
        }
        ],
        elements: {
            scaleBurn: {
                type: "scale", 
                x: 565, 
                y: 175, 
                bitmap: "fire_scale", 
                scale: 4, 
                direction: 1
            },
            scaleProgress: {
                type: "scale", 
                x: 660, 
                y: 170, 
                bitmap: "arrow_bar_scale", 
                scale: 4
            },
            slotSource: {
                type: "slot", 
                x: 550, 
                y: 80, 
                size: 80, 
                isValid: ValidFunc.source
            },
            slotFuel: {
                type: "slot", 
                x: 550, 
                y: 240, 
                size: 80, 
                isValid: ValidFunc.fuel
            },
            slotResult: {
                type: "slot", 
                x: 780, 
                y: 150, 
                size: 100, 
                isValid: ValidFunc.result
            }
        }
    }),
    
    window2: new UI.StandartWindow({
        standart: {
            header: {
                text: {
                    text: translate("Tertium Furnace")
                }
            },
            inventory: {
                standart: true
            },
            background: {
                standart: true
            }
        },
        drawing: [{
            type: "bitmap",
            x: 565, 
            y: 175, 
            bitmap: "fire_background", 
            scale: 4
        }, {
            type: "bitmap", 
            x: 660, 
            y: 170, 
            bitmap: "arrow_bar_background", 
            scale: 4
        }
        ],
        elements: {
            scaleBurn: {
                type: "scale", 
                x: 565, 
                y: 175, 
                bitmap: "fire_scale", 
                scale: 4, 
                direction: 1
            },
            scaleProgress: {
                type: "scale", 
                x: 660, 
                y: 170, 
                bitmap: "arrow_bar_scale", 
                scale: 4
            },
            slotSource: {
                type: "slot", 
                x: 550, 
                y: 80, 
                size: 80, 
                isValid: ValidFunc.source
            },
            slotFuel: {
                type: "slot", 
                x: 550, 
                y: 240, 
                size: 80, 
                isValid: ValidFunc.fuel
            },
            slotResult: {
                type: "slot", 
                x: 780, 
                y: 150, 
                size: 100, 
                isValid: ValidFunc.result
            }
        }
    }),
    
    window3: new UI.StandartWindow({
        standart: {
            header: {
                text: {
                    text: translate("Imperium Furnace")
                }
            },
            inventory: {
                standart: true
            },
            background: {
                standart: true
            }
        },
        drawing: [{
            type: "bitmap",
            x: 565, 
            y: 175, 
            bitmap: "fire_background", 
            scale: 4
        }, {
            type: "bitmap", 
            x: 660, 
            y: 170, 
            bitmap: "arrow_bar_background", 
            scale: 4
        }
        ],
        elements: {
            scaleBurn: {
                type: "scale", 
                x: 565, 
                y: 175, 
                bitmap: "fire_scale", 
                scale: 4, 
                direction: 1
            },
            scaleProgress: {
                type: "scale", 
                x: 660, 
                y: 170, 
                bitmap: "arrow_bar_scale", 
                scale: 4
            },
            slotSource: {
                type: "slot", 
                x: 550, 
                y: 80, 
                size: 80, 
                isValid: ValidFunc.source
            },
            slotFuel: {
                type: "slot", 
                x: 550, 
                y: 240, 
                size: 80, 
                isValid: ValidFunc.fuel
            },
            slotResult: {
                type: "slot", 
                x: 780, 
                y: 150, 
                size: 100, 
                isValid: ValidFunc.result
            }
        }
    }),
    
    window4: new UI.StandartWindow({
        standart: {
            header: {
                text: {
                    text: translate("Supremium Furnace")     
            }
        },
            inventory: {
                standart: true
            },
            background: {
                standart: true
            }
        },
        drawing: [
            {
                type: "bitmap",
                x: 565, 
                y: 175, 
                bitmap: "fire_background", 
                scale: 4
        }, {
            type: "bitmap", 
            x: 660, 
            y: 170, 
            bitmap: "arrow_bar_background", 
            scale: 4
        }
        ],
        elements: {
            scaleBurn: {
                type: "scale", 
                x: 565, 
                y: 175, 
                bitmap: "fire_scale", 
                scale: 4, 
                direction: 1
            },
            scaleProgress: {
                type: "scale", 
                x: 660, 
                y: 170, 
                bitmap: "arrow_bar_scale", 
                scale: 4
            },
            slotSource: {
                type: "slot", 
                x: 550, 
                y: 80, 
                size: 80, 
                isValid: ValidFunc.source
            },
            slotFuel: {
                type: "slot", 
                x: 550, 
                y: 240, 
                size: 80, 
                isValid: ValidFunc.fuel
            },
            slotResult: {
                type: "slot", 
                x: 780, 
                y: 150, 
                size: 100, 
                isValid: ValidFunc.result
            }
        }
    }),
    
    modifier: [0.66, 0.675, 0.55, 0.425, 0.2],
    speed: [65.5, 51, 31.5, 11.5, 2],
    
    getSpeedModifier: function(level){
        return this.modifier[level];
    },
    
    getSmeltingTime: function(level){
        return 2 * this.speed[level];
    }
};

IDRegistry.genBlockID("mystical_furnace");
Block.createBlock("mystical_furnace", [
    {
        name: "Inferium Furnace", 
        texture: Furnace.genTexArray(0), 
        inCreative: true
    }, {
        name: "Prudentium Furnace", 
        texture: Furnace.genTexArray(1), 
        inCreative: true
    }, {
        name: "Tertium Furnace", 
        texture: Furnace.genTexArray(2), 
        inCreative: true
    }, {
        name: "Imperium Furnace", 
        texture: Furnace.genTexArray(3), 
        inCreative: true
    }, {
        name: "Supremium Furnace", 
        texture: Furnace.genTexArray(4), 
        inCreative: true
    },
]);

MysticalRecipes.addFurnaceUpgrade(BlockID.mystical_furnace, VanillaBlockID.furnace, BlockID.inferium_block, ItemID.inferium_ingot, ItemID.inferium_essence, 0, 0)
MysticalRecipes.addFurnaceUpgrade(BlockID.mystical_furnace, BlockID.mystical_furnace, BlockID.prudentium_block, ItemID.prudentium_ingot, ItemID.prudentium_essence, 1, 0)
MysticalRecipes.addFurnaceUpgrade(BlockID.mystical_furnace, BlockID.mystical_furnace, BlockID.tertium_block, ItemID.tertium_ingot, ItemID.tertium_essence, 2, 1)
MysticalRecipes.addFurnaceUpgrade(BlockID.mystical_furnace, BlockID.mystical_furnace, BlockID.imperium_block, ItemID.imperium_ingot, ItemID.imperium_essence, 3, 2)
MysticalRecipes.addFurnaceUpgrade(BlockID.mystical_furnace, BlockID.mystical_furnace, BlockID.supremium_block, ItemID.supremium_ingot, ItemID.supremium_essence, 4, 3)


BlockRenderer.enableCoordMapping(BlockID.mystical_furnace, 0, Furnace.genTexRender(0));
BlockRenderer.enableCoordMapping(BlockID.mystical_furnace, 1, Furnace.genTexRender(1));
BlockRenderer.enableCoordMapping(BlockID.mystical_furnace, 2, Furnace.genTexRender(2));
BlockRenderer.enableCoordMapping(BlockID.mystical_furnace, 3, Furnace.genTexRender(3));
BlockRenderer.enableCoordMapping(BlockID.mystical_furnace, 4, Furnace.genTexRender(4));

TileRenderer.registerRotationModel(BlockID.mystical_furnace, 0, Furnace.genTexArray(0));
TileRenderer.registerRotationModel(BlockID.mystical_furnace, 4, Furnace.genTexArray(0, true));
TileRenderer.registerRotationModel(BlockID.mystical_furnace, 8, Furnace.genTexArray(1));
TileRenderer.registerRotationModel(BlockID.mystical_furnace, 12, Furnace.genTexArray(1, true));
TileRenderer.registerRotationModel(BlockID.mystical_furnace, 16, Furnace.genTexArray(2));
TileRenderer.registerRotationModel(BlockID.mystical_furnace, 20, Furnace.genTexArray(2, true));
TileRenderer.registerRotationModel(BlockID.mystical_furnace, 24, Furnace.genTexArray(3));
TileRenderer.registerRotationModel(BlockID.mystical_furnace, 28, Furnace.genTexArray(3, true));
TileRenderer.registerRotationModel(BlockID.mystical_furnace, 32, Furnace.genTexArray(4));
TileRenderer.registerRotationModel(BlockID.mystical_furnace, 36, Furnace.genTexArray(4, true));

Block.registerPlaceFunction(BlockID.mystical_furnace, function(coords, item, block){
    const place = canTileBeReplaced(block.id, block.data) ? coords : coords.relative;
    World.setFullBlock(place.x, place.y, place.z, item);
    World.addTileEntity(place.x, place.y, place.z).data.meta = TileRenderer.getBlockRotation();
});

TileEntity.registerPrototype(BlockID.mystical_furnace, {
    
    defaultValues: {
        level: 0,
        meta: 0,  
        burn: 0,
        burnMax: 1,
        progress: 0,
        isActive: false
    },
    
    setModel: function(){
        TileRenderer.mapAtCoords(this.x, this.y, this.z, this.blockID, this.data.level * 8 + this.data.meta + (this.data.isActive ? 4: 0));
    },
    
    init: function(){
        this.data.level = World.getBlock(this.x, this.y, this.z).data;
        this.setModel();  
    },
    
    destroy: function(){
        BlockRenderer.unmapAtCoords();
    },
    
    setActive: function(isActive){
        if(this.data.isActive != isActive){
            this.data.isActive = isActive;
            this.setModel();
        }
    }, 
    
    getGuiScreen: function(){
        switch(this.data.level) {
            case 0: return Furnace.window0;
            case 1: return Furnace.window1;
            case 2: return Furnace.window2;
            case 3: return Furnace.window3;
            case 4: return Furnace.window4;
        }    
    },
    
    setElemPos: function(storage){
        const window = this.container.getWindow();
        if(window){
            const elements = window.getElements();
            elements.get("subslotSource").setPosition(storage ? 470 : 1000, 80);
            elements.get("subslotFuel").setPosition(storage ? 470 : 1000, 240);
            elements.get("subslotResult").setPosition(storage ? 880 : 1000, 150);
        }
    },
    
    tick: function(){
          
        const smeltingTime = Furnace.getSmeltingTime(this.data.level);
        const slotSource = this.container.getSlot("slotSource");
        const slotFuel = this.container.getSlot("slotFuel");
        const result = Recipes.getFurnaceRecipeResult(slotSource.id, slotSource.data);
        let isActive = false;  
        
        
        if(result){
            getFuel:
            if(--this.data.burn <= 0){
                slotFuel.id == 0 && StorageInterface.addItemToSlot(this.container.getSlot("subslotFuel"), slotFuel, 64);
                let burnTime = Recipes.getFuelBurnDuration(slotFuel.id, slotFuel.data);
                if(burnTime <= 0){
                    this.data.burn = 0;
                    this.data.burnMax = -1;
                    break getFuel;
                }
                burnTime *= Furnace.getSpeedModifier(this.data.level);
                burnTime |= 0;
                if(slotFuel.count >= 1){
                    this.data.burn = this.data.burnMax = burnTime;
                    slotFuel.count --;
                    this.container.validateSlot("slotFuel");
                    break getFuel;
                }
            }
            if(this.data.burn > 0){
                this.data.progress++;
                if(this.data.progress >= smeltingTime){
                    const slotResult = this.container.getSlot("slotResult");
                    if(slotResult.id == 0 || slotResult.id == result.id && slotResult.data == result.data && slotResult.count + result.count <= Item.getMaxStack(result.id)){
                        slotResult.id = result.id;
                        slotResult.data = result.data;
                        slotResult.count += result.count;
                        slotSource.count--;
                        this.container.validateSlot("slotSource");
                        this.data.progress = 0;      
                    }
                    if(slotSource.id == 0) {
        				this.data.progress --;
       			 }
                }
                isActive = true;
            }
        }
        
        if(this.data.burn > 0 && this.data.progress == 0) {
        	this.data.burn --;
        }
        
        if(this.data.burn > 0) {
        	isActive = true;
        }
        
        if(!isActive){
            this.data.progress = 0;
        }
        
        this.setActive(isActive);
        this.container.setScale("scaleBurn", this.data.burn / this.data.burnMax);
        this.container.setScale("scaleProgress", this.data.progress / smeltingTime);  
        
    }
    
});


StorageInterface.createInterface(BlockID.mystical_furnace, {
    slots: {
        slotSource: {input: true, isValid: function(item, side){
            return side == 1 && !!Recipes.getFurnaceRecipeResult(item.id, item.data);
        }},
        slotFuel: {input: true, isValid: function(item, side){
            return side >= 2 && Recipes.getFuelBurnDuration(item.id, item.data) > 0;
        }},
        slotResult: {output: true},
        subslotResult: {output: true},
    },
});