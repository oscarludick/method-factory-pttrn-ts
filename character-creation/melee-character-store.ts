import { CharacterStore } from "./character-store";
import { Character } from "./characters/character";
import { KnightCharacter } from "./characters/knight-character";

export class MeleeCharacterStore extends CharacterStore {
  createCharacter(classType: string, name: string): Character {
    switch (classType) {
      case "knight":
        return new KnightCharacter(name);
      default:
        return null;
    }
  }
}
