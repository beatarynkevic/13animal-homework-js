import { Pet } from './Pet.js';

class Rabbit extends Pet {
    constructor(name, color, body) {
        super(name, color, body);

        this.voice = 'Grinding the teeth together🐰';
    }
}

export { Rabbit }