"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = require("./Animal");
const CanFly_1 = require("./Fly/CanFly");
class Bird extends Animal_1.Animal {
    constructor() {
        super();
        // =============================================================================
        // Set as flying when instantiated
        // =============================================================================
        this.flyingType = new CanFly_1.CanFly();
    }
}
exports.Bird = Bird;
//# sourceMappingURL=Bird.js.map