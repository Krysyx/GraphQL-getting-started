import { graphqlHTTP } from "express-graphql";
import { schema, resolver as rootValue } from "../schema/DiceSchema";

export const dices = graphqlHTTP({ schema, rootValue, graphiql: true });
