import knex from '../../config/knex';


export const UsersQueries = {

  getAllUserRecords: async () => {
    const users = await knex('users')
      .join('profiles', 'users.userId', '=', 'profiles.userId')
      .join('educations', 'educations.profileId', '=', 'profiles.profileId')
      .select('*');
    return users
  },

  getUserRecordById: async (userId: number) => {
    const user = await knex.select('*')
      .from('users AS user')
      .join('profiles AS profile', 'profile.userId', 'user.userId')
      .join('educations AS education', 'education.profileId', 'profile.profileId')
      .where('user.userId', '=', userId)
    return user;
  },

  getUserRecordByEmail: async (email: string) => {
    const user = await knex('users AS user')
      .where({ email }).first().select('*')
      .join('profiles AS profile', 'profile.userId', 'user.userId')
      .join('educations AS education', 'education.profileId', 'profile.profileId')
    return user;
  },

  getAllUsers: async () => {
    const users = await knex('users');
    return users
  },

  getUserByEmail: async (email: string) => {
    const user = await knex('users').where({ email }).first();
    return user;
  },

  getUserById: async (userId: number) => {
    const user = await knex('users').where({ userId }).first();
    return user;
  },

  addUser: async (user: object) => {
    return await knex('users').insert(user).returning('*')
  },

  deleteUserById: async (userId: number) => {
    return await knex('users').where({ userId }).del().returning('*');
  },

  deleteUserByEmail: async (email: string) => {
    return await knex('users').where({ email }).del().returning('*');
  },

  updateUserById: async (payload: object) => {
    const { userId, email, provider, providerId, ...rest } = payload as any
    return await knex('users').where({ userId }).update({ ...rest, updatedAt: knex.fn.now() }, ['*'])
  },

  updateUserByEmail: async (payload: object) => {
    const { email, provider, providerId, userId, ...rest } = payload as any
    return await knex('users').where({ email }).update({ ...rest, updatedAt: knex.fn.now() }, ['*'])
  },

  updateUserLastLoginByEmail: async (email: string, lastLogin: Date) => {
    let date = knex.fn.now()
    return await knex('users').where({ email }).update({ lastLogin: date }, ['*'])
  }
};
