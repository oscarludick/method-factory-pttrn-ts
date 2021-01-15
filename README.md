# Method Factory Pattern

The following text was obtained from the book [Head First Desing Patterns](https://www.amazon.com/-/es/Eric-Freeman/dp/0596007124).

Instantiation is an activity that shouldn´t alaways be done in public and can be often lead to coupling problems.

If your code is written to an interface, then it will work with any new classes implementing that interface through polymorphism. However, when you make use of lots of concrete classes, you are looking for trouble because that code may have to be changed as new concrete classes are added. Your code will not be "closed to modification". To extend it with new concrete types, you will have to reopen it.

We take what varies and encapsulate it to create new objects, this is called a Factory. Factories handles the details of object creation.

### The simple factory

The simple factory is not actually a desing pattern, it's more of a programming idiom. But is commonly used.

Example simple factory: 

```ts
export class CharacterCreationFactory {
  createCharacter(classType: string): Character {
    if (classType.equals("knight")) {
      return new KnightCharacter();
    } else {
      return null;
    }
  }
}

export class CharacterCreator {
  private _characterFactory: CharacterCreationFactory;
  constructor(characterFactory: CharacterCreationFactory) {
    this._characterFactory = characterFactory;
  }

  customizeCharacter(classType: string): void {
    const character: Character = this._characterFactory.createCharacter(classType);
    //do stuff...
  } 
}
```

#### Note
> In design patterns, the phrase "implement an interface" does NOT always mean "write a class that implements a OO interface, by using the 'implements' keyword in the class declaration". In the general use of the phrase, a concrate class implementing a method from a supertype (wich could be a class OR interface) is still considered to be "implementing the interface" of a supertype.

### The factory method pattern, allowing subclasses to decide

A factory method handles object creation and encapsulates it in a subclass. This decouples the client code in the superclass from the object creation code in the subclass.

The factory method pattern defines an interface for creating an object, but lets subclasses decide witch class to instantiate. Factory method lets a class defer instantiation to subclasses.

### In resume

All factory patterns encapsulate object creation. The Factory Method Pattern encapsulates object creation by letting subclasses decide what objects to create.

The factory method lets subclasses decide wich class to instantiate. They say "decide" not because the pattern allows subclasses themselves to decide at runtime, but because the creator class is written without knowledge of the actual products that will be created, wich is decided purely by the choice of the subclass that is used.

### The Character-Creation Example

Fristly we create the Character abstract class with all methods that our characters share.

```ts
export abstract class Character {
  name: string;
  face: string;
  body: string;
  build: string;

  startingItems: Array<string> = new Array();

  createFace(): void {
    console.log("Creating face features");
  }

  createBody(): void {
    console.log("Creating body type");
  }

  selectBuild(): void {
    console.log("Selecting class type");
  }

  makeCharacter(): void {
    console.log(`Creating character with items: ${this.startingItems}`);
  }

  description(): string {
    return `Character ${this.name} is an ${this.build} with ${
      this.face
    } face and ${this.body} body`;
  }
}
```

We create a Character and  extend from the Character abstract class.

```ts
export class KnightCharacter extends Character {
  constructor(name: string) {
    super();

    this.name = name;
    this.face = "European";
    this.body = "Average";
    this.build = "Knight";

    this.startingItems.push("LifeGem", "Shield", "Sword");
  }
}
```

It's time to create the Characters without knowledge of witch Character will be created.

```ts
export abstract class CharacterCreator {
  customizeCharacter(classType: string, name: string): Character {
    const character = this.createCharacter(classType, name);
    character.createFace();
    character.createBody();
    character.selectBuild();
    character.makeCharacter();
    return character;
  }

  abstract createCharacter(classType: string, name: string): Character;
}

```

Then the subclass that is responsible for decide wich Character create. 

```ts
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
```

The result

```ts
const meleeCharacter: CharacterCreator = new MeleeCharacterFactory();
const rangerCharacter: CharacterCreator = new RangerCharacterFactory();

const knight: Character = meleeCharacter.customizeCharacter("knight", "Ignus");
console.log(knight.description());

const explorer: Character = rangerCharacter.customizeCharacter("explorer","Robert");
console.log(explorer.description());
```

```bash
Creating face features
Creating body type
Selecting class type
Creating character with items: LifeGem,Shield,Sword
Character Ignus is an Knight with European face and Average body

Creating face features
Creating body type
Selecting class type
Creating character with items: Potion,Stamina Amulet,Bow
Character Robert is an Explorer with Asian face and Thin body
```

