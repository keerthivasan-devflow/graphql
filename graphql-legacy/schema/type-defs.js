// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data. (SDL - Schema Definition Language)

const { gql } = require("apollo-server");

const typeDefs = gql`
  type Product {
    productId: ID!
    productName: String!
    price: Float
    quantity: Int
    isAvailable: Boolean!
  }

  type Movie {
    id: ID!
    title: String!
    description: String
    isPublished: Boolean!
  }

  # enum values and equivalent field values must match the case. Otherwise, Error will be thrown
  enum City {
    france
    newyork
    canada
  }

  type User {
    id: ID! # By default ID type is string, so it should be converted to Number in the resolver if you pass numerical value
    name: String!
    username: String!
    email: String!
    city: City
    friends: [User]
  }

  type Query {
    # ['city'] field not marked as mandatory so that User data will be fetched based on city (OR) entire users list.
    users(city: String): [User!]!
    # ['id'] field marked as mandatory so that this will not fetch user's data w/o id
    user(id: ID!): User!
    movies: [Movie]!
    product(productName: String!): Product!
  }
`;

module.exports = { typeDefs };
