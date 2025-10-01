ServerEvents.recipes((event) => {
    event.recipes.create.crushing(
        [
            Item.of("create:crushed_raw_osmium").withChance(0.3),
            Item.of("ae2:certus_quartz_crystal").withChance(0.3),
            Item.of("ad_astra:desh_nugget").withChance(0.3),
        ],
        "ad_astra:moon_stone"
    );
});
