import { Loading, Notify, LocalStorage } from "quasar";
import { auth } from "src/boot/firebase";
import { showErrorMessage } from "src/functions/show-error-message";

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
  handleStateChage({ commit, dispatch }) {
    auth.onAuthStateChanged(user => {
      Loading.hide();
      if (user) {
        commit("setLoggedIn", true);
        LocalStorage.set("loggedIn", true);
        this.$router.push("/").catch(err => {});
        dispatch("books/firebaseRead", null, { root: true });
      } else {
        commit("books/clearBooks", null, { root: true });
        commit("books/setBooksDownloaded", false, { root: true });
        commit("setLoggedIn", false);
        LocalStorage.set("loggedIn", false);
        this.$router.replace("/auth").catch(err => {});
      }
    });
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
