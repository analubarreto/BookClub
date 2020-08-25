"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _quasar = require("quasar");

var _firebase = require("src/boot/firebase");

var _showErrorMessage = require("src/functions/show-error-message");

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
  registerUser: function registerUser(_ref, payload) {
    _objectDestructuringEmpty(_ref);

    _quasar.Loading.show();

    _firebase.auth.createUserWithEmailAndPassword(payload.email, payload.password).then(function () {
      _quasar.Notify.create("Your account was created, please check your e-mail");
    })["catch"](function (error) {
      (0, _showErrorMessage.showErrorMessage)(error.message);
    });
  },
  loginUser: function loginUser(_ref2, payload) {
    _objectDestructuringEmpty(_ref2);

    _quasar.Loading.show();

    _firebase.auth.signInWithEmailAndPassword(payload.email, payload.password).then(function () {
      _quasar.Notify.create("You're signed in");
    })["catch"](function (error) {
      (0, _showErrorMessage.showErrorMessage)(error.message);
    });
  },
  logoutUser: function logoutUser() {
    _firebase.auth.signOut();
  },
  handleStateChage: function handleStateChage(_ref3) {
    var _this = this;

    var commit = _ref3.commit,
        dispatch = _ref3.dispatch;

    _firebase.auth.onAuthStateChanged(function (user) {
      _quasar.Loading.hide();

      if (user) {
        commit("setLoggedIn", true);

        _quasar.LocalStorage.set("loggedIn", true);

        _this.$router.push("/")["catch"](function (err) {});

        dispatch("books/firebaseRead", null, {
          root: true
        });
      } else {
        commit("books/clearBooks", null, {
          root: true
        });
        commit("books/setBooksDownloaded", false, {
          root: true
        });
        commit("setLoggedIn", false);

        _quasar.LocalStorage.set("loggedIn", false);

        _this.$router.replace("/auth")["catch"](function (err) {});
      }
    });
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