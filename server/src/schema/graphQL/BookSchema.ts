import { Book } from "../mongoose";
import {
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";

const bookPages = new GraphQLObjectType({
  name: "BookPages",
  fields: {
    marked: { type: GraphQLInt },
    non_marked: { type: GraphQLInt },
  },
});

const bookType = new GraphQLObjectType({
  name: "Book",
  fields: {
    _id: { type: GraphQLString },
    title: { type: GraphQLString },
    author: { type: GraphQLString },
    pages: { type: bookPages },
  },
});

const bookInterface = new GraphQLInputObjectType({
  name: "BookInterface",
  fields: {
    marked: { type: GraphQLInt },
    non_marked: { type: GraphQLInt },
  },
});

const query = new GraphQLObjectType({
  name: "Query",
  fields: {
    getBookPages: {
      type: new GraphQLList(bookType),
      resolve: async () => await Book.find(),
    },
  },
});

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createBook: {
      type: bookType,
      args: {
        title: { type: GraphQLString },
        author: { type: GraphQLString },
        pages: { type: bookInterface },
      },
      resolve: async (source, args) => await Book.create(args),
    },
    updateBook: {
      type: bookType,
      args: {
        _id: { type: GraphQLString },
        title: { type: GraphQLString! },
        author: { type: GraphQLString },
        pages: { type: bookInterface },
      },
      resolve: async (source, { id, ...args }) => await Book.findByIdAndUpdate(id, args),
    },
  },
});

const queryBookSchema = new GraphQLSchema({
  query,
});

const mutationBookSchema = new GraphQLSchema({ query: mutation });

export { queryBookSchema, mutationBookSchema };
