import { CharacterFactory } from "./character-creation/character-store";

import { Character } from "./character-creation/characters/character";

import { MeleeCharacterFactory } from "./character-creation/melee-character-factory";
import { RangerCharacterFactory } from "./character-creation/ranger-character-factory";

const meleeStore: CharacterFactory = new MeleeCharacterFactory();
const rangerStore: CharacterFactory = new RangerCharacterFactory();

const knight: Character = meleeStore.customizeCharacter("knight", "Ignus");
console.log(knight.description());

const explorer: Character = rangerStore.customizeCharacter(
  "explorer",
  "Robert"
);
console.log(explorer.description());
