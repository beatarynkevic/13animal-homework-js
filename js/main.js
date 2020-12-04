import { Dog } from './animal/Dog.js';
import { Cat } from './animal/Cat.js';
import { Rabbit } from './animal/Rabbit.js';
import { Parrot } from './animal/Parrot.js';
import { Chicken } from './animal/Chicken.js';
import { Sparrow } from './animal/Sparrow.js';
import { Goldfish } from './animal/Goldfish.js';
import { Nemofish } from './animal/Nemofish.js';
import { Salmon } from './animal/Salmon.js';

const suo = new Dog('Rex', 'juodas', 'kailis');
const katinas = new Cat('Luna', 'rainas', 'kailis');
const zuikis = new Rabbit('Zu', 'baltas', 'kailis');
const papuga = new Parrot('Tukis', 'melynos ir geltonos spalvos', 'plunksnos');
const vista = new Chicken('Masha', 'baltos', 'plunksnos');
const zvirblis = new Sparrow('Cipcipa', 'rudos', 'plunksnos');
const auksine = new Goldfish('Zuvele', 'auksiniai', 'zvynai');
const nemo = new Nemofish('Nemo', 'melyni', 'zvynai');
const lasisa = new Salmon('Lasisa', 'pilki', 'zvynai');

suo.introduce();
suo.sound();
suo.walk();

suo.color = 'raudonas';
console.log(suo.color);

katinas.introduce();
katinas.sound();
katinas.walk();

zuikis.introduce();
zuikis.sound();
zuikis.walk();

papuga.introduce();
papuga.sound();
papuga.repeatSound('Kukaracia');
papuga.fly();

vista.introduce();
vista.sound();
vista.fly();

zvirblis.introduce();
zvirblis.sound();
zvirblis.fly();

auksine.introduce();
auksine.swim();
auksine.jaustukas();

nemo.introduce();
nemo.swim();
nemo.jaustukas();

lasisa.introduce();
lasisa.swim();
