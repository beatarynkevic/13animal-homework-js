import { Pet } from './Pet.js';

class Dog extends Pet {
    constructor(name, color, body) {
        super(name, color, body);

        this.voice = 'Au au 🐶';
    }
}

export { Dog }