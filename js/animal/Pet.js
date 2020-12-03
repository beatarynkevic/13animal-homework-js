import { Animal } from './Animal.js';

class Pet extends Animal {
    constructor(name, color) {
        super(name, color);

        this.legsCount = 4;
        this.likePlaying = true;
    }

}

export { Pet }