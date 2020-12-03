class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    introduce() {
        console.log(`Labas, as esu ${this.name} ir mano kailis yra ${this.color}`);
    }
    sound() {
        console.log(`${this.name}: ${this.voice}`);
    }
}

export { Animal }