exports.up = function(knex, Promise) {
    return knex.schema.createTable('TB_Produto', table => {
        table.number('id').primary()
        table.number('codigo').notNull()
        table.string('descricao').notNull()
        table.number('valor'), notNull()
            .defaultTo(knex.fn.now())
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('TB_Produto')
};