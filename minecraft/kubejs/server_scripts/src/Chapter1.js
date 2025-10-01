ServerEvents.recipes((event) => {
    // remove all recipes that create andesite alloy
    // the induction smelter recipe isn't removed here because the recipe is generated after this script runs... annoying
    event.remove({ output: "create:andesite_alloy" });
    // add a recipe using unprocessed zinc stone
    // also adds to mechanical crafters
    event.shaped(Item.of("create:andesite_alloy", 1), ["ABA", "BAB", "ABA"], {
        A: "create:polished_cut_andesite",
        B: "create:layered_asurine",
    });
    event.recipes.create.compacting("create:andesite_alloy", [
        "4x minecraft:iron_nugget",
        "4x minecraft:andesite",
    ]);
    // TODO disable create: netherless soul sand recipe; I can't see the recipe ids for some reason so need to come back for these single recipe removes
    
    // natures aura altar lapis recipe
    event.custom({
        type: "naturesaura:altar",
        input: {
            item: "create:asurine",
        },
        output: {
            item: "minecraft:lapis_lazuli",
        },
        aura: 10000,
        time: 400,
    });
    event.remove({ output: "ars_nouveau:enchanting_apparatus" });
    event.shaped(
        Item.of("ars_nouveau:enchanting_apparatus", 1),
        ["ABA", "CDC", "ABA"],
        {
            A: "gold_nugget",
            B: "ars_nouveau:sourcestone",
            C: "gold_ingot",
            D: "ars_nouveau:source_gem",
        }
    );
    // copper and zinc super inefficient
    event.recipes.create.compacting(
        "create:copper_nugget",
        "2x create:veridium"
    );
    event.recipes.create.compacting("create:zinc_nugget", "2x create:asurine");
    event.recipes.create.compacting("2x glowstone_dust", "1x create:ochrum");

    event.remove({ output: "naturesaura:gold_fiber" });
    event.shaped(Item.of("naturesaura:gold_fiber", 4), ["ABA", "BCB", "ABA"], {
        A: "minecraft:wheat_seeds",
        B: "minecraft:dandelion",
        C: "minecraft:string",
    });
    event.smelting(
        Item.of("minecraft:gold_ingot", 1),
        Item.of("naturesaura:gold_powder", 1),
        1
    );
    event.remove({ output: "create:propeller" });
    event.shaped(Item.of("create:propeller", 1), [" A ", "ABA", " A "], {
        A: "create:andesite_alloy",
        B: "stick",
    });
    event.shaped(Item.of("create:propeller", 4), [" A ", "ABA", " A "], {
        A: "#forge:plates/iron",
        B: "create:andesite_alloy",
    });


    event.remove({ output: "naturesaura:conversion_catalyst" });
    event.custom({
        type: "naturesaura:tree_ritual",
        ingredients: [
            {
                item: "naturesaura:gold_brick",
            },
            {
                item: "naturesaura:infused_stone",
            },
            {
                item: "minecraft:flint_and_steel",
            },
            {
                item: "minecraft:feather",
            },
            {
                item: "naturesaura:gold_leaf",
            },
            {
                item: "minecraft:glowstone",
            },
        ],
        sapling: {
            item: "minecraft:jungle_sapling",
        },
        output: {
            item: "naturesaura:conversion_catalyst",
        },
        time: 600,
    });
    event.remove({ id: "create:splashing/red_sand" });
    event.recipes.createSplashing(
        [
            Item.of("1x redstone").withChance(0.33),
            Item.of("1x redstone").withChance(0.167),
            Item.of("2x gold_nugget").withChance(0.12),
            Item.of("1x dead_bush").withChance(0.05),
        ],
        ["minecraft:red_sand"]
    );
});
