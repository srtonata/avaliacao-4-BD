exports.up = function(knex, Promise) {
    return knex.schema.createTable('TB_NotaFiscalVendas', table => {
        table.number('id').primary()
        table.number('codigo').notNull()
        table.string('data').notNull()
        table.string('valorNota', notNull())
        table.string('Cliente'), notNull()
        table.array('Itens'), notNull()
        table.number('clienteId').references('TB_Clientes.id')
            .defaultTo(knex.fn.now())
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('TB_NotaFiscalVendas')
};
