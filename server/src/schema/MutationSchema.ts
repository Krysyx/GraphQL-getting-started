import { buildSchema } from "graphql";
import { GetMessage, MessageInput, UpdateMessage } from "../models/graphql";
import generateId from "crypto-random-string";
import Message from "../classes/Message";

const schema = buildSchema(`
    input MessageInput {
        author: String
        content: String
    }
  
    type Message {
        id: ID!
        author: String
        content: String
    }
  
    type Query {
        getMessage(id: ID!): Message
    }
  
    type Mutation {
        createMessage(input: MessageInput): Message
        updateMessage(id: ID!, input: MessageInput): Message
    }
`);

const fakeDatabase: any = {};

const resolver = {
  getMessage: ({ id }: GetMessage) => {
    if (!fakeDatabase[id]) {
      throw new Error("This message doesn't exist");
    }

    return new Message(id, fakeDatabase[id]);
  },
  createMessage: ({ input }: MessageInput) => {
    const id = generateId({ length: 10 });
    fakeDatabase[id] = input;
    return new Message(id, fakeDatabase[id]);
  },
  updateMessage: ({ id, input }: UpdateMessage) => {
    if (!fakeDatabase[id]) {
      throw new Error("This message doesn't exist");
    }
    fakeDatabase[id] = input;
    return new Message(id, input);
  },
};

export { schema, resolver };
