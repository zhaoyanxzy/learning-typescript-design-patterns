"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = require("./Animal");
class Dog extends Animal_1.Animal {
    constructor() {
        super();
        this.setSound = "bark";
    }
    digHole() {
        console.log("Dug a hole");
    }
}
exports.Dog = Dog;
//# sourceMappingURL=Dog.js.map