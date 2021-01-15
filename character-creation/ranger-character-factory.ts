import { CharacterCreator } from "./character-creator";

import { Character } from "./characters/character";
import { ExplorerCharacter } from "./characters/explorer-character";

export class RangerCharacterFactory extends CharacterCreator {
  createCharacter(classType: string, name: string): Character {
    switch (classType) {
      case "explorer":
        return new ExplorerCharacter(name);
      default:
        return null;
    }
  }
}
