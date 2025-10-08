ServerEvents.recipes((event) => {
    event.shapeless(
        Item.of("rats:cheese", 6),
        ["ad_astra:cheese"]
    );
    
    event.recipes.create.crushing(
        Item.of("ad_astra:cheese").withChance(0.1),
        "ad_astra:moon_stone"
    );
})