import { gql } from "apollo-server-express";

export const User = gql`
scalar Date
  type User {
    userId: ID
    provider: String
    providerId: String
    profileImage: String
    email: String
    password: String
    username: String
    lastLogin: Date
    gender: String
    profileId: ID
    firstname: String
    lastname: String
    aboutMe: String
    phoneNumber: String
    location: String
    birthDate: Date
    socialProfile: String
    preferredLanguage: String
    educationId: ID
    levelOfEducation: String
    completionDate: Date
    university: String
    fieldOfStudy: String
    skills: String
  }
`;

export const CreateUserResponse = gql`
  type CreateUserResponse {
    message: String!
    User: User
  }
`;

export const UpdateUserResponse = gql`
  type UpdateUserResponse {
    message: String!
    updatedUser: User
  }
`;
export const DeleteUserResponse = gql`
  type DeleteUserResponse {
    message: String!
    deletedUser: User
  }
`;
