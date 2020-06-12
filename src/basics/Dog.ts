import { Animal } from "./Animal";

export class Dog extends Animal {
	public constructor() {
		super();
		this.setSound = "bark";
	}
	public digHole(): void {
		console.log("Dug a hole");
	}
}
