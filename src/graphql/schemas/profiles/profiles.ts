import { gql } from "apollo-server-express";

export const Profile = gql`
# scalar Date
  type Profile {
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
  }
`;

export const CreateProfileResponse = gql`
  type CreateProfileResponse {
    message: String!
    Profile: Profile
  }
`;

export const UpdateProfileResponse = gql`
  type UpdateProfileResponse {
    message: String!
    updatedProfile: Profile
  }
`;
export const DeleteProfileResponse = gql`
  type DeleteProfileResponse {
    message: String!
    deletedProfile: Profile
  }
`;
