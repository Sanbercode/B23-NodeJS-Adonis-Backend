import {Animal} from './lib/Animal';
import {Ape} from "./lib/Ape";
import {Frog} from "./lib/Frog";
import {Clock} from "./lib/Clock";

//soal 1
let sheep = new Animal("Shaun");
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

let sungokong = new Ape("Kera Sakti");
sungokong.yell();

let kodok = new Frog("Buduk");
kodok.jump();

//soal 2
console.log("\n=====================\n");

let clock = new Clock({template: 'h:m:s'});
clock.start();
clock.stop();