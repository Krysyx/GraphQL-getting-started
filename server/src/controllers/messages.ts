import { graphqlHTTP } from "express-graphql";
import { schema, resolver as rootValue } from "../schema/MessageSchema";

export const messages = graphqlHTTP({ schema, rootValue, graphiql: true });
