"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Singleton_1 = require("./Singleton");
const main = () => {
    const employee1 = Singleton_1.Singleton.getInstance;
    employee1.printDetails("From employee 1");
    const student1 = Singleton_1.Singleton.getInstance;
    student1.printDetails("From student 1");
};
main();
//# sourceMappingURL=index.js.map