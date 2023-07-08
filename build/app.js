"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _package = _interopRequireDefault(require("../package.json"));
var _voter = _interopRequireDefault(require("./routes/voter.routes"));
var _auth = _interopRequireDefault(require("./routes/auth.routes"));
var _auth2 = _interopRequireDefault(require("./middlewares/auth.middleware"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
app.use((0, _morgan["default"])("dev"));
app.set("pkg", _package["default"]);
app.use(_express["default"].json());
app.get("https://cpyd.sebastian.cl/grupok/", function (_, res) {
  res.redirect("https://cpyd.sebastian.cl/grupok/v1/auth");
});
app.get("/authors", function (_, res) {
  res.json({
    author: app.get("pkg").author,
    name: app.get("pkg").name,
    description: app.get("pkg").description
  });
});
app.use("https://cpyd.sebastian.cl/grupok/v1/voter", _auth2["default"], _voter["default"]);
app.use("https://cpyd.sebastian.cl/grupok/v1/auth", _auth["default"]);
var _default = app;
exports["default"] = _default;