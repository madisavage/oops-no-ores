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
    // TODO Rm diamonds from Ars Apparatus
    // copper and zinc super inefficient
    event.recipes.create.compacting(
        "create:copper_nugget",
        "2x create:veridium"
    );
    event.recipes.create.compacting("create:zinc_nugget", "2x create:asurine");
});
