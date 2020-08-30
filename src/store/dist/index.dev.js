"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _storeAuth = _interopRequireDefault(require("src/store/store-auth"));

var _storeBooks = _interopRequireDefault(require("src/store/store-books"));

var _storeSettings = _interopRequireDefault(require("src/store/store-settings"));

var _storeProfile = _interopRequireDefault(require("src/store/store-profile"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]);
/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */


function _default()
/* { ssrContext } */
{
  var Store = new _vuex["default"].Store({
    modules: {
      auth: _storeAuth["default"],
      books: _storeBooks["default"],
      settings: _storeSettings["default"],
      profile: _storeProfile["default"]
    },
    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  });
  return Store;
}