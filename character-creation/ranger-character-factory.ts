import { CharacterFactory } from "./character-factory";

import { Character } from "./characters/character";
import { ExplorerCharacter } from "./characters/explorer-character";

export class RangerCharacterFactory extends CharacterFactory {
  createCharacter(classType: string, name: string): Character {
    switch (classType) {
      case "explorer":
        return new ExplorerCharacter(name);
      default:
        return null;
    }
  }
}
