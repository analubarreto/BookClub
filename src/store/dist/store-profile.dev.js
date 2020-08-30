"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _quasar = require("quasar");

var _firebase = require("boot/firebase");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

var state = {
  userDetails: {
    name: "Ana Luiza",
    email: "analuibm@gmail.com",
    image: "https://image.freepik.com/free-photo/young-topless-black-woman-looking-camera_23-2148183300.jpg"
  },
  editUser: true
};
var mutations = {
  setEditUser: function setEditUser(state, value) {
    state.editUser = value;
  },
  addUserDetail: function addUserDetail(state, payload) {
    _vue["default"].set(state.userDetails, payload.id, payload.userDetails);
  }
};
var actions = {
  addUserDetail: function addUserDetail(_ref, userDetails) {
    var dispatch = _ref.dispatch;
    var userDetailId = (0, _quasar.uid)();
    var payload = {
      id: userDetailId,
      userDetails: userDetails
    };
    dispatch("fbAddUserDetail", payload);
  },
  setEditUser: function setEditUser(_ref2) {
    var commit = _ref2.commit;
    !state.editUser ? commit("setEditUser", true) : commit("setEditUser", false);
  },
  // Read from firebase - will read each change made to firebase database
  fbReadUser: function fbReadUser(_ref3) {
    var commit = _ref3.commit;
    var userId = _firebase.auth.currentUser.uid;
  },
  // Write to firebase - will write changes to firebase database
  fbAddUserDetail: function fbAddUserDetail(_ref4, payload) {
    _objectDestructuringEmpty(_ref4);

    var userId = _firebase.auth.currentUser.uid;

    var userRef = _firebase.database.ref("users/".concat(userId, "/").concat(payload.id));

    console.log(userRef);
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