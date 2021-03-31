"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addSiswa = void 0;

var _promises = _interopRequireDefault(require("fs/promises"));

require("core-js/stable");

require("regenerator-runtime/runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var path = 'data.json';

var addSiswa = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(name, trainerName) {
    var dataRead, realData, findData, theData, theAdmin;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _promises["default"].readFile(path);

          case 3:
            dataRead = _context.sent;
            realData = JSON.parse(dataRead);
            findData = realData.findIndex(function (item) {
              return item.name === trainerName;
            });
            theData = realData[findData];
            theAdmin = realData[0];

            if (!(theAdmin.role === 'admin' && theAdmin.isLogin)) {
              _context.next = 16;
              break;
            }

            if (theData['students'].length === 0) {
              theData['students'] = [{
                name: name
              }];
            } else {
              theData['students'].push({
                name: name
              });
            }

            realData.splice(findData, 1, theData);
            _context.next = 13;
            return _promises["default"].writeFile(path, JSON.stringify(realData), {
              encoding: 'utf8'
            });

          case 13:
            console.log("berhasil add siswa");
            _context.next = 17;
            break;

          case 16:
            console.log("Gagal Bro");

          case 17:
            _context.next = 22;
            break;

          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](0);
            console.log("Gagal menambahkan siswa");

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 19]]);
  }));

  return function addSiswa(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.addSiswa = addSiswa;