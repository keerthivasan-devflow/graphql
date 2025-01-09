// Apollo Server needs to know how to populate data for every field in your
// schema so that it can respond to requests for that data. To accomplish this, it uses resolvers.

// A resolver is a function that's responsible for populating
// the data for a single field in your schema based on any way you define.

// If you don't define a resolver for a particular field, Apollo Server automatically defines a default resolver for it.

const { MoviesList } = require("../data/movies");
const { ProductList } = require("../data/products");
const { UsersList } = require("../data/users");

// You define all of your server's resolvers in a single JavaScript object - Resolver Map
// Depending on your schema, this object-field pattern can continue to an arbitrary depth - Resolver Chain
const resolvers = {
  Query: {
    users: (_, { city }) =>
      city ? UsersList.filter((user) => user.city === city) : UsersList,
    user: (_, args, context, info) => {
      //  args is an object - which holds the whatsoever the passes through type Query{ user(id: ID!) }.
      const { id } = args;
      const User = UsersList.find((user) => user.id == Number(id));
      return User;
    },
    movies: () => MoviesList,
    product: (_, args) => {
      const { productName } = args;
      const Product = ProductList.find(
        (product) => product.productName.includes(productName)
      );
      return Product;
    },
  },
};

module.exports = { resolvers };
