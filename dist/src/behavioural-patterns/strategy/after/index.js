"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Dog_1 = require("./Dog");
const Bird_1 = require("./Bird");
const CanFly_1 = require("./Fly/CanFly");
const main = () => {
    const fido = new Dog_1.Dog();
    fido.setName = "fido";
    const tweety = new Bird_1.Bird();
    console.log("fido:", fido.tryToFly());
    console.log("tweety:", tweety.tryToFly());
    fido.setFlyingAbility(new CanFly_1.CanFly());
    console.log("fido:", fido.tryToFly());
};
main();
// fido: I cannot fly
// tweety: I can fly
// fido: I can fly
//# sourceMappingURL=index.js.map