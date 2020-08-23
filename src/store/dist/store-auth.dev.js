"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

var state = {
  loggedIn: false
};
var mutations = {
  setLoggedIn: function setLoggedIn(state, value) {
    state.loggedIn = value;
  }
};
var actions = {
  registerUser: function registerUser(_ref, payload) {// some code here

    _objectDestructuringEmpty(_ref);
  },
  loginUser: function loginUser(_ref2, payload) {
    _objectDestructuringEmpty(_ref2);

    console.log("user logged in");
  },
  logoutUser: function logoutUser() {
    console.log("user logged out");
  },
  handleStateChage: function handleStateChage(_ref3) {// some code here

    var commit = _ref3.commit,
        dispatch = _ref3.dispatch;
  }
};
var getters = {};
var _default = {
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
};
exports["default"] = _default;