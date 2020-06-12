import { Fly } from ".";

export class CanFly implements Fly {
	public fly(): string {
		return "I can fly";
	}
}
