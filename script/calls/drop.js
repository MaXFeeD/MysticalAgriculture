Callback.addCallback("EntityDeath", function(entity){
   var coords = Entity.getPosition(entity);
      var infer  = parseInt(Math.random() * 2);
      World.drop(coords.x, coords.y, coords.z, ItemID.inferium_essence, infer);
});
