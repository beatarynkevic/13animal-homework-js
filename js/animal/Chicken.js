import { Bird } from './Bird.js';

class Chicken extends Bird {
    constructor(name, color, body) {
        super(name, color, body);

        this.birdType = 'Aseel';
        this.voice = 'ko ko 🐔';
    }
    repeatSound() {
        console.log(`${this.name} the ${this.birdType}`);
    }
}

export { Chicken }