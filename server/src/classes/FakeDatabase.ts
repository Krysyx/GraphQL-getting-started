import { MessageInfos } from "../models/graphql";

export default class FakeDatabase {
  static fakeDatabase: any = {};

  constructor() {}

  static getMessage(id: string) {
    return this.fakeDatabase[id];
  }

  static createMessage(id: string, input: MessageInfos) {
    this.fakeDatabase[id] = input;
    return this.fakeDatabase[id];
  }

  static updateMessage(id: string, input: MessageInfos) {
    this.fakeDatabase[id] = input;
    return this.fakeDatabase[id];
  }
}
