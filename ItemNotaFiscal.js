exports.up = function(knex, Promise) {
    return knex.schema.createTable('TB_ItemNotaFiscal', table => {
        table.number('id').primary()
        table.number('sequencial').notNull()
        table.number('quantidade').notNull()
        table.number('valor', notNull())
        table.string('Cliente'), notNull()
        table.array('Itens'), notNull()
        table.number('Produto').references('TB_Produto.id')            
                 .defaultTo(knex.fn.now())
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('TB_ItemNotaFiscal')
};