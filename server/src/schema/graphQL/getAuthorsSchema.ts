import { Author } from "../mongoose";
import {
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
    getAuthors: {
      type: new GraphQLList(type),
      resolve: () => Author.find().then((authors: any) => authors),
    },
  },
});

export default new GraphQLSchema({ query });

// import { buildSchema } from "graphql";

// const schema = buildSchema(`
//     type Author {
//       _id: String
//       firstname: String
//       lastname: String
//       age: Int
//     }

//     type Query {
//       getAuthors: [Author]
//     }
// `);

// const resolver = {
//   getAuthors: async () => await Author.find(),
// };

// export { schema, resolver };
