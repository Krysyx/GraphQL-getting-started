import { GraphQLInt, GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";
import { Author } from "../mongoose";

const type = new GraphQLObjectType({
  name: "Author",
  fields: {
    _id: {
      type: GraphQLString,
    },
    firstname: { type: GraphQLString },
    lastname: { type: GraphQLString },
    age: { type: GraphQLInt },
  },
});

const query = new GraphQLObjectType({
  name: "Query",
  fields: {
    getAuthor: {
      type,
      resolve: (source, args) => Author.find(),
    },
  },
});

export default new GraphQLSchema({ query });
