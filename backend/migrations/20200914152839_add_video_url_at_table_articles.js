
exports.up = function (knex, Promise) {
    return knex.schema.alterTable('articles', table => {
        table.string('videoUrl')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.alterTable('article', table => {
        table.dropColumn('videoUrl')
    })
};
