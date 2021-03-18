import { graphqlHTTP } from "express-graphql";
import { schema, resolver as rootValue } from "../schema/graphQL/MessageSchema";

export const messages = graphqlHTTP({ schema, rootValue, graphiql: true });
