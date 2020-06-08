import { Singleton } from "./Singleton";

const main = () => {
	const employee1 = Singleton.getInstance;
	employee1.printDetails("From employee 1");

	const student1 = Singleton.getInstance;
	student1.printDetails("From student 1");
}

main();
