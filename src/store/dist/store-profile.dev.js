"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var state = {
  editUser: true
};
var mutations = {
  setEditUser: function setEditUser(state, value) {
    state.setEditUser = value;
  }
};
var actions = {
  setEditUser: function setEditUser(_ref) {
    var commit = _ref.commit;
    console.log("Before if: ".concat(state.editUser));

    if (!state.editUser) {
      console.log("Before if commit: ".concat(state.editUser));
      commit("setEditUser", true);
      console.log("After if commit: ".concat(state.editUser));
    } else {
      console.log("Before else commit: ".concat(state.editUser));
      commit("setEditUser", false);
      console.log("After else commit: ".concat(state.editUser));
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