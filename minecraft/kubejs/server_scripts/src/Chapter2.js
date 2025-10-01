ServerEvents.recipes((event) => {
    event.remove({ type: "create:crushing", input: "minecraft:calcite" });
    event.remove({ type: "create:crushing", input: "minecraft:tuff" });
    event.remove({ type: "create:crushing", input: "create:asurine" });
    event.remove({ type: "create:crushing", input: "create:crimsite" });
    event.remove({ type: "create:crushing", input: "create:veridium" });
    event.remove({
        type: "create:crushing",
        input: "minecraft:dripstone_block",
    });
    event.remove({ type: "create:crushing", input: "minecraft:basalt" });

    event.recipes.create.crushing(
        Item.of("create:crushed_raw_aluminum").withChance(0.3),
        "create:limestone"
    );
    event.recipes.create.crushing(
        Item.of("mysticalagriculture:diamond_essence").withChance(0.3),
        "create:scoria"
    );
    event.recipes.create.crushing(
        Item.of("mysticalagriculture:diamond_essence").withChance(0.3),
        "create:scorchia"
    );
    event.recipes.create.crushing(
        [
            Item.of("minecraft:bone_meal").withChance(0.75),
            Item.of("create:crushed_raw_silver").withChance(0.3),
        ],
        "minecraft:calcite"
    );

    event.recipes.create.crushing(
        [
            Item.of("create:zinc_nugget").withChance(0.3),
            Item.of("create:copper_nugget").withChance(0.3),
            Item.of("minecraft:iron_nugget").withChance(0.3),
            Item.of("createaddition:electrum_nugget").withChance(0.15),
            Item.of("minecraft:gold_nugget").withChance(0.15),
            Item.of("mysticalagriculture:inferium_essence").withChance(0.25),
        ],
        "minecraft:tuff"
    );

    event.recipes.create.crushing(
        [
            Item.of("create:crushed_raw_zinc").withChance(0.4),
            Item.of("minecraft:lapis_lazuli").withChance(0.3),
        ],
        "create:asurine"
    );

    event.recipes.create.crushing(
        [
            Item.of("create:crushed_raw_iron").withChance(0.4),
            Item.of("minecraft:redstone").withChance(0.3),
            Item.of("create:crushed_raw_nickel").withChance(0.3),
        ],
        "create:crimsite"
    );

    event.recipes.create.crushing(
        [
            Item.of("create:crushed_raw_copper").withChance(0.4),
            Item.of("create:crushed_raw_uranium").withChance(0.3),
            Item.of("create:crushed_raw_lead").withChance(0.3),
        ],
        "create:veridium"
    );

    event.recipes.create.crushing(
        [
            Item.of("minecraft:clay_ball").withChance(0.75),
            Item.of("mysticalagriculture:prosperity_shard").withChance(0.25),
        ],
        "minecraft:dripstone_block"
    );

    event.recipes.create.crushing(
        [
            Item.of("minecraft:coal").withChance(0.5),
            Item.of("create:crushed_raw_lead").withChance(0.3),
            Item.of("mekanism:fluorite_gem").withChance(0.3),
        ],
        "minecraft:basalt"
    );

    //rocket
    event.remove({ output: "ad_astra:rocket_nose_cone" });
    event.shaped(
        Item.of("ad_astra:rocket_nose_cone", 1),
        [" A ", "BBB", "B B"],
        {
            A: "minecraft:lightning_rod",
            B: "naturesaura:sky_ingot",
        }
    );
    event.remove({ output: "ad_astra:rocket_fin" });
    event.shaped(Item.of("ad_astra:rocket_fin", 4), [" A ", "AAA", "A A"], {
        A: "naturesaura:sky_ingot",
    });

    //mystical agriculture pedestal
    event.remove({ output: "mysticalagriculture:infusion_pedestal" });
    event.shaped(
        Item.of("mysticalagriculture:infusion_pedestal", 1),
        ["ABA", " C ", " C "],
        {
            A: "minecraft:gold_ingot",
            B: "minecraft:red_wool",
            C: "ad_astra:moon_stone",
        }
    );
    event.remove({ output: "mysticalagriculture:infusion_altar" });
    event.shaped(
        Item.of("mysticalagriculture:infusion_altar", 1),
        ["ABA", " C ", "CCC"],
        {
            A: "minecraft:gold_ingot",
            B: "minecraft:red_wool",
            C: "ad_astra:moon_stone",
        }
    );

    //all the goddamn botania apothecaries
    event.remove({ output: "botania:apothecary_default" });
    event.shaped(
        Item.of("botania:apothecary_default", 1),
        ["ABA", "CAC", "AAA"],
        {
            A: "minecraft:cobblestone",
            B: "#botania:petals",
            C: "minecraft:glowstone_dust",
        }
    );
    event.remove({ output: "botania:apothecary_forest" });
    event.shaped(
        Item.of("botania:apothecary_forest", 1),
        ["ABA", "CAC", "AAA"],
        {
            A: "botania:metamorphic_forest_cobblestone",
            B: "#botania:petals",
            C: "minecraft:glowstone_dust",
        }
    );
    event.remove({ output: "botania:apothecary_plains" });
    event.shaped(
        Item.of("botania:apothecary_plains", 1),
        ["ABA", "CAC", "AAA"],
        {
            A: "botania:metamorphic_plains_cobblestone",
            B: "#botania:petals",
            C: "minecraft:glowstone_dust",
        }
    );
    event.remove({ output: "botania:apothecary_mountain" });
    event.shaped(
        Item.of("botania:apothecary_mountain", 1),
        ["ABA", "CAC", "AAA"],
        {
            A: "botania:metamorphic_mountain_cobblestone",
            B: "#botania:petals",
            C: "minecraft:glowstone_dust",
        }
    );
    event.remove({ output: "botania:apothecary_fungal" });
    event.shaped(
        Item.of("botania:apothecary_fungal", 1),
        ["ABA", "CAC", "AAA"],
        {
            A: "botania:metamorphic_fungal_cobblestone",
            B: "#botania:petals",
            C: "minecraft:glowstone_dust",
        }
    );
    event.remove({ output: "botania:apothecary_swamp" });
    event.shaped(
        Item.of("botania:apothecary_swamp", 1),
        ["ABA", "CAC", "AAA"],
        {
            A: "botania:metamorphic_swamp_cobblestone",
            B: "#botania:petals",
            C: "minecraft:glowstone_dust",
        }
    );
    event.remove({ output: "botania:apothecary_desert" });
    event.shaped(
        Item.of("botania:apothecary_desert", 1),
        ["ABA", "CAC", "AAA"],
        {
            A: "botania:metamorphic_desert_cobblestone",
            B: "#botania:petals",
            C: "minecraft:glowstone_dust",
        }
    );
    event.remove({ output: "botania:apothecary_taiga" });
    event.shaped(
        Item.of("botania:apothecary_taiga", 1),
        ["ABA", "CAC", "AAA"],
        {
            A: "botania:metamorphic_taiga_cobblestone",
            B: "#botania:petals",
            C: "minecraft:glowstone_dust",
        }
    );
    event.remove({ output: "botania:apothecary_mesa" });
    event.shaped(Item.of("botania:apothecary_mesa", 1), ["ABA", "CAC", "AAA"], {
        A: "botania:metamorphic_mesa_cobblestone",
        B: "#botania:petals",
        C: "minecraft:glowstone_dust",
    });
    event.remove({ output: "botania:apothecary_mossy" });
    event.shaped(
        Item.of("botania:apothecary_mossy", 1),
        ["ABA", "CAC", "AAA"],
        {
            A: "minecraft:mossy_cobblestone",
            B: "#botania:petals",
            C: "minecraft:glowstone_dust",
        }
    );

    event.remove({ output: "botania:apothecary_livingrock" });
    event.shaped(
        Item.of("botania:apothecary_livingrock", 1),
        ["ABA", "CAC", "AAA"],
        {
            A: "botania:livingrock",
            B: "#botania:petals",
            C: "minecraft:glowstone_dust",
        }
    );
    event.remove({ output: "botania:apothecary_deepslate" });
    event.shaped(
        Item.of("botania:apothecary_deepslate", 1),
        ["ABA", "CAC", "AAA"],
        {
            A: "minecraft:cobbled_deepslate",
            B: "#botania:petals",
            C: "minecraft:glowstone_dust",
        }
    );
});
