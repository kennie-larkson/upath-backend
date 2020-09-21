import { gql } from "apollo-server-express";

export const Query = gql`
  # All database queries
  type Query {
    userById(userId: ID): User
    userByEmail(email: String): User
    users: [User!]

    profile(profileId: ID): Profile
    profiles: [Profile!]
  }
`;
