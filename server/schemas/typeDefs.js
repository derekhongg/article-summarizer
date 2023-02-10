const { gql } = require("apollo-server-express");

// basically defining the structure of our queries and what we want our response to look like
// query: GET
// mutators: POST, PUT, DELETE

// ! is for required
const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    password: String
    summaries: [Summary]
  }

  type Summary {
    _id: ID
    title: String
    content: String
  }

  type Auth {
    token: ID!
    user: User
  }
  
  input registerInput{
    firstName: String
    lastName: String
    email: String
    password: String
    confirmPassword: String
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    summaries: [Summary]!
    summary(summaryId: ID!): Summary
  }

  type Mutation {
    register(input: registerInput!): Auth
    login(email: String!, password: String!): Auth
    generateSummary(title: String, text: String): Summary
  }
`;

//for mutation: call the mutation you want then the return type
// ex: register(mutation name): Auth (return type);

// input: we can what kind of imput will be passed
  // allows you to define default values

module.exports = typeDefs;