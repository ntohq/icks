"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vector {
    constructor() {
        this.magnitude = 0;
        this.direction = 0;
    }
    PrintData() {
        console.log(`${this.magnitude} | ${this.direction}`);
    }
}
exports.default = Vector;
