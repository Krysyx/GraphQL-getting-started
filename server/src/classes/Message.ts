import { MessageInfos } from "../models/graphql";

export default class Message {
  id: string;
  author: string;
  content: string;

  constructor(id: string, { content, author }: MessageInfos) {
    this.id = id;
    this.author = author;
    this.content = content;
  }
}
