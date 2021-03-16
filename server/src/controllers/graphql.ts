import { ExpressRequestFnMapper } from "../models/express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import { RootValue } from "../models/graphql";

const rollDice: ExpressRequestFnMapper = (req, res, next) => {
  const schema = buildSchema(
    "type Query { rollDice(numDice: Int!, numSides: Int): [Int] }"
  );

  const rootValue = {
    rollDice: ({ numDice, numSides }: RootValue) => {
      const output: number[] = [];

      for (let index = 0; index < numDice; index++) {
        output.push(1 + Math.floor(Math.random() * (numSides || 6)));
      }

      return output;
    },
  };

  graphqlHTTP({ schema, rootValue, graphiql: true });
};

export { rollDice };
