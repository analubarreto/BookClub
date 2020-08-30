const state = {
  editUser: false
};

const mutations = {
  setEditUser(state, value) {
    state.setEditUser = value;
  }
};
const actions = {
  setEditUser({ commit }) {
    if (!state.editUser) {
      commit("setEditUser", true);
    } else {
      commit("setEditUser", false);
    }
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
