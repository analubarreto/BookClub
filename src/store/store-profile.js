import Vue from "vue";
import { auth } from "boot/firebase";

const state = {
  editUser: false,
  userData: null
};

const mutations = {
  setEditUser(state, value) {
    state.editUser = value;
  },
  setUser(state, data) {
    state.userData = data;
  }
};
const actions = {
  setEditUser({ commit }) {
    !state.editUser
      ? commit("setEditUser", true)
      : commit("setEditUser", false);
  },
  // get user from firebase
  fbReadUser({ commit }) {
    const user = auth.currentUser;
    const data = {
      name: "",
      email: "",
      photoUrl: "",
      emailVerified: false
    };
    if (user != null) {
      data.name = user.displayName;
      data.email = user.email;
      data.photoUrl = user.photoURL;
      data.emailVerified = user.emailVerified;

      commit("setUser", data);
    } else {
      commit("setUser", null);
    }
  }
};
const getters = {
  userData: state => {
    return state.userData;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
