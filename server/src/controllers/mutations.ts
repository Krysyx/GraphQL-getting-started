import { graphqlHTTP } from "express-graphql";
import { schema, resolver as rootValue } from "../schema/graphQL/MutationSchema";

export const mutation = graphqlHTTP({ schema, rootValue, graphiql: true });
