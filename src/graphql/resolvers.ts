import {
  users,
  userById,
  userByEmail,
  createUser,
  /*
  deleteUserById,
  deleteUserByEmail,
  */
  editUserById,
  editUserByEmail
} from './resolvers/users/users';

import {
  profiles,
  profile,
  createProfile,
  deleteProfileById,
  editProfileById
} from './resolvers/profiles/profiles'


export const resolvers = {
  Query: {
    users,
    userById,
    userByEmail,
    profiles,
    profile,
  },

  Mutation: {
    createUser,
    /*
    deleteUserById,
    deleteUserByEmail,
    */
    editUserById,
    editUserByEmail,
    createProfile,
    deleteProfileById,
    editProfileById
  }
};
