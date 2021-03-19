import { Author } from "../mongoose";
import { GraphQLInt, GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";

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
  name: "Mutation",
  fields: {
    createAuthor: {
      type,
      args: {
        firstname: { type: GraphQLString },
        lastname: { type: GraphQLString },
        age: { type: GraphQLInt },
      },
      resolve: async (source, args) => await Author.create(args),
    },
  },
});

export default new GraphQLSchema({ query });
