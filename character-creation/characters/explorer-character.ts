import { Character } from "./character";

export class KnightCharacter extends Character {
  constructor(name: string) {
    super();

    this.name = name;
    this.face = "European";
    this.body = "Average";
    this.build = "Knight";

    this.startingItems.push("LifeGem", "Shield", "Sword");
  }
}
