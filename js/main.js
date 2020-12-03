import { Dog } from './animal/Dog.js';
import { Cat } from './animal/Cat.js';
import { Rabbit } from './animal/Rabbit.js';
import { Parrot } from './animal/Parrot.js';
import { Chicken } from './animal/Chicken.js';
import { Sparrow } from './animal/Sparrow.js';

const suo = new Dog('Rex', 'juodas', 'kailis');
const katinas = new Cat('Luna', 'rainas', 'kailis');
const zuikis = new Rabbit('Zu', 'baltas', 'kailis');
const papuga = new Parrot('Tukis', 'melynos ir geltonos spalvos', 'plunksnos');
const vista = new Chicken('Masha', 'baltos', 'plunksnos');
const zvirblis = new Sparrow('Cipcipa', 'rudos', 'plunksnos');

suo.introduce();
suo.sound();
suo.walk();

katinas.introduce();
katinas.sound();
katinas.walk();

zuikis.introduce();
zuikis.sound();
zuikis.walk();

papuga.introduce();
papuga.sound();
papuga.repeatSound();

vista.introduce();
vista.sound();
vista.repeatSound();

zvirblis.introduce();
zvirblis.sound();
zvirblis.repeatSound();