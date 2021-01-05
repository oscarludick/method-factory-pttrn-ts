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
