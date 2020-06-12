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
}
