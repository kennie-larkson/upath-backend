import { users, usersRecords, userById, userRecordById, userByEmail, userRecordByEmail, createUser, /* deleteUserById, deleteUserByEmail, */ editUserById, editUserByEmail } from './resolvers/users/users';
import { profiles, profileById, createProfile, deleteProfileById, editProfileById } from './resolvers/profiles/profiles'
import { educations, educationById, createEducation, deleteEducationById, editEducationById } from './resolvers/educations/educations'

export const resolvers = {
  Query: {
    users,
    usersRecords,
    userById,
    userRecordById,
    userByEmail,
    userRecordByEmail,
    profiles,
    profileById,
    educationById,
    educations
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
    editProfileById,
    createEducation,
    deleteEducationById,
    editEducationById
  }
};
