export class Animal {
	private name: string;
	private weight: number;
	private sound: string;

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

	// FIXME: Bad because some animals can fly and some can't
	/* BAD
		* You don't want to add methods to the super class.
		* You need to separate what is different between subclasses
		* and the super class
		*/

	public fly(): void {
		console.log("I am flying");
	}
}
