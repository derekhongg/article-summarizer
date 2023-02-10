import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation Mutation($input: registerInput!) {
  register(input: $input) {
    user {
      _id
      email
      name
      password
    }
  }
}
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
        email
      }
    }
  }
`;