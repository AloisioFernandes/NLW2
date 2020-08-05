import Knex from 'knex'

export async function up(knex: Knex) {
  return knex.schema.createTable('classes', table => {
    table.increments('id').primary()
    table.string('subject').notNullable()
    table.decimal('cost').notNullable()

    table.integer('user_id') //foreign key
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE') //atualiza id para todas as aulas caso id na tabela users seja atualizado
      .onDelete('CASCADE') //deleta todas as aulas caso professor (id) seja deletado do banco
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('classes')
}