const state = {
  editUser: true
};

const mutations = {
  setEditUser(state, value) {
    state.setEditUser = value;
  }
};
const actions = {
  setEditUser({ commit }) {
    console.log(`Before if: ${state.editUser}`);
    if (!state.editUser) {
      console.log(`Before if commit: ${state.editUser}`);
      commit("setEditUser", true);
      console.log(`After if commit: ${state.editUser}`);
    } else {
      console.log(`Before else commit: ${state.editUser}`);
      commit("setEditUser", false);
      console.log(`After else commit: ${state.editUser}`);
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
