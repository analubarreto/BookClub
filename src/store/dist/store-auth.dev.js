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
  loggedIn: false,
  register: false,
  forgotPassword: false
};
var mutations = {
  setLoggedIn: function setLoggedIn(state, value) {
    state.loggedIn = value;
  },
  setRegister: function setRegister(state, value) {
    state.register = value;
  },
  setForgotPassword: function setForgotPassword(state, value) {
    state.forgotPassword = value;
  }
};
var actions = {
  registerUser: function registerUser(_ref, payload) {
    _objectDestructuringEmpty(_ref);

    _quasar.Loading.show();

    _firebase.auth.createUserWithEmailAndPassword(payload.email, payload.password).then(function () {
      _quasar.Notify.create({
        type: "positive",
        message: "Your account was created, please check your e-mail",
        position: "top"
      });
    })["catch"](function (error) {
      (0, _showErrorMessage.showErrorMessage)(error.message);
    });
  },
  loginUser: function loginUser(_ref2, payload) {
    _objectDestructuringEmpty(_ref2);

    _quasar.Loading.show();

    _firebase.auth.signInWithEmailAndPassword(payload.email, payload.password).then(function () {
      _quasar.Notify.create({
        type: "info",
        message: "You're signed in",
        position: "top"
      });
    })["catch"](function (error) {
      (0, _showErrorMessage.showErrorMessage)(error.message);
    });
  },
  logoutUser: function logoutUser() {
    _firebase.auth.signOut();
  },
  handleAuthStateChange: function handleAuthStateChange(_ref3) {
    var _this = this;

    var commit = _ref3.commit,
        dispatch = _ref3.dispatch;

    _firebase.auth.onAuthStateChanged(function (user) {
      _quasar.Loading.hide();

      if (user) {
        commit("setLoggedIn", true);

        _quasar.LocalStorage.set("loggedIn", true);

        _this.$router.push("/profile");

        dispatch("books/firebaseRead", null, {
          root: true
        });
      } else {
        commit("books/clearBooks", null, {
          root: true
        });
        commit("setLoggedIn", false);

        _quasar.LocalStorage.set("loggedIn", false);

        _this.$router.replace("/auth")["catch"](function (err) {});
      }
    });
  },
  setRegister: function setRegister(_ref4) {
    var commit = _ref4.commit;
    commit("setRegister", true);
  },
  setForgotPassword: function setForgotPassword(_ref5) {
    var commit = _ref5.commit;

    if (state.forgotPassword === false) {
      commit("setForgotPassword", true);
    } else {
      commit("setForgotPassword", false);
    }
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