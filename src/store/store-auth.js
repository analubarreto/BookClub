import { Loading, Notify, LocalStorage } from "quasar";
import { auth } from "src/boot/firebase";
import { showErrorMessage } from "src/functions/show-error-message";

const state = {
  loggedIn: false,
  register: false,
  forgotPassword: false
};
const mutations = {
  setLoggedIn(state, value) {
    state.loggedIn = value;
  },
  setRegister(state, value) {
    state.register = value;
  },
  setForgotPassword(state, value) {
    state.forgotPassword = value;
  }
};
const actions = {
  registerUser({}, payload) {
    Loading.show();
    auth
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(() => {
        Notify.create("Your account was created, please check your e-mail");
      })
      .catch(error => {
        showErrorMessage(error.message);
      });
  },
  loginUser({}, payload) {
    Loading.show();
    auth
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(() => {
        Notify.create("You're signed in");
      })
      .catch(error => {
        showErrorMessage(error.message);
      });
  },
  logoutUser() {
    auth.signOut();
  },
  handleAuthStateChange({ commit, dispatch }) {
    auth.onAuthStateChanged(user => {
      Loading.hide();
      if (user) {
        commit("setLoggedIn", true);
        LocalStorage.set("loggedIn", true);
        this.$router.push("/profile");
        dispatch("books/firebaseRead", null, { root: true });
      } else {
        commit("books/clearBooks", null, { root: true });
        commit("setLoggedIn", false);
        LocalStorage.set("loggedIn", false);
        this.$router.replace("/auth").catch(err => {});
      }
    });
  },
  setRegister({ commit }) {
    commit("setRegister", true);
  },
  setForgotPassword({ commit }) {
    if (this.forgotPassword === false) {
      commit("setForgotPassword", true);
    } else {
      commit("setForgotPassword", false);
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
