"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var state = {
  settings: {}
};
var mutations = {
  setShowBookCover: function setShowBookCover(state, value) {// some code here
  },
  setShowBookDetails: function setShowBookDetails(state, value) {// some code here
  },
  setSettings: function setSettings(state, value) {// some code here
  }
};
var actions = {
  setShowBookCover: function setShowBookCover(_ref) {// some code

    var commit = _ref.commit,
        dispatch = _ref.dispatch;
  },
  setShowBookDetails: function setShowBookDetails(_ref2) {// some code here

    var commit = _ref2.commit,
        dispatch = _ref2.dispatch;
  },
  saveSettings: function saveSettings(_ref3) {// some code here

    var state = _ref3.state;
  },
  getSettings: function getSettings(_ref4) {// some code here

    var commit = _ref4.commit;
  }
};
var getters = {
  settings: function settings(state) {
    return state.settings;
  }
};
var _default = {
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
};
exports["default"] = _default;