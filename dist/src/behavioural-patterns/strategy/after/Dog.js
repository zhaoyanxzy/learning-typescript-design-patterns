"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = require("./Animal");
const CannotFly_1 = require("./Fly/CannotFly");
class Dog extends Animal_1.Animal {
    constructor() {
        super();
        this.setSound = "bark";
        // =============================================================================
        // Set as non-flying when instantiated
        // =============================================================================
        this.flyingType = new CannotFly_1.CannotFly();
    }
    digHole() {
        console.log("Dug a hole");
    }
}
exports.Dog = Dog;
//# sourceMappingURL=Dog.js.map