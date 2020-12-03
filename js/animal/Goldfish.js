import { Fish } from './Fish.js';

class Goldfish extends Fish {
    constructor(name, color, body) {
        super(name, color, body);

        this.emoji = '🐠';
        this.legsCount = 5;
    }
}

export { Goldfish }