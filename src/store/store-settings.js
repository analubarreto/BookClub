const state = {
  settings: {}
};
const mutations = {
  setShowBookCover(state, value) {
    // some code here
  },
  setShowBookDetails(state, value) {
    // some code here
  },
  setSettings(state, value) {
    // some code here
  }
};
const actions = {
  setShowBookCover({ commit, dispatch }) {
    // some code
  },
  setShowBookDetails({ commit, dispatch }) {
    // some code here
  },
  saveSettings({ state }) {
    // some code here
  },
  getSettings({ commit }) {
    // some code here
  }
};
const getters = {
  settings: state => {
    return state.settings;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
