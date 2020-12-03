import { Fish } from './Fish.js';

class Salmon extends Fish {
    constructor(name, color, body) {
        super(name, color, body);

        this.legsCount = 6;
    }
}

export { Salmon }