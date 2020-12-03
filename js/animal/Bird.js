import { Animal } from './Animal.js';

class Bird extends Animal {
    constructor(name, color, body) {
        super(name, color, body);

        this.wingsCount = 2;
        this.newSpeed = 0;
    }
    fly(speed) {
        this.newSpeed += speed;
        console.log(this.name, '->', this.speed);
    }
}

export { Bird }