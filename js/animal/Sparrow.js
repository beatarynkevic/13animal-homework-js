import { Bird } from './Bird.js';

class Sparrow extends Bird {
    constructor(name, color, body) {
        super(name, color, body);

        this.birdType = 'Spanish sparrow';
        this.voice = 'bird chirping 🐦';
    }
    repeatSound() {
        console.log(`${this.name} the ${this.birdType}`);
    }
}

export { Sparrow }