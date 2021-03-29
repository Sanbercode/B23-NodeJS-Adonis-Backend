"use strict";

var _funcLib = require("./lib/funcLib");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var args = process.argv;

var _process$argv$slice = process.argv.slice(2),
    _process$argv$slice2 = _slicedToArray(_process$argv$slice, 1),
    command = _process$argv$slice2[0];

switch (command) {
  case "sapa":
    var nama = args[3];
    console.log((0, _funcLib.sapa)(nama));
    break;

  case "convert":
    var _ref = [args[3], args[4], args[5]],
        name = _ref[0],
        domisili = _ref[1],
        umur = _ref[2];
    console.log((0, _funcLib.convert)(name, domisili, parseInt(umur)));
    break;

  case "checkScore":
    var param = args[3];
    console.log((0, _funcLib.checkScore)(param));
    break;

  case "filter":
    var _data = _slicedToArray(_funcLib.data, 5),
        ahmad = _data[0],
        regi = _data[1],
        bondra = _data[2],
        iqbal = _data[3],
        putri = _data[4];

    var keyword = args[3]; //keyword menggunakan index ke-3 args jadi harus tetap mengetikkan filter

    console.log((0, _funcLib.filterData)(keyword, ahmad, regi, bondra, iqbal, putri));
    break;

  default:
    break;
}