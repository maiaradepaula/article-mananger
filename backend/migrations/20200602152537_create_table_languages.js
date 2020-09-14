
exports.up = function(knex, Promise) {
    return knex.schema.createTable('languages', table => {
        
        table.increments('id').primary()
        table.string('idiom').notNull()
        table.string('country').notNull()
        table.string('acronym').notNull().unique()
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('languages')
  
};
