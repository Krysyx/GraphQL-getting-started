import { Author } from "../mongoose";
import {
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";

const type = new GraphQLObjectType({
  name: "Author",
  fields: {
    _id: {
      type: GraphQLID,
    },
    firstname: { type: GraphQLString },
    lastname: { type: GraphQLString },
    age: { type: GraphQLInt },
  },
});

const query = new GraphQLObjectType({
  name: "Query",
  fields: {
    getAuthors: {
      type: new GraphQLList(type),
      resolve: async () => await Author.find(),
    },
  },
});

const mutation = new GraphQLObjectType({
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
    updateAuthor: {
      type,
      args: {
        id: { type: GraphQLString },
        firstname: { type: GraphQLString },
        lastname: { type: GraphQLString },
        age: { type: GraphQLInt },
      },
      resolve: async (source, { id, ...update }) =>
        await Author.findByIdAndUpdate(id, update, { new: true }),
    },
  },
});

export default new GraphQLSchema({
  query,
  mutation,
});
