import Knex from "knex";
import user from '../seedData/users'

export async function seed(knex: Knex): Promise<any> {
  // Deletes ALL existing entries
  return await knex("users").del()
    .then(() => {
      // Inserts seed entries
      return knex("users").insert(user);
    });
};
