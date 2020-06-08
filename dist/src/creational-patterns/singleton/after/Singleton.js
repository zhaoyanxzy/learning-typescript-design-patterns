"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Singleton {
    constructor() {
        // instanceCounter increments for every instantiation
        Singleton.instanceCounter = Singleton.instanceCounter + 1;
        console.log("instanceCounter is", Singleton.instanceCounter);
    }
    static get getInstance() {
        if (Singleton.instance === null) {
            Singleton.instance = new Singleton();
            return Singleton.instance;
        }
        return Singleton.instance;
    }
    printDetails(message) {
        console.log(message);
    }
}
exports.Singleton = Singleton;
Singleton.instanceCounter = 0;
Singleton.instance = null;
//# sourceMappingURL=Singleton.js.map