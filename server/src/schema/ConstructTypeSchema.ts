import { GraphQLObjectType, GraphQLString, GraphQLSchema } from "graphql";

const fakeDatabase: any = {
  a: {
    id: "a",
    name: "alice",
  },
  b: {
    id: "b",
    name: "bob",
  },
};

//Defining custom User type
const user = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
  },
});

const query = new GraphQLObjectType({
  name: "Query",
  fields: {
    user: {
      type: user,
      args: { id: { type: GraphQLString } },
      resolve: (source: any, { id }: any) => fakeDatabase[id],
    },
  },
});

export const schema = new GraphQLSchema({ query });
