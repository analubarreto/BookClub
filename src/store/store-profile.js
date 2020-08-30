import Vue from "vue";
import { uid } from "quasar";
import { database, auth } from "boot/firebase";

const state = {
  editUser: true
};

const mutations = {
  setEditUser(state, value) {
    state.editUser = value;
  },
  addUserDetail(state, payload) {
    Vue.set(state.userDetails, payload.id, payload.userDetails);
  }
};
const actions = {
  setEditUser({ commit }) {
    !state.editUser
      ? commit("setEditUser", true)
      : commit("setEditUser", false);
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
