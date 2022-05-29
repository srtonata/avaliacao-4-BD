exports.up = function(knex, Promise) {
    return knex.schema.createTable('TB_Clientes', table => {
        table.number('id').primary()
        table.number('codigo').notNull()
        table.string('cnpjcpf').notNull().unique()
        table.string('nome', 60)
            .defaultTo(knex.fn.now())
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('TB_Clientes')
};