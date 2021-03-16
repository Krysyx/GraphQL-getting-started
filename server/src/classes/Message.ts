import { MessageInfos } from "../models/graphql";
import generateId from "crypto-random-string";

export default class Message {
  id: string;
  author: string;
  content: string;
  fakeDatabase: any = {};

  constructor(id: string, { content, author }: MessageInfos) {
    this.id = id;
    this.author = author;
    this.content = content;
  }

  getMessage(id: string) {
    return this.fakeDatabase[id];
  }

  createMessage(input: MessageInfos) {
    this.fakeDatabase[generateId({ length: 10 })] = input;
  }
}
