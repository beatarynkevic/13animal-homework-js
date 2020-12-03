import { Animal } from './Animal.js';

class Pet extends Animal {
    constructor(name, color, body) {
        super(name, color, body);

        this.legsCount = 4;
        this.likePlaying = 'megsta zaisti';
    }
    walk() {
        console.log(`${this.name} turi ${this.legsCount} kojas ir ${this.likePlaying}`);
    }
}

export { Pet }