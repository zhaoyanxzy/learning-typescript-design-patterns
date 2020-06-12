import { Fly } from "./Fly";
import { CanFly } from "./Fly/CanFly";

export class Animal {
	private name: string;
	private weight: number;
	private sound: string;

	/**
	 * The "flyingType" instance variable is a subclass of the Fly interface.
	 * This Animal class does not need to know what "flyingType" does,
	 * it just know that behaviour is available to its subclasses (Composition).
	 * Instead of inheriting a behaviour, the class is composed with the right
	 * behaviour built-in.
	 * Composition can allow instances to change behaviour on runtime.
	 */
	public flyingType: Fly;
	// =============================================================================
	// Getters and Setters
	// =============================================================================
	public set setName(newName: string) {
		this.name = newName;
	}
	public set setWeight(newWeight: number) {
		if (newWeight > 0) {
			this.weight = newWeight;
		} else {
			console.log("Weight must be > 0");
		}
	}
	public set setSound(newSound: string) {
		this.sound = newSound;
	}
	public get getName() {
		return this.name;
	}
	public get getWeight() {
		return this.weight;
	}
	public get getSound() {
		return this.sound;
	}

	// =============================================================================
	// Public methods
	// =============================================================================
	public tryToFly(): string {
		return this.flyingType.fly();
	}
	public setFlyingAbility(newFlyType: Fly): void {
		this.flyingType = newFlyType;
	}
}
