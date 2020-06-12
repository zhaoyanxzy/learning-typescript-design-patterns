import { Animal } from "./Animal";

export class Cat extends Animal {
	public constructor() {
		super();
		this.setSound = "meow";
	}
}
