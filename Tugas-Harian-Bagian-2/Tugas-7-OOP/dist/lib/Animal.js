"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Animal = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animal = function Animal(name) {
  var legs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
  var cold_blooded = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  _classCallCheck(this, Animal);

  this.name = name;
  this.legs = legs;
  this.cold_blooded = cold_blooded;
};

exports.Animal = Animal;