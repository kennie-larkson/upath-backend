import Knex from "knex";

export const up = async (knex: Knex) => {
  knex.schema.hasTable('profiles').then((exists => {
    if (!exists) {
      return knex.schema.createTable('profiles', function (table) {
        table.increments('profileId').primary();
        table.integer('userId').notNullable().references('userId').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
        table.string('firstname').notNullable();
        table.string('lastname').notNullable();
        table.string('aboutMe');
        table.string('gender');
        table.string('phoneNumber').notNullable();
        table.string('location'); // check if string is the best option
        table.date('birthDate');
        table.string('socialProfile');
        table.string('preferredLanguage');
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
  return knex.schema.dropTableIfExists('profiles');
}

