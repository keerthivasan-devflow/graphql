# Traditional way (older version of graphql setup) - Pedrotech Channel
# https://spec.graphql.org/
# https://www.apollographql.com/
# https://graphql.org/learn/

npm init - To create `package.json` file
npm install apollo-server 
npm install graphql
npm install nodemon
npm start

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

What is GraphQL? Why do we need?
What is over-fecthing vs. under-fecthing of data in Restful API? What will be the impact of both?
Advantages of GraphQL over RESTFUL API
what is apollo-server module?
what is schema (SDL) and resolver?
what is ID type? what does it denote and the default value of ID would be?
Does the scalar and primitive type same?
What are the three basic types in GraphQL: Query, Mutation and Subscription?
What is resolver map? what is resolver chain?
What are all the fields could be top level fields of resolver map?
What does exclamation signify in schema?
what are the different supported types to define schema?
Wha is custom scalar type? (refer: GraphQL apollo-server)
What is the meaning of type [Movie!]! ?
what is __typename in GraphQl?
How to define query to fetch data of Users and Movies data in one-go?