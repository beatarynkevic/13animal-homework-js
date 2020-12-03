import { Fish } from './Fish.js';

class Nemofish extends Fish {
    constructor(name, color, body) {
        super(name, color, body);

        this.emoji = '🐟';
        this.legsCount = 4;
    }
}

export { Nemofish }