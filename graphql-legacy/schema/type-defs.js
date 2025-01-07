
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data. (SDL - Schema Definition Language)

const { gql } = require("apollo-server");

const typeDefs = gql`
  type Movie {
    id: ID!
    title: String!
    description: String
    isPublished: Boolean!
  }

  enum City {
    france
    newyork
    canada
  }

  type User {
    id: ID! # ID by default string, so it should be converted to Number if it is numerical value for type safety
    name: String!
    username: String!
    email: String!
    city: City
    friends: [User]
  }

  type Query {
    users(city: String): [User!]!
    user(id: ID!): User
    movies: [Movie]!
  }
`;

module.exports = { typeDefs };
