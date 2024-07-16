var prudentiumArmor = false
var intermediumArmor = false	
var superiumArmor = false	
var supremiumArmor = false	
		
Callback.addCallback("ServerPlayerTick", function(playerUid){
var client = Network.getClientForPlayer(playerUid);

	if(World.getThreadTime()){
		if(World.getBlock(Entity.getPosition(playerUid).x-0.5, Entity.getPosition (playerUid).y-0.8, Entity.getPosition (playerUid).z-0.6).id == BlockID.hexibiscus){
			Entity.addEffect(playerUid, Native.PotionEffect.absorption, 0, 20*5);
			Entity.addEffect(playerUid, Native.PotionEffect.regeneration, 0, 20*5);
		}
	}
	var armor = [Entity.getArmorSlot(playerUid, 0), Entity.getArmorSlot(playerUid, 1), Entity.getArmorSlot(playerUid, 2), Entity.getArmorSlot(playerUid, 3)];
	if(World.getThreadTime()){
		if(armor[0].id == ItemID.prudentium_helmet&&armor[1].id == ItemID.prudentium_chestplate&&armor[2].id == ItemID.prudentium_leggings&&armor[3].id == ItemID.prudentium_boots){
			prudentiumArmor = true;
			Entity.addEffect(playerUid, Native.PotionEffect.waterBreathing, 1, 20*5);
		}else if(prudentiumArmor) Entity.clearEffects (playerUid);
            prudentiumArmor = false;
		
		if(armor[0].id == ItemID.intermedium_helmet&&armor[1].id == ItemID.intermedium_chestplate&&armor[2].id == ItemID.intermedium_leggings&&armor[3].id == ItemID.intermedium_boots){
			intermediumArmor = true;
			Entity.addEffect(playerUid, Native.PotionEffect.waterBreathing, 1, 20*5);
			Entity.addEffect(playerUid, Native.PotionEffect.jump, 1, 20*5);
		}else if(intermediumArmor) Entity.clearEffects (playerUid);
            intermediumArmor = false;
		
		if(armor[0].id == ItemID.superium_helmet&&armor[1].id == ItemID.superium_chestplate&&armor[2].id == ItemID.superium_leggings&&armor[3].id == ItemID.superium_boots){
			superiumArmor = true;
			Entity.addEffect(playerUid, Native.PotionEffect.waterBreathing, 1, 20*5);
			Entity.addEffect(playerUid, Native.PotionEffect.jump, 1, 20*5);
		}else if(superiumArmor)  Entity.clearEffects (playerUid);
            superiumArmor = false;
		
		if(armor[0].id == ItemID.supremium_helmet&&armor[1].id == ItemID.supremium_chestplate&&armor[2].id == ItemID.supremium_leggings&&armor[3].id == ItemID.supremium_boots){
			supremiumArmor = true;
			Entity.addEffect(playerUid, Native.PotionEffect.waterBreathing, 1, 20*5);
			Entity.addEffect(playerUid, Native.PotionEffect.jump, 1, 20*5);
			Player.setFlyingEnabled(true);
		}else if(supremiumArmor) {
            Entity.clearEffects (playerUid);
            Player.setFlyingEnabled(false);
            supremiumArmor = false;
            }
       }
});
/*evil= 19, 28, 32, 33, 35, 37, 38, 43, 44
    peace= 10, 11, 12, 13, 17*/
