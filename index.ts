import { Character } from "./character-creation/characters/character";

import { CharacterFactory } from "./character-creation/character-factory";
import { MeleeCharacterFactory } from "./character-creation/melee-character-factory";
import { RangerCharacterFactory } from "./character-creation/ranger-character-factory";

const meleeCharacter: CharacterFactory = new MeleeCharacterFactory();
const rangerCharacter: CharacterFactory = new RangerCharacterFactory();

const knight: Character = meleeCharacter.customizeCharacter("knight", "Ignus");
console.log(knight.description());

const explorer: Character = rangerCharacter.customizeCharacter(
  "explorer",
  "Robert"
);
console.log(explorer.description());
