import { graphqlHTTP } from "express-graphql";
import RandomDice from "../classes/RandomDice";
import { schema, resolver as rootValue } from "../schema/MessageSchema";

// const schema = buildSchema(`
//   type RandomDice {
//     numSides: Int! rollOnce: Int! roll(numRolls: Int!): [Int] }

//   type Query { getDice(numSides: Int): RandomDice }
//  `);

// const schema = buildSchema(`
//   input MessageInput {
//     author: String
//     content: String
//   }

//   type Message {
//     id: ID!
//     author: String
//     content: String
//   }

//   type Query {
//     getMessage(id: ID!): Message
//   }

//   type Mutation {
//       createMessage(input: MessageInput): Message
//       updateMessage(id: ID!, input: MessageInput): Message
//   }
//   `);

// const resolver = {
//   getDice: ({ numSides }: RootValue) => new RandomDice(numSides || 6),
// };

const rollDice = graphqlHTTP({ schema, rootValue, graphiql: true });

export { rollDice };
