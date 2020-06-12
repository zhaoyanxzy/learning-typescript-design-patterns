import { Animal } from "./Animal";
import { CannotFly } from "./Fly/CannotFly";

export class Dog extends Animal {
	public constructor() {
		super();
		this.setSound = "bark";
		// =============================================================================
		// Set as non-flying when instantiated
		// =============================================================================
		this.flyingType = new CannotFly();
	}
	public digHole(): void {
		console.log("Dug a hole");
	}

}
