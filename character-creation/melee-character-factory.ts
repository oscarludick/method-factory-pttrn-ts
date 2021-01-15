import { CharacterCreator } from "./character-creator";

import { Character } from "./characters/character";
import { KnightCharacter } from "./characters/knight-character";

export class MeleeCharacterFactory extends CharacterCreator {
  createCharacter(classType: string, name: string): Character {
    switch (classType) {
      case "knight":
        return new KnightCharacter(name);
      default:
        return null;
    }
  }
}
