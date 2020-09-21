import Knex from "knex";

export const up = async (knex: Knex) => {
  knex.schema.hasTable('users').then((exists => {
    if (!exists) {
      return knex.schema.createTable('users', function (table) {
        table.increments('userId').primary();
        table.string('provider', 8);
        table.string('providerId');
        table.string('email').unique().notNullable();
        table.string('password');
        table.string('username');
        table.string('profileImage');
        table.timestamp('lastLogin', { useTz: true })
          .notNullable()
          .defaultTo(knex.fn.now());
        table.timestamp('createdAt', { useTz: true })
          .notNullable()
          .defaultTo(knex.fn.now());
        table.timestamp('updatedAt', { useTz: true })
          .notNullable()
          .defaultTo(knex.fn.now());
      });
    }
  })).catch(err => "unable to create table");
};

export const down = async (knex: Knex): Promise<void> => {
  return knex.schema.dropTableIfExists('users');
}


