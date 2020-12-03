import { Pet } from './Pet.js';

class Cat extends Pet {
    constructor(name, color, body) {
        super(name, color, body);

        this.voice = 'Miau miau 🐱';
    }
}

export { Cat }