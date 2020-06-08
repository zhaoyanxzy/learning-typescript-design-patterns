"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NotASingleton {
    constructor() {
        // Before the implementation of the Singleton design pattern,
        // everytime the printDetails is invovked, a new object is created.
        // However, the printDetails invocation does not require a new instance.
        NotASingleton.instanceCounter = NotASingleton.instanceCounter + 1;
        console.log("counter is", NotASingleton.instanceCounter);
    }
    printDetails(message) {
        console.log(message);
    }
}
exports.NotASingleton = NotASingleton;
NotASingleton.instanceCounter = 0;
//# sourceMappingURL=NotASingleton.js.map