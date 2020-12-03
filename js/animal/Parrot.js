import { Bird } from './Bird.js';

class Parrot extends Bird {
    constructor(name, color, body) {
        super(name, color, body);

        this.birdType = 'Macaw';
        this.voice = 'I will repeat what you will say 🦜';
    }
    repeatSound() {
        console.log(`${this.name} the ${this.birdType}`);
    }
}

export { Parrot }