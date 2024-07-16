var ReprocessorUI = new UI.StandartWindow({
    standard: {
        header: {
            text: {
                text: Translation.translate("Seeds Reprocessor"),
            },
        },
        inventory: {
            standard: true,
        },
        background: {
            standard: true,
        },
    },
    drawing: [
        {
            type: "bitmap",
            x: 700,
            y: 150,
            bitmap: "arrow_bar_background",
            scale: 4.2,
        },
        {
            type: "bitmap",
            x: 425,
            y: 120,
            bitmap: "fire_background",
            scale: 4.1,
        },
        {
        	type: "bitmap",
            x: 350,
            y: 100,
            bitmap: "ground",
            scale: 1.8,
        },
    ],
    elements: {
        progress_scale: {
            type: "scale",
            x: 700,
            y: 150,
            direction: 0,
            bitmap: "arrow_bar_scale",
            scale: 4.2
        },
        burning_scale: {
            type: "scale",
            x: 425,
            y: 120,
            direction: 1,
            bitmap: "fire_scale",
            scale: 4.1,
        },
        coal_slot: {
            type: "slot",
            x: 420,
            y: 180,
            bitmap: "slot",
            size: 60,
        },
        input: {
            type: "slot",
            x: 600,
            y: 150,
            bitmap: "slot",
            size: 60,
        },
        energy_scale: {
            type: "scale",
            x: 350,
            y: 100,
            direction: 1,
            bitmap: "scale",
            scale: 1.8,
        },
        output: {
            type: "slot",
            x: 830,
            y: 130,
            bitmap: "slot",
            size: 100,
        },
    },
});

const Reprocessor = {list: {},
          addRecipe: function(input, output) {
                 this.list[input] = output
     }
}

//Reprocessor.addRecipe(ItemID._seeds, ItemID._essence)


Reprocessor.addRecipe(ItemID.inferium_seeds, ItemID.inferium_essence)
Reprocessor.addRecipe(ItemID.dirt_seeds, ItemID.dirt_essence)
Reprocessor.addRecipe(ItemID.air_seeds, ItemID.air_essence)
Reprocessor.addRecipe(ItemID.earth_seeds, ItemID.earth_essence)
Reprocessor.addRecipe(ItemID.netherite_seeds, ItemID.netherite_essence)
Reprocessor.addRecipe(ItemID.prismarine_seeds, ItemID.prismarine_essence)
Reprocessor.addRecipe(ItemID.nature_seeds, ItemID.nature_essence)
Reprocessor.addRecipe(ItemID.wood_seeds, ItemID.wood_essence)
Reprocessor.addRecipe(ItemID.stone_seeds, ItemID.stone_essence)
Reprocessor.addRecipe(ItemID.coal_seeds, ItemID.coal_essence)
Reprocessor.addRecipe(ItemID.iron_seeds, ItemID.iron_essence)
Reprocessor.addRecipe(ItemID.gold_seeds, ItemID.gold_essence)
Reprocessor.addRecipe(ItemID.lapis_seeds, ItemID.lapis_essence)
Reprocessor.addRecipe(ItemID.redstone_seeds, ItemID.redstone_essence)
Reprocessor.addRecipe(ItemID.diamond_seeds, ItemID.diamond_essence)
Reprocessor.addRecipe(ItemID.emerald_seeds, ItemID.emerald_essence)
Reprocessor.addRecipe(ItemID.end_seeds, ItemID.end_essence)
Reprocessor.addRecipe(ItemID.nether_seeds, ItemID.nether_essence)
Reprocessor.addRecipe(ItemID.glowstone_seeds, ItemID.glowstone_essence)
Reprocessor.addRecipe(ItemID.fire_seeds, ItemID.fire_essence)
Reprocessor.addRecipe(ItemID.water_seeds, ItemID.water_essence)
Reprocessor.addRecipe(ItemID.ice_seeds, ItemID.ice_essence)
Reprocessor.addRecipe(ItemID.obsidian_seeds, ItemID.obsidian_essence)
Reprocessor.addRecipe(ItemID.quartz_seeds, ItemID.quartz_essence)
Reprocessor.addRecipe(ItemID.zombie_seeds, ItemID.zombie_essence)
Reprocessor.addRecipe(ItemID.cow_seeds, ItemID.cow_essence)
Reprocessor.addRecipe(ItemID.wither_skeleton_seeds, ItemID.wither_skeleton_essence)
Reprocessor.addRecipe(ItemID.turtle_seeds, ItemID.turtle_essence)
Reprocessor.addRecipe(ItemID.blaze_seeds, ItemID.blaze_essence)
Reprocessor.addRecipe(ItemID.bronze_seeds, ItemID.bronze_essence)
Reprocessor.addRecipe(ItemID.chicken_seeds, ItemID.chicken_essence)
Reprocessor.addRecipe(ItemID.copper_seeds, ItemID.copper_essence)
Reprocessor.addRecipe(ItemID.tin_seeds, ItemID.tin_essence)
Reprocessor.addRecipe(ItemID.creeper_seeds, ItemID.creeper_essence)
Reprocessor.addRecipe(ItemID.enderman_seeds, ItemID.enderman_essence)
Reprocessor.addRecipe(ItemID.fish_seeds, ItemID.fish_essence)
Reprocessor.addRecipe(ItemID.ghast_seeds, ItemID.ghast_essence)
Reprocessor.addRecipe(ItemID.lead_seeds, ItemID.lead_essence)
Reprocessor.addRecipe(ItemID.pig_seeds, ItemID.pig_essence)
Reprocessor.addRecipe(ItemID.steel_seeds, ItemID.steel_essence)
Reprocessor.addRecipe(ItemID.rabbit_seeds, ItemID.rabbit_essence)
Reprocessor.addRecipe(ItemID.sheep_seeds, ItemID.sheep_essence)
Reprocessor.addRecipe(ItemID.silver_seeds, ItemID.silver_essence)
Reprocessor.addRecipe(ItemID.skeleton_seeds, ItemID.skeleton_essence)
Reprocessor.addRecipe(ItemID.slime_seeds, ItemID.slime_essence)
Reprocessor.addRecipe(ItemID.spider_seeds, ItemID.spider_essence)
Reprocessor.addRecipe(ItemID.squid_seeds, ItemID.squid_essence)






TileEntity.registerPrototype(BlockID.basic_reprocessor, { 
     defaultValues: {
         progress: 0,
         burning: 0,
         active: false,
         energy: 0
     },
     useNetworkItemContainer: true, 
     getScreenName: function() { return "main"; }, 
     getScreenByName: function() { return ReprocessorUI 
     }, 
     tick: function () {
         this.container.validateAll();
         this.container.sendChanges();
         this.container.setScale("burning_scale", this.data.burning / 1500);
         this.container.setScale("energy_scale", this.data.energy / 80000);
         this.container.setScale("progress_scale", this.data.progress / 50);
     
           const coalSlot = this.container.getSlot("coal_slot");
if(coalSlot.id === VanillaItemID.coal && this.data.active === false && this.data.burning === 0) {
this.container.setSlot("coal_slot", coalSlot.id, coalSlot.count - 1 , coalSlot.data, coalSlot.extra);
this.data.active = true;
}


if(this.data.active === true && this.data.burning < 1500) {
this.data.burning += 1;
if(this.data.burning === 1500) {
	this.data.active = false
	}
}

if(this.data.burning > 0 && this.data.energy < 80000) {
this.data.burning -= 1;
this.data.energy += 1500;
if(this.data.burning === 0){ this.data.active = false; }
}

        const input = this.container.getSlot("input");
const output = this.container.getSlot("output");
for(let i in Reprocessor.list) {
if(input.id === Number(i) && this.data.progress < 50 && this.data.energy >= 250) {
this.data.progress++;
if(this.data.progress === 50 && output.count <= 62) {
this.container.setSlot("output", Reprocessor.list[i], output.count + 2, output.data, output.extra);
this.container.setSlot("input", input.id, input.count - 1, input.data, input.extra);
this.data.energy -= 1500;
this.data.progress = 0;

}
if(output.count === 64) { 
this.data.progress = 0; 
}
}
}
}
});


TileEntity.registerPrototype(BlockID.inferium_reprocessor, { 
     defaultValues: {
         progress: 0,
         burning: 0,
         active: false,
         energy: 0
     },
     useNetworkItemContainer: true, 
     getScreenName: function() { return "main"; }, 
     getScreenByName: function() { return ReprocessorUI 
     }, 
     tick: function () {
         this.container.validateAll();
         this.container.sendChanges();
         this.container.setScale("burning_scale", this.data.burning / 1500);
         this.container.setScale("energy_scale", this.data.energy / 120000);
         this.container.setScale("progress_scale", this.data.progress / 50);
     
           const coalSlot = this.container.getSlot("coal_slot");
if(coalSlot.id === VanillaItemID.coal && this.data.active === false && this.data.burning === 0) {
this.container.setSlot("coal_slot", coalSlot.id, coalSlot.count - 1 , coalSlot.data, coalSlot.extra);
this.data.active = true;
}


if(this.data.active === true && this.data.burning < 1500) {
this.data.burning += 1;
if(this.data.burning === 1500) {
	this.data.active = false
	}
}

if(this.data.burning > 0 && this.data.energy < 120000) {
this.data.burning -= 1;
this.data.energy += 1500;
if(this.data.burning === 0){ this.data.active = false; }
}

        const input = this.container.getSlot("input");
const output = this.container.getSlot("output");
for(let i in Reprocessor.list) {
if(input.id === Number(i) && this.data.progress < 50 && this.data.energy >= 250) {
this.data.progress++;
if(this.data.progress === 50 && output.count <= 62) {
this.container.setSlot("output", Reprocessor.list[i], output.count + 2, output.data, output.extra);
this.container.setSlot("input", input.id, input.count - 1, input.data, input.extra);
this.data.energy -= 1500;
this.data.progress = 0;

}
if(output.count === 64) { 
this.data.progress = 0; 
}
}
}
}
});





TileEntity.registerPrototype(BlockID.prudentium_reprocessor, { 
     defaultValues: {
         progress: 0,
         burning: 0,
         active: false,
         energy: 0
     },
     useNetworkItemContainer: true, 
     getScreenName: function() { return "main"; }, 
     getScreenByName: function() { return ReprocessorUI 
     }, 
     tick: function () {
         this.container.validateAll();
         this.container.sendChanges();
         this.container.setScale("burning_scale", this.data.burning / 1500);
         this.container.setScale("energy_scale", this.data.energy / 180000);
         this.container.setScale("progress_scale", this.data.progress / 40);
     
           const coalSlot = this.container.getSlot("coal_slot");
if(coalSlot.id === VanillaItemID.coal && this.data.active === false && this.data.burning === 0) {
this.container.setSlot("coal_slot", coalSlot.id, coalSlot.count - 1 , coalSlot.data, coalSlot.extra);
this.data.active = true;
}


if(this.data.active === true && this.data.burning < 1500) {
this.data.burning += 1;
if(this.data.burning === 1500) {
	this.data.active = false
	}
}

if(this.data.burning > 0 && this.data.energy < 180000) {
this.data.burning -= 1;
this.data.energy += 1500;
if(this.data.burning === 0){ this.data.active = false; }
}

        const input = this.container.getSlot("input");
const output = this.container.getSlot("output");
for(let i in Reprocessor.list) {
if(input.id === Number(i) && this.data.progress < 50 && this.data.energy >= 250) {
this.data.progress++;
if(this.data.progress === 40 && output.count <= 62) {
this.container.setSlot("output", Reprocessor.list[i], output.count + 2, output.data, output.extra);
this.container.setSlot("input", input.id, input.count - 1, input.data, input.extra);
this.data.energy -= 1500;
this.data.progress = 0;

}
if(output.count === 64) { 
this.data.progress = 0; 
}
}
}
}
});




TileEntity.registerPrototype(BlockID.intermedium_reprocessor, { 
     defaultValues: {
         progress: 0,
         burning: 0,
         active: false,
         energy: 0
     },
     useNetworkItemContainer: true, 
     getScreenName: function() { return "main"; }, 
     getScreenByName: function() { return ReprocessorUI 
     }, 
     tick: function () {
         this.container.validateAll();
         this.container.sendChanges();
         this.container.setScale("burning_scale", this.data.burning / 1500);
         this.container.setScale("energy_scale", this.data.energy / 300000);
         this.container.setScale("progress_scale", this.data.progress / 30);
     
           const coalSlot = this.container.getSlot("coal_slot");
if(coalSlot.id === VanillaItemID.coal && this.data.active === false && this.data.burning === 0) {
this.container.setSlot("coal_slot", coalSlot.id, coalSlot.count - 1 , coalSlot.data, coalSlot.extra);
this.data.active = true;
}


if(this.data.active === true && this.data.burning < 1500) {
this.data.burning += 1;
if(this.data.burning === 1500) {
	this.data.active = false
	}
}

if(this.data.burning > 0 && this.data.energy < 300000) {
this.data.burning -= 1;
this.data.energy += 1500;
if(this.data.burning === 0){ this.data.active = false; }
}

        const input = this.container.getSlot("input");
const output = this.container.getSlot("output");
for(let i in Reprocessor.list) {
if(input.id === Number(i) && this.data.progress < 50 && this.data.energy >= 250) {
this.data.progress++;
if(this.data.progress === 30 && output.count <= 62) {
this.container.setSlot("output", Reprocessor.list[i], output.count + 2, output.data, output.extra);
this.container.setSlot("input", input.id, input.count - 1, input.data, input.extra);
this.data.energy -= 1500;
this.data.progress = 0;

}
if(output.count === 64) { 
this.data.progress = 0; 
}
}
}
}
});






TileEntity.registerPrototype(BlockID.superium_reprocessor, { 
     defaultValues: {
         progress: 0,
         burning: 0,
         active: false,
         energy: 0
     },
     useNetworkItemContainer: true, 
     getScreenName: function() { return "main"; }, 
     getScreenByName: function() { return ReprocessorUI 
     }, 
     tick: function () {
         this.container.validateAll();
         this.container.sendChanges();
         this.container.setScale("burning_scale", this.data.burning / 1500);
         this.container.setScale("energy_scale", this.data.energy / 420000);
         this.container.setScale("progress_scale", this.data.progress / 20);
     
           const coalSlot = this.container.getSlot("coal_slot");
if(coalSlot.id === VanillaItemID.coal && this.data.active === false && this.data.burning === 0) {
this.container.setSlot("coal_slot", coalSlot.id, coalSlot.count - 1 , coalSlot.data, coalSlot.extra);
this.data.active = true;
}


if(this.data.active === true && this.data.burning < 1500) {
this.data.burning += 1;
if(this.data.burning === 1500) {
	this.data.active = false
	}
}

if(this.data.burning > 0 && this.data.energy < 420000) {
this.data.burning -= 1;
this.data.energy += 1500;
if(this.data.burning === 0){ this.data.active = false; }
}

        const input = this.container.getSlot("input");
const output = this.container.getSlot("output");
for(let i in Reprocessor.list) {
if(input.id === Number(i) && this.data.progress < 50 && this.data.energy >= 250) {
this.data.progress++;
if(this.data.progress === 20 && output.count <= 62) {
this.container.setSlot("output", Reprocessor.list[i], output.count + 2, output.data, output.extra);
this.container.setSlot("input", input.id, input.count - 1, input.data, input.extra);
this.data.energy -= 1500;
this.data.progress = 0;

}
if(output.count === 64) { 
this.data.progress = 0; 
}
}
}
}
});





TileEntity.registerPrototype(BlockID.supremium_reprocessor, { 
     defaultValues: {
         progress: 0,
         burning: 0,
         active: false,
         energy: 0
     },
     useNetworkItemContainer: true, 
     getScreenName: function() { return "main"; }, 
     getScreenByName: function() { return ReprocessorUI 
     }, 
     tick: function () {
         this.container.validateAll();
         this.container.sendChanges();
         this.container.setScale("burning_scale", this.data.burning / 1500);
         this.container.setScale("energy_scale", this.data.energy / 640000);
         this.container.setScale("progress_scale", this.data.progress / 5);
     
           const coalSlot = this.container.getSlot("coal_slot");
if(coalSlot.id === VanillaItemID.coal && this.data.active === false && this.data.burning === 0) {
this.container.setSlot("coal_slot", coalSlot.id, coalSlot.count - 1 , coalSlot.data, coalSlot.extra);
this.data.active = true;
}


if(this.data.active === true && this.data.burning < 1500) {
this.data.burning += 1;
if(this.data.burning === 1500) {
	this.data.active = false
	}
}

if(this.data.burning > 0 && this.data.energy < 640000) {
this.data.burning -= 1;
this.data.energy += 1500;
if(this.data.burning === 0){ this.data.active = false; }
}

        const input = this.container.getSlot("input");
const output = this.container.getSlot("output");
for(let i in Reprocessor.list) {
if(input.id === Number(i) && this.data.progress < 50 && this.data.energy >= 250) {
this.data.progress++;
if(this.data.progress === 5 && output.count <= 62) {
this.container.setSlot("output", Reprocessor.list[i], output.count + 2, output.data, output.extra);
this.container.setSlot("input", input.id, input.count - 1, input.data, input.extra);
this.data.energy -= 1500;
this.data.progress = 0;

}
if(output.count === 64) { 
this.data.progress = 0; 
}
}
}
}
});
