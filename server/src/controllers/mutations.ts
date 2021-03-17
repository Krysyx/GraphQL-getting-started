import { graphqlHTTP } from "express-graphql";
import { schema, resolver as rootValue } from "../schema/MutationSchema";

export const mutation = graphqlHTTP({ schema, rootValue, graphiql: true });
