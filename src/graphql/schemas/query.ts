import { gql } from "apollo-server-express";

export const Query = gql`
  # All database queries
  type Query {
    userById(userId: ID): User
    userRecordById(userId: ID): User
    userByEmail(email: String): User
    userRecordByEmail(email: String): User
    users: [User!]
    usersRecords: [User!]

    profileById(profileId: ID): Profile
    profiles: [Profile!]

    educationById(educationId: ID): Education
    educations: [Education!]
  }
`;
