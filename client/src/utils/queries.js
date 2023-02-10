import { gql } from "@apollo/client";

export const QUERY_User = gql`
  query User {
    user {
      _id
      name
      email
    }
  }
`;
