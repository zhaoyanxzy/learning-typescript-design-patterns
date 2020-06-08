"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NotASingleton_1 = require("./NotASingleton");
const main = () => {
    const employee1 = new NotASingleton_1.NotASingleton();
    employee1.printDetails("From employee 1");
    const student1 = new NotASingleton_1.NotASingleton();
    student1.printDetails("From student 1");
};
main();
//# sourceMappingURL=index.js.map