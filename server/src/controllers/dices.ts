import { graphqlHTTP } from "express-graphql";
import { schema, resolver as rootValue } from "../schema/graphQL/DiceSchema";

export const dices = graphqlHTTP({ schema, rootValue, graphiql: true });
