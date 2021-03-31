"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = void 0;

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var register = function register(dataParam) {
  var path = 'data.json';

  _fs["default"].readFile(path, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      var dataArr = JSON.parse(data);
      dataArr.push(dataParam);

      _fs["default"].writeFile(path, JSON.stringify(dataArr), {
        encoding: 'utf-8'
      }, function (err) {
        if (err) {
          console.log(err);
        }
      });
    }
  });
};

exports.register = register;