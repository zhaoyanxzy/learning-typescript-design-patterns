import { Fly } from ".";

export class CannotFly implements Fly {
	public fly(): string {
		return "I cannot fly";
	}
}
