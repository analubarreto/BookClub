"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var state = {
  editUser: false
};
var mutations = {
  setEditUser: function setEditUser(state, value) {
    state.setEditUser = value;
  }
};
var actions = {
  setEditUser: function setEditUser(_ref) {
    var commit = _ref.commit;

    if (!state.editUser) {
      commit("setEditUser", true);
    } else {
      commit("setEditUser", false);
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