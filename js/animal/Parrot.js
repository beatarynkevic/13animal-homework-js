import { Bird } from './Bird.js';

class Parrot extends Bird {
    constructor(name, color, body) {
        super(name, color, body);

        this.birdType = 'Macaw';
        this.voice = 'I will repeat what you will say 🦜';
        this.canFly = true;
    }
    repeatSound(sound) {
        console.log(`${this.name} repeats your sound: ${sound}`);
    }
}

export { Parrot }