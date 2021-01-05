import { CharacterStore } from "./character-creation/character-store";
import { Character } from "./character-creation/characters/character";
import { MeleeCharacterStore } from "./character-creation/melee-character-store";
import { RangerCharacterStore } from "./character-creation/ranger-character-store";

const meleeStore: CharacterStore = new MeleeCharacterStore();
const rangerStore: CharacterStore = new RangerCharacterStore();

const knight: Character = meleeStore.customizeCharacter("knight", "Ignus");
console.log(knight.description());

const explorer: Character = rangerStore.customizeCharacter(
  "explorer",
  "Robert"
);
console.log(explorer.description());
