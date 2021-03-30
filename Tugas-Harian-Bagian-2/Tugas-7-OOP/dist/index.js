"use strict";

var _Animal = require("./lib/Animal");

var _Ape = require("./lib/Ape");

var _Frog = require("./lib/Frog");

var _Clock = require("./lib/Clock");

//soal 1
var sheep = new _Animal.Animal("Shaun");
console.log(sheep.name); // "shaun"

console.log(sheep.legs); // 4

console.log(sheep.cold_blooded); // false

var sungokong = new _Ape.Ape("Kera Sakti");
sungokong.yell();
var kodok = new _Frog.Frog("Buduk");
kodok.jump(); //soal 2

console.log("\n=====================\n");
var clock = new _Clock.Clock({
  template: 'h:m:s'
});
clock.start();
clock.stop();