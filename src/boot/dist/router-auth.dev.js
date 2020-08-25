"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _quasar = require("quasar");

var _default = function _default(_ref) {
  var router = _ref.router;
  router.beforeEach(function (to, from, next) {
    var loggedIn = _quasar.LocalStorage.getItem("loggedIn");

    if (!loggedIn && to.path !== "/auth") {
      next("/auth");
    } else {
      next();
    }
  });
};

exports["default"] = _default;