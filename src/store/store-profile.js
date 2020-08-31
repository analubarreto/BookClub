import { auth } from "boot/firebase";

const state = {
  editUser: false,
  userData: {
    name: "",
    email: "",
    photoUrl: "",
    emailVerified: false
  }
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
  updateUser({ dispatch }, payload) {
    dispatch("updateUser", payload);
  },

  setEditUser({ commit }, state) {
    !state.editUser
      ? commit("setEditUser", true)
      : commit("setEditUser", false);
  },
  // get user from firebase
  fbReadUser({ commit }) {
    const user = auth.currentUser;
    const data = {
      name: state.userData.name,
      email: state.userData.email,
      photoUrl: state.userData.photoUrl,
      emailVerified: state.userData.emailVerified
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
  },

  // update firebase user
  fbUpdateUser({}, payload) {
    const user = auth.currentUser;
    user
      .updateProfile({
        displayName: payload.name,
        photoURL: payload.photoUrl
      })
      .then(function() {
        // Update successful
      })
      .catch(function(err) {
        // An error happened
      });
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
