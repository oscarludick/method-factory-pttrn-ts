import { CharacterStore } from "./character-store";
import { Character } from "./characters/character";
import { ExplorerCharacter } from "./characters/explorer-character";

export class RangerCharacterStore extends CharacterStore {
  createCharacter(classType: string, name: string): Character {
    switch (classType) {
      case "explorer":
        return new ExplorerCharacter(name);
      default:
        return null;
    }
  }
}
