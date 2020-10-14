import Knex from "knex";

export const up = async (knex: Knex) => {
  knex.schema.hasTable('educations').then((exists => {
    if (!exists) {
      return knex.schema.createTable('educations', function (table) {
        table.increments('educationId').primary();
        table.integer('profileId').references('profileId').inTable('profiles').onUpdate('CASCADE').onDelete('CASCADE');
        table.string('levelOfEducation');
        table.date('completionDate');
        table.string('university');
        table.string('fieldOfStudy');
        table.string('skills');
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
  return knex.schema.dropTableIfExists('educations');
}

