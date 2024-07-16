Callback.addCallback("GenerateChunk", function (X, Z, random, id, chunkSeed, worldSeed, dimensionSeed) {
    for (var i = 0; i < 15; i++)
        if (random.nextFloat() < .8)
            GenerationUtils.generateOre(X * 16 + random.nextInt(16), 10 + random.nextInt(55), Z * 16 + random.nextInt(16), BlockID.inferium_ore, 0, 4, false, dimensionSeed);
          else
            GenerationUtils.generateOre(X * 16 + random.nextInt(16), 10 + random.nextInt(55), Z * 16 + random.nextInt(16), BlockID.prosperity_ore, 0, 4, false, dimensionSeed);
});

Callback.addCallback("GenerateNetherChunk", function (X, Z, random, id, chunkSeed, worldSeed, dimensionSeed) {
    for (var i = 0; i < 15; i++)
        if (random.nextFloat() < .8)
            GenerationUtils.generateOre(X * 16 + random.nextInt(16), 10 + random.nextInt(70), Z * 16 + random.nextInt(16), BlockID.nether_inferium_ore, 0, 4, false, dimensionSeed);
          else
            GenerationUtils.generateOre(X * 16 + random.nextInt(16), 10 + random.nextInt(70), Z * 16 + random.nextInt(16), BlockID.nether_prosperity_ore, 0, 4, false, dimensionSeed);
});

Callback.addCallback("GenerateEndChunk", function (X, Z, random, id, chunkSeed, worldSeed, dimensionSeed) {
    for (var i = 0; i < 15; i++)
        if (random.nextFloat() < .8)
            GenerationUtils.generateOre(X * 16 + random.nextInt(16), 10 + random.nextInt(65), Z * 16 + random.nextInt(16), BlockID.end_inferium_ore, 0, 4, false, dimensionSeed);
          else
            GenerationUtils.generateOre(X * 16 + random.nextInt(16), 10 + random.nextInt(65), Z * 16 + random.nextInt(16), BlockID.end_prosperity_ore, 0, 4, false, dimensionSeed);
});

var WorldDecorator;
(function (WorldDecorator) {
    WorldDecorator.genSoulstoneChance = __config__.getInteger("world_gen.soulstone");
    function randomCoords(random, chunkX, chunkZ, minHeight, maxHeight) {
        if (minHeight === void 0) { minHeight = 0; }
        if (maxHeight === void 0) { maxHeight = 128; }
        var x = chunkX * 16 + random.nextInt(16);
        var z = chunkZ * 16 + random.nextInt(16);
        var y = random.nextInt(maxHeight - minHeight + 1) + minHeight;
        return { x: x, y: y, z: z };
    }
    WorldDecorator.randomCoords = randomCoords;
    function genSoulstone(x, y, z, random) {
        GenerationUtils.generateOre(x, y, z, BlockID.soulstone, 0, 72, false, random.nextInt());
        GenerationUtils.generateOre(x + random.nextInt(6), y, z + random.nextInt(6), BlockID.soulstone, 0, 64, false, random.nextInt());
    }   World.addGenerationCallback("GenerateNetherChunk", function (chunkX, chunkZ, random) {
        if (random.nextInt(100) < WorldDecorator.genSoulstoneChance) {
            var coords = randomCoords(random, chunkX, chunkZ, 32, 96);
            if (World.getBlockID(coords.x, coords.y, coords.z) == VanillaBlockID.netherrack) {
                genSoulstone(coords.x, coords.y, coords.z, random);
        GenerationUtils.generateOre(coords.x + random.nextInt(6), coords.y, coords.z + random.nextInt(6), BlockID.soulium_ore, 0, 25, false, random.nextInt());
            }
        }
    }, "generation");
})(WorldDecorator || (WorldDecorator = {}));
