# Traditional way (older version of graphql setup) - Pedrotech Channel
# https://spec.graphql.org/
# https://www.apollographql.com/
# https://graphql.org/learn/

# GraphQL Server Configuration
- npm init - To create `package.json` file
- npm install apollo-server 
- npm install graphql
- npm install nodemon
- npm start

# GrapghQL Client Configuration - w/ React
- npx create-react-app project-folder
- npm install @apollo/client

# ERROR MESSAGE in GraphQL
"errors":[{
    "message": "Cannot return null for non-nullable field User.name.",
    "locations": [ 
        {
          "line": 4,
          "column": 7
        },
    ],
    "path":[ "users", 1, "name"],
    "extension": {}
}]

# SCENARIO
1. How do you define a basic type for any API data and retrieve the data w/o passing arguments in the Query type?
2. How do you define an enum type in GraphQL?
3. How do you pass arguments to your types in the Query type, and how do you define a resolver for that?
4. How to define the Query arguments as mandatory?


# SYNTAX TO FETCH DATA FROM API - GET METHOD
<!--  METHOD 1 -->
query User($productName: String!){
  users(city: "france"){
    id
    username
    city
  }
  movies {
    id
    title
    description
  }
  product(productName: $productName) {
    productName
    isAvailable
    price
  }
}

<!-- METHOD 2 -->
query GetUsers($userId: ID!){
  user(id: $userId) {
    username
    name
    email
    favoriteProducts {
      productId
      productName
      price
    }
  }
}

1. What is GraphQL? Why do we need?
2. What is over-fecthing vs. under-fecthing of data in Restful API? What will be the impact of both?
3. Advantages of GraphQL over RESTFUL API
4. what is apollo-server module?
5. what is schema (SDL) and resolver?
6. what is ID type? what does it denote and the default value of ID would be?
7. Does the scalar and primitive type same?
8. What are the three basic types in GraphQL: Query, Mutation and Subscription?
9. What is resolver map? what is resolver chain?
10. What are all the fields could be top level fields of resolver map?
11. What does exclamation signify in schema?
12. what are the different supported types to define schema?
13. Wha is custom scalar type? (refer: GraphQL apollo-server)
14. What is the meaning of type [Movie!]! ?
15. what is __typename in GraphQl?
16. How to define query to fetch data of Users and Movies data in one-go?


# Setting Default Value:

If you are using an input type in mutations or queries, you can set default values in the input object (but only at the application level, not directly in the GraphQL schema):

input MovieInput {
  title: String = "Untitled Movie"
  description: String
  isPublished: Boolean!
}

type Movie {
  title: String = "Untitled Movie" <!-- Not directly in the GraphQL schema -->
  description: String
  isPublished: Boolean!
}