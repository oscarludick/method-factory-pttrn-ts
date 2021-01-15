import { Character } from "./character-creation/characters/character";

import { CharacterCreator } from "./character-creation/character-creator";
import { MeleeCharacterFactory } from "./character-creation/melee-character-factory";
import { RangerCharacterFactory } from "./character-creation/ranger-character-factory";

const meleeCharacter: CharacterCreator = new MeleeCharacterFactory();
const rangerCharacter: CharacterCreator = new RangerCharacterFactory();

const knight: Character = meleeCharacter.customizeCharacter("knight", "Ignus");
console.log(knight.description());

const explorer: Character = rangerCharacter.customizeCharacter(
  "explorer",
  "Robert"
);
console.log(explorer.description());
