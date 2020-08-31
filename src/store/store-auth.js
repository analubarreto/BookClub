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
        Notify.create({
          type: "positive",
          message: "Your account was created",
          position: "top"
        });
      })
      .catch(error => {
        showErrorMessage(error.message);
      });
  },
  sendEmailVerification({}) {
    Loading.show();
    const user = auth.currentUser;
    user
      .sendEmailVerification()
      .then(() => {
        Notify.create({
          type: "info",
          message:
            "A verification e-mail was sent to you, please check your e-mail",
          position: "top"
        });
        Loading.hide();
      })
      .catch(error => {
        showErrorMessage(error.message);
      });
  },
  sendResetPasswordEmail({}, payload) {
    auth
      .sendPasswordResetEmail(payload.email)
      .then(() => {
        Notify.create({
          type: "positive",
          message: "An e-mail was sent to you",
          position: "top"
        });
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
        Notify.create({
          type: "info",
          message: "You're signed in",
          position: "top"
        });
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
        this.$router.push("/profile").catch(err => err);
        dispatch("books/fbReadBooks", null, { root: true });
        dispatch("profile/fbReadUser", null, { root: true });
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
    !state.forgotPassword
      ? commit("setForgotPassword", true)
      : commit("setForgotPassword", false);
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
