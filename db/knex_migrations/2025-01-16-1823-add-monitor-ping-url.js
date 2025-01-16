exports.up = function (knex) {
    return knex.schema.alterTable("monitor", function (table) {
        table.text("ping_url");
    });
};

exports.down = function (knex) {
    return knex.schema.alterTable("monitor", function (table) {
        table.dropColumn("ping_url");
    });
};
