import { MessageInfos } from "../models/graphql";
import generateId from "crypto-random-string";
import Message from "./Message";

export default class FakeDatabase {
  static fakeDatabase: any = {};

  constructor() {}

  static getMessages() {
    return this.fakeDatabase;
  }

  static getMessage(id: string) {
    return this.fakeDatabase[id];
  }

  static createMessage(input: MessageInfos) {
    const id = generateId({ length: 10 });
    this.fakeDatabase[id] = input;
    return new Message(id, this.fakeDatabase[id]);
  }

  static updateMessage(id: string, input: MessageInfos) {
    this.fakeDatabase[id] = input;
    return new Message(id, this.fakeDatabase[id]);
  }
}
