import { Character } from "./characters/character";

export abstract class CharacterStore {
  customizeCharacter(classType: string, name: string): Character {
    const character = this.createCharacter(classType, name);
    character.createFace();
    character.createBody();
    character.selectBuild();
    return character;
  }

  abstract createCharacter(classType: string, name: string): Character;
}
