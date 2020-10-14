import { gql } from "apollo-server-express";

export const mutations = gql`
  type Mutation {
    createUser(
      provider: String
      providerId: String
      profileImage: String
      email: String
      password: String
      username: String
    ): CreateUserResponse

    # deleteUserById(userId: ID): DeleteUserResponse

    # deleteUserByEmail(email: String): DeleteUserResponse

    editUserById(
      userId: ID
      provider: String
      providerId: String
      profileImage: String
      email: String
      password: String
      username: String
    ): UpdateUserResponse

    editUserByEmail(
      userId: ID
      provider: String
      providerId: String
      profileImage: String
      email: String
      password: String
      username: String
    ): UpdateUserResponse

    createProfile(
      userId: ID
      firstname: String
      lastname: String
      aboutMe: String
      gender: String
      phoneNumber: String
      birthDate: Date
      location: String
      socialProfile: String
      preferredLanguage: String
    ): CreateProfileResponse

    deleteProfileById(profileId: ID): DeleteProfileResponse

    editProfileById(
      userId: ID
      profileId: ID
      firstname: String
      lastname: String
      aboutMe: String
      gender: String
      phoneNumber: String
      birthDate: Date
      location: String
      socialProfile: String
      preferredLanguage: String
    ): UpdateProfileResponse

    createEducation(
      profileId: ID
      levelOfEducation: String
      university: String
      fieldOfStudy: String
      skills: String
      completionDate: Date
    ): CreateEducationResponse

    deleteEducationById(educationId: ID): DeleteEducationResponse

    editEducationById(
      profileId: ID
      educationId: ID
      levelOfEducation: String
      university: String
      fieldOfStudy: String
      skills: String
      completionDate: Date
    ): UpdateEducationResponse

  }
`;
