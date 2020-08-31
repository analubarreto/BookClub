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
  updateUser({ dispatch }) {
    // dispatch("books/fbReadBooks", null, { root: true });
    dispatch("updateUser", {});
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
      console.log(data.photoUrl);
      commit("setUser", data);
    } else {
      commit("setUser", null);
    }
  },

  // update firebase user
  fbUpdateUser({ commit }) {
    const user = auth.currentUser;
    const data = {
      name: state.userData.name,
      email: state.userData.email,
      photoUrl: state.userData.photoUrl,
      emailVerified: state.userData.emailVerified
    };
    user
      .updateProfile({
        displayName: "Ana Luiza",
        photoURL: "https://example.com/jane-q-user/profile.jpg"
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
