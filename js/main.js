import { Dog } from './animal/Dog.js';
import { Cat } from './animal/Cat.js';

const suo = new Dog('Rex', 'juodas');
const katinas = new Cat('Luna', 'raina');
// const zuikis = new Rabbit('Zu', 'baltas');

suo.introduce();
suo.sound();
suo.walk();

katinas.introduce();
katinas.sound();
katinas.walk();