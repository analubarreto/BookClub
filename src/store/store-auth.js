const state = {
  loggedIn: false
};
const mutations = {
  setLoggedIn(state, value) {
    state.loggedIn = value;
  }
};
const actions = {
  registerUser({}, payload) {
    // some code here
  },
  loginUser({}, payload) {
    console.log("user logged in");
  },
  logoutUser() {
    console.log("user logged out");
  },
  handleStateChage({ commit, dispatch }) {
    // some code here
  }
};
const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
