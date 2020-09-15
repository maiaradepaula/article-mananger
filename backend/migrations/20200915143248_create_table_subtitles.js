
exports.up = function(knex, Promise) 
    {return knex.schema.createTable('subtitles', table => {
    table.integer('articleId').references('id')
        .inTable('articles')
    table.integer('subtitlesId').references('id')
        .inTable('languages')
})
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('subtitles')
};