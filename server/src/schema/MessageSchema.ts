import { buildSchema } from "graphql";
import Message from "../classes/Message";
import { GetMessage, MessageInput, UpdateMessage } from "../models/graphql";
import FakeDatabase from "../classes/FakeDatabase";

const schema = buildSchema(`
    input MessageInput {
      content: String
      author: String
    }

    type MessageData {
      id: ID!
      author: String
      content: String
    }

    type Message {
      content: String
      author: String
    }

    type Query {
      getMessage(id: ID!): Message
      createMessage(input: MessageInput): MessageData
      updateMessage(id: ID!, input: MessageInput): MessageData
    }
`);

const resolver = {
  getMessage: ({ id }: GetMessage): Message => FakeDatabase.getMessage(id),
  createMessage: ({ input }: MessageInput) => FakeDatabase.createMessage(input),
  updateMessage: ({ id, input }: UpdateMessage) => FakeDatabase.updateMessage(id, input),
};

export { schema, resolver };
