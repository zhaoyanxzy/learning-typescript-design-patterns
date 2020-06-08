import { NotASingleton } from "./NotASingleton";

const main = () => {
	const employee1 = new NotASingleton();
	employee1.printDetails("From employee 1");

	const student1 = new NotASingleton();
	student1.printDetails("From student 1");
}

main();
