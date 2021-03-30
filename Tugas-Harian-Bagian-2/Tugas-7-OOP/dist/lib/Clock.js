"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Clock = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Clock = /*#__PURE__*/function () {
  function Clock(_ref) {
    var template = _ref.template;

    _classCallCheck(this, Clock);

    this.timer = 0;
    this.template = template;
  }

  _createClass(Clock, [{
    key: "render",
    value: function render() {
      var date = new Date();
      var hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
      var mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
      var secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
      var output = this.template.replace('h', hours).replace('m', mins).replace('s', secs);
      console.log(output);
    }
  }, {
    key: "start",
    value: function start() {
      this.render();
      this.timer = setInterval(this.render.bind(this), 1000);
    }
  }, {
    key: "stop",
    value: function stop() {
      clearInterval(this.timer);
    }
  }]);

  return Clock;
}();

exports.Clock = Clock;