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
    // FIXME: Bad. even though it works, the principle is to
    // abstract what is the same and put them in the parent class
    fly() {
        console.log("I am a dog and I cannot fly");
    }
}
exports.Dog = Dog;
//# sourceMappingURL=Dog.js.map