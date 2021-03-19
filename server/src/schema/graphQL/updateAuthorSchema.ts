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

export default new GraphQLSchema({ query });
