import knex from '../../config/knex';

export const ProfilesQueries = {
  getAllProfiles: async () => {
    const profiles = await knex('profiles');
    return profiles
  },

  getProfileById: async (profileId: number) => {
    const profile = await knex('profiles').where({ profileId }).first();
    return profile;
  },

  getProfileByUserId: async (userId: number) => {
    const profile = await knex('profiles').where({ userId }).first();
    return profile;
  },

  addProfile: async (payload: object) => {
    return await knex('profiles').insert(payload).returning('*')
  },

  deleteProfileById: async (profileId: number) => {
    return await knex('profiles').where({ profileId }).del().returning('*');
  },

  updateProfileById: async (profileId: number, data: object) => {
    return await knex('profiles').where({ profileId })
      .update({ ...data, updatedAt: knex.fn.now() }, ['*'])
  },

};