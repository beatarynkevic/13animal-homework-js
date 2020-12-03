class Animal {
    constructor(name, color, body) {
        this.name = name;
        this.color = color;
        this.body = body;
    }
    introduce() {
        console.log(`Labas, as esu ${this.name} ir mano ${this.body} yra ${this.color}`);
    }
    sound() {
        console.log(`${this.name}: ${this.voice}`);
    }
}

export { Animal }