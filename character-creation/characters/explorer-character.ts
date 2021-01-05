import { Character } from "./character";

export class ExplorerCharacter extends Character {
  constructor(name: string) {
    super();

    this.name = name;
    this.face = "Asian";
    this.body = "Thin";
    this.build = "Explorer";

    this.startingItems.push("Potion", "Stamina Amulet", "Bow");
  }
}
