"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.cubehelixLong = void 0;
var _index = require("../../../lib-vendor/d3-color/src/index.js");
var _color = _interopRequireWildcard(require("./color.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function cubehelix(hue) {
  return function cubehelixGamma(y) {
    y = +y;
    function cubehelix(start, end) {
      var h = hue((start = (0, _index.cubehelix)(start)).h, (end = (0, _index.cubehelix)(end)).h),
        s = (0, _color.default)(start.s, end.s),
        l = (0, _color.default)(start.l, end.l),
        opacity = (0, _color.default)(start.opacity, end.opacity);
      return function (t) {
        start.h = h(t);
        start.s = s(t);
        start.l = l(Math.pow(t, y));
        start.opacity = opacity(t);
        return start + "";
      };
    }
    cubehelix.gamma = cubehelixGamma;
    return cubehelix;
  }(1);
}
var _default = exports.default = cubehelix(_color.hue);
var cubehelixLong = exports.cubehelixLong = cubehelix(_color.default);