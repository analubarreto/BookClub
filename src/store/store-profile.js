import { auth } from "boot/firebase";
import { Notify } from "quasar";
import { showErrorMessage } from "src/functions/show-error-message";

const state = {
  editUser: false,
  viewWishlist: true,
  userData: {
    name: "",
    email: "",
    photoUrl: "",
    emailVerified: false
  }
};

const mutations = {
  setViewWishlist(state, value) {
    state.viewWishlist = value;
  },

  setEditUser(state, value) {
    state.editUser = value;
  },
  setUser(state, data) {
    state.userData = data;
  }
};

const actions = {
  updateUser({ dispatch }, payload) {
    dispatch("fbUpdateUser", payload);
  },

  updateEmail({ dispatch }, payload) {
    dispatch("fbUpdateEmail", payload);
  },

  setEditUser({ commit }, state) {
    !state.editUser
      ? commit("setEditUser", true)
      : commit("setEditUser", false);
  },

  setViewWishlist({ commit }, state) {
    !state.viewWishlist
      ? commit("setViewWishlist", true)
      : commit("setViewWishlist");
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
        displayName: payload.updates.name,
        photoURL: payload.updates.photoUrl
      })
      .then(function() {
        Notify.create({
          type: "positive",
          message: "Your data was edited",
          position: "top"
        });
      })
      .catch(function(err) {
        console.log(err.message);
      });
    console.log(user.displayName);
    console.log(user.email);
  },

  fbUpdateEmail({}, payload) {
    const user = auth.currentUser;
    user;
    user
      .updateEmail(payload.updates.email)
      .then(function() {
        console.log("success");
      })
      .catch(function(err) {
        showErrorMessage(err.message);
      });
    console.log(user.email);
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
