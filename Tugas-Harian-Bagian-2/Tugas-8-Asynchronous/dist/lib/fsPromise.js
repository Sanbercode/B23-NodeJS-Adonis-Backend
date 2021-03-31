"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = void 0;

var _promises = _interopRequireDefault(require("fs/promises"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var path = 'data.json';

var login = function login(name, password) {
  _promises["default"].readFile(path).then(function (data) {
    var realData = JSON.parse(data);
    var findData = realData.findIndex(function (item) {
      return item.name === name;
    });
    var theData = realData[findData];

    if (theData.password === password) {
      theData.isLogin = true;
      realData.splice(findData, 1, theData);
      return _promises["default"].writeFile(path, JSON.stringify(realData), {
        encoding: 'utf8'
      });
    } else {
      console.log("Login Gagal");
    }
  }).then(function () {
    return console.log("Berhasil Login");
  })["catch"](function (err) {
    console.log("Login Error");
  });
};

exports.login = login;