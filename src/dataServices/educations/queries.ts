import knex from '../../config/knex';

export const EducationsQueries = {
  getAllEducations: async () => {
    const educations = await knex('educations');
    return educations
  },

  getEducationById: async (educationId: number) => {
    const education = await knex('educations').where({ educationId }).first();
    return education;
  },

  getEducationByProfileId: async (profileId: number) => {
    const education = await knex('educations').where({ profileId }).first();
    return education;
  },

  addEducation: async (payload: object) => {
    return await knex('educations').insert(payload).returning('*')
  },

  deleteEducationById: async (educationId: number) => {
    return await knex('educations').where({ educationId }).del().returning('*');
  },

  updateEducationById: async (educationId: number, data: object) => {
    return await knex('educations').where({ educationId })
      .update({ ...data, updatedAt: knex.fn.now() }, ['*'])
  },

};