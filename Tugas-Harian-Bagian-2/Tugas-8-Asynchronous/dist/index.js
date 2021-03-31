"use strict";

var _fsCallback = require("./lib/fsCallback");

var _fsPromise = require("./lib/fsPromise");

var _fsPromiseAsyncAwait = require("./lib/fsPromiseAsyncAwait");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var args = process.argv;

switch (args[2]) {
  case "register":
    var data = args[3];

    var _data$split = data.split(','),
        _data$split2 = _slicedToArray(_data$split, 3),
        name = _data$split2[0],
        password = _data$split2[1],
        role = _data$split2[2];

    var obj = {
      name: name,
      password: password,
      role: role,
      isLogin: false
    };
    (0, _fsCallback.register)(obj);
    console.log("Berhasil Register");
    break;

  case "login":
    var param1 = args[3];

    var _param1$split = param1.split(','),
        _param1$split2 = _slicedToArray(_param1$split, 2),
        name1 = _param1$split2[0],
        password1 = _param1$split2[1];

    (0, _fsPromise.login)(name1, password1);
    break;

  case "addSiswa":
    var arg = args[3];

    var _arg$split = arg.split(','),
        _arg$split2 = _slicedToArray(_arg$split, 2),
        name2 = _arg$split2[0],
        trainerName = _arg$split2[1];

    (0, _fsPromiseAsyncAwait.addSiswa)(name2, trainerName);
    break;

  default:
    break;
}