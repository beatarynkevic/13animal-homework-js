import { Animal } from './Animal.js';

class Fish extends Animal {
    constructor(name, color, body) {
        super(name, color, body);
    }
    swim() {
        console.log(`${this.name} turi ${this.legsCount} pelekus`);
    }
    jaustukas() {
        console.log(`${this.emoji}`);
    }
}

export { Fish }