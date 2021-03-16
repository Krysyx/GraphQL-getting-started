export interface RootValue {
  numSides?: number;
}

export interface Roll {
  numRolls: number;
}

export interface Message {
  id: string;
  author: string;
  content: string;
}

export interface MessageInfos {
  content: string;
  author: string;
}

export interface GetMessage {
  id: string;
}

export interface UpdateMessage {
  id: string;
  input: MessageInfos;
}

export interface MessageInput {
  input: MessageInfos;
}
