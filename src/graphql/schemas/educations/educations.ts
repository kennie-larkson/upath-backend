import { gql } from "apollo-server-express";

export const Education = gql`
# scalar Date
  type Education {
    educationId: ID
    profileId: ID
    levelOfEducation: String
    university: String
    fieldOfStudy: String
    skills: String
    completionDate: Date
  }
`;

export const CreateEducationResponse = gql`
  type CreateEducationResponse {
    message: String!
    Education: Education
  }
`;

export const UpdateEducationResponse = gql`
  type UpdateEducationResponse {
    message: String!
    updatedEducation: Education
  }
`;
export const DeleteEducationResponse = gql`
  type DeleteEducationResponse {
    message: String!
    deletedEducation: Education
  }
`;