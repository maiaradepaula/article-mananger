
exports.up = function(knex, Promise) {
    return knex.schema.createTable('articles', table => {
        table.increments('id').primary()
        table.string('type').notNull()
        table.string('name').notNull()
        table.string('description', 1000).notNull()
        table.string('imageUrl', 1000)
        table.string('videoUrl')
        table.binary('content')
        table.integer('userId').references('id')
            .inTable('users').notNull()
        table.integer('categoryId').references('id')
            .inTable('categories').notNull()
        table.integer('languageId').references('id')
            .inTable('languages').notNull()
          
    })
};

exports.down = function(knex, Promise) {
   // return knex.schema.dropTable('articles')
};
