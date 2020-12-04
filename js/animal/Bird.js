import { Animal } from './Animal.js';

class Bird extends Animal {
    constructor(name, color, body) {
        super(name, color, body);

        this.wingsCount = 2;
        this.newSpeed = 0;
        this.canFly = false;
    }
    fly() {
        console.log(`${this.name}: ${this.canFly ? 'Flies away' : 'ooops ..I can not fly'}`);
    }
}

export { Bird }