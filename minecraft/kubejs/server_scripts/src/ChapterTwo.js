ServerEvents.recipes((event) => {
    // TODO crush asurine -> also lapis
    // TODO crush crimsite -> also redstone
    // TODO crush ochrum -> glowstone

    //rocket
    event.remove({output: "ad_astra:rocket_nose_cone"});
    event.shaped(Item.of("ad_astra:rocket_nose_cone", 1), [" A ", "BBB", "B B"], {
        A:"minecraft:lightning_rod",
        B:"naturesaura:sky_ingot",
    });
    event.remove({output: "ad_astra:rocket_fin"});
    event.shaped(Item.of("ad_astra:rocket_fin", 4), [" A ", "AAA", "A A"], {
        A:"naturesaura:sky_ingot",
    });

    //mystical agriculture pedestal
    event.remove({output: "mysticalagriculture:infusion_pedestal"});
    event.shaped(Item.of("mysticalagriculture:infusion_pedestal", 1), ["ABA", " C ", " C "], {
        A: "minecraft:gold_ingot",
        B: "minecraft:red_wool",
        C:"ad_astra:moon_stone",
    });
    event.remove({output: "mysticalagriculture:infusion_altar"});
    event.shaped(Item.of("mysticalagriculture:infusion_altar", 1), ["ABA", " C ", "CCC"], {
        A: "minecraft:gold_ingot",
        B: "minecraft:red_wool",
        C:"ad_astra:moon_stone",
    });


    //all the goddamn botania apothecaries
    event.remove({output: "botania:apothecary_default"});
    event.shaped(Item.of("botania:apothecary_default", 1), ["ABA","CAC","AAA"], {
        A:"minecraft:cobblestone",
        B:"#botania:petals",
        C:"minecraft:glowstone_dust",
    });
    event.remove({output: "botania:apothecary_forest"});
    event.shaped(Item.of("botania:apothecary_forest", 1), ["ABA","CAC","AAA"], {
        A:"botania:metamorphic_forest_cobblestone",
        B:"#botania:petals",
        C:"minecraft:glowstone_dust",
    });
    event.remove({output: "botania:apothecary_plains"});
    event.shaped(Item.of("botania:apothecary_plains", 1), ["ABA","CAC","AAA"], {
        A:"botania:metamorphic_plains_cobblestone",
        B:"#botania:petals",
        C:"minecraft:glowstone_dust",
    });
    event.remove({output: "botania:apothecary_mountain"});
    event.shaped(Item.of("botania:apothecary_mountain", 1), ["ABA","CAC","AAA"], {
        A:"botania:metamorphic_mountain_cobblestone",
        B:"#botania:petals",
        C:"minecraft:glowstone_dust",
    });
    event.remove({output: "botania:apothecary_fungal"});
    event.shaped(Item.of("botania:apothecary_fungal", 1), ["ABA","CAC","AAA"], {
        A:"botania:metamorphic_fungal_cobblestone",
        B:"#botania:petals",
        C:"minecraft:glowstone_dust",
    });
    event.remove({output: "botania:apothecary_swamp"});
    event.shaped(Item.of("botania:apothecary_swamp", 1), ["ABA","CAC","AAA"], {
        A:"botania:metamorphic_swamp_cobblestone",
        B:"#botania:petals",
        C:"minecraft:glowstone_dust",
    });
    event.remove({output: "botania:apothecary_desert"});
    event.shaped(Item.of("botania:apothecary_desert", 1), ["ABA","CAC","AAA"], {
        A:"botania:metamorphic_desert_cobblestone",
        B:"#botania:petals",
        C:"minecraft:glowstone_dust",
    });
    event.remove({output: "botania:apothecary_taiga"});
    event.shaped(Item.of("botania:apothecary_taiga", 1), ["ABA","CAC","AAA"], {
        A:"botania:metamorphic_taiga_cobblestone",
        B:"#botania:petals",
        C:"minecraft:glowstone_dust",
    });
    event.remove({output: "botania:apothecary_mesa"});
    event.shaped(Item.of("botania:apothecary_mesa", 1), ["ABA","CAC","AAA"], {
        A:"botania:metamorphic_mesa_cobblestone",
        B:"#botania:petals",
        C:"minecraft:glowstone_dust",
    });
    event.remove({output: "botania:apothecary_mossy"});
    event.shaped(Item.of("botania:apothecary_mossy", 1), ["ABA","CAC","AAA"], {
        A:"minecraft:mossy_cobblestone",
        B:"#botania:petals",
        C:"minecraft:glowstone_dust",
    });

    event.remove({output: "botania:apothecary_livingrock"});
    event.shaped(Item.of("botania:apothecary_livingrock", 1), ["ABA","CAC","AAA"], {
        A:"botania:livingrock",
        B:"#botania:petals",
        C:"minecraft:glowstone_dust",
    });
    event.remove({output: "botania:apothecary_deepslate"});
    event.shaped(Item.of("botania:apothecary_deepslate", 1), ["ABA","CAC","AAA"], {
        A:"minecraft:cobbled_deepslate",
        B:"#botania:petals",
        C:"minecraft:glowstone_dust",
    });
});
