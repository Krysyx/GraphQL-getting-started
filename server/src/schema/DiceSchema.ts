import { buildSchema } from "graphql";
import { RootValue } from "../models/graphql";
import RandomDice from "../classes/RandomDice";

const schema = buildSchema(`
  type RandomDice {
    numSides: Int! rollOnce: Int! roll(numRolls: Int!): [Int] }

  type Query { getDice(numSides: Int): RandomDice }
 `);

const resolver = {
  getDice: ({ numSides }: RootValue) => new RandomDice(numSides || 6),
};

export { schema, resolver };
