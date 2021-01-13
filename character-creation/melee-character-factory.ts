import { CharacterFactory } from "./character-factory";

import { Character } from "./characters/character";
import { KnightCharacter } from "./characters/knight-character";

export class MeleeCharacterFactory extends CharacterFactory {
  createCharacter(classType: string, name: string): Character {
    switch (classType) {
      case "knight":
        return new KnightCharacter(name);
      default:
        return null;
    }
  }
}
