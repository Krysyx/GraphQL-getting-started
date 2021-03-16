import { Roll } from "../models/graphql";

export default class RandomDice {
  numSides: number;
  output: number[] = [];

  constructor(numSides: number) {
    this.numSides = numSides;
  }

  rollOnce(): number {
    return 1 + Math.floor(Math.random() * (this.numSides || 6));
  }

  roll({ numRolls }: Roll): number[] {
    for (let index = 0; index < numRolls; index++) {
      this.output.push(this.rollOnce());
    }

    return this.output;
  }
}
