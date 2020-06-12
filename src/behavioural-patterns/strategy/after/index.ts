import { Dog } from "./Dog"
import { Bird } from "./Bird";
import { CanFly } from "./Fly/CanFly";

const main = () => {
	const fido = new Dog();
	fido.setName = "fido";
	const tweety = new Bird();

	console.log("fido:", fido.tryToFly());
	console.log("tweety:", tweety.tryToFly());

	fido.setFlyingAbility(new CanFly());
	console.log("fido:", fido.tryToFly());
}

main();

// fido: I cannot fly
// tweety: I can fly
// fido: I can fly
