"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    // =============================================================================
    // Getters and Setters
    // =============================================================================
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
    // =============================================================================
    // Public methods
    // =============================================================================
    tryToFly() {
        return this.flyingType.fly();
    }
    setFlyingAbility(newFlyType) {
        this.flyingType = newFlyType;
    }
}
exports.Animal = Animal;
//# sourceMappingURL=Animal.js.map