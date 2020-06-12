import { Animal } from "./Animal";
import { CanFly } from "./Fly/CanFly";

export class Bird extends Animal {
	public constructor() {
		super();
		// =============================================================================
		// Set as flying when instantiated
		// =============================================================================
		this.flyingType = new CanFly();
	}
}
