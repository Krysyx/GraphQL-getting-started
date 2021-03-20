import { Book } from "../mongoose";
import {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";

const bookType = new GraphQLObjectType({
  name: "Book",
  fields: {
    _id: { type: GraphQLString },
    title: { type: GraphQLString },
    author: { type: GraphQLString },
    pages: {
      type: new GraphQLObjectType({
        name: "BookPages",
        fields: {
          marked: { type: GraphQLInt },
          non_marked: { type: GraphQLInt },
        },
      }),
    },
  },
});

const query = new GraphQLObjectType({
  name: "Query",
  fields: {
    getBookPages: {
      type: bookType,
      resolve: async () => await Book.find(),
    },
  },
});

export const queryBookSchema = new GraphQLSchema({
  query,
});
