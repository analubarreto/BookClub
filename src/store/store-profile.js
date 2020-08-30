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
  addUserDetail({ dispatch }, userDetails) {
    const userDetailId = uid();
    const payload = {
      id: userDetailId,
      userDetails: userDetails
    };
    dispatch("fbAddUserDetail", payload);
  },
  setEditUser({ commit }) {
    !state.editUser
      ? commit("setEditUser", true)
      : commit("setEditUser", false);
  },
  // Read from firebase - will read each change made to firebase database
  fbReadUser({ commit }) {
    const userId = auth.currentUser.uid;
  },

  // Write to firebase - will write changes to firebase database
  fbAddUserDetail({}, payload) {
    const userId = auth.currentUser.uid;
    const userRef = database.ref(`users/${userId}/${payload.id}`);
    console.log(userRef);
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
