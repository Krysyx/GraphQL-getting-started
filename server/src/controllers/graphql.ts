import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import generateId from "crypto-random-string";
import {
  GetMessage,
  Message,
  MessageInput,
  RootValue,
  UpdateMessage,
} from "../models/graphql";
import RandomDice from "../classes/RandomDice";
import FakeDatabase from "../classes/FakeDatabase";

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

const schema = buildSchema(`
    type Message {
      id: ID!
      content: String
      author: String
    }

    input MessageInput {
      content: String
      author: String
    }

    type Query {
      getMessage(id: ID!): Message
      createMessage(input: MessageInput): Message
      updateMessage(id: ID!, input: MessageInput): Message
    }
`);

const resolver = {
  getMessage: ({ id }: GetMessage): Message => FakeDatabase.getMessage(id),
  createMessage: ({ input }: MessageInput) => {
    return FakeDatabase.createMessage(generateId({ length: 10 }), input);
  },
  updateMessage: ({ id, input }: UpdateMessage) => {
    return FakeDatabase.updateMessage(id, input);
  },
};

const rollDice = graphqlHTTP({ schema, rootValue: resolver, graphiql: true });

export { rollDice };
