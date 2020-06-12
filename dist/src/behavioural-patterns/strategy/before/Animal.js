"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    set setName(newName) {
        this.name = newName;
    }
    set setWeight(newWeight) {
        if (newWeight > 0) {
            this.weight = newWeight;
        }
        else {
            console.log("Weight must be > 0");
        }
    }
    set setSound(newSound) {
        this.sound = newSound;
    }
    get getName() {
        return this.name;
    }
    get getWeight() {
        return this.weight;
    }
    get getSound() {
        return this.sound;
    }
    // FIXME: Bad because some animals can fly and some can't
    /* BAD
        * You don't want to add methods to the super class.
        * You need to separate what is different between subclasses
        * and the super class
        */
    fly() {
        console.log("I am flying");
    }
}
exports.Animal = Animal;
//# sourceMappingURL=Animal.js.map