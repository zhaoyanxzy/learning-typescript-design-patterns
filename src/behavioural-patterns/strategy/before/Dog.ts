import { Animal } from "./Animal";

export class Dog extends Animal {
	public constructor() {
		super();
		this.setSound = "bark";
	}
	public digHole(): void {
		console.log("Dug a hole");
	}

	// FIXME: Bad. even though it works, the principle is to
	// abstract what is the same and put them in the parent class
	public fly(): void {
		console.log("I am a dog and I cannot fly");
	}
}
