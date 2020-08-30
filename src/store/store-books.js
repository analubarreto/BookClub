import Vue from "vue";
import { uid, Notify } from "quasar";
import { database, auth } from "boot/firebase";

const state = {
  books: {},
  search: "",
  sort: "",
  booksDownloaded: false
};
const mutations = {
  updateBook(state, payload) {
    Object.assign(state.books[payload.id], payload.updates);
  },
  deleteBook(state, id) {
    Vue.delete(state.books, id);
  },
  addBook(state, payload) {
    Vue.set(state.books, payload.id, payload.book);
  },
  setSearch(state, value) {
    state.search = value;
  },
  setSort(state, value) {
    state.sort = value;
  },
  setBooksDownloaded(state, value) {
    state.booksDownloaded = value;
  },
  clearBooks(state) {
    state.books = {};
  }
};
const actions = {
  updateBook({ dispatch }, payload) {
    dispatch("firebaseUpdate", payload);
  },
  deleteBook({ dispatch }, id) {
    dispatch("firebaseDelete", id);
  },
  addBook({ dispatch }, book) {
    const bookId = uid();
    const payload = {
      id: bookId,
      book: book
    };
    dispatch("firebaseAdd", payload);
  },
  setSearch({ commit }, value) {
    commit("setSearch", value);
  },
  firebaseReadData({ commit }) {
    commit("setSort", value);
  },
  // Read from firebase - will read each change made to firebase database
  fbReadBooks({ commit }) {
    const userId = auth.currentUser.uid;
    const userBooks = database.ref(`books/${userId}`);

    // Check if data exists
    userBooks.once(
      "value",
      snapshot => {
        commit("setBooksDownloaded", true);
      },
      error => {
        showErrorMessage(error.message);
        this.$router.replace("/auth");
      }
    );

    // child added hook
    userBooks.on("child_added", snapshot => {
      const book = snapshot.val();

      const payload = {
        id: snapshot.key,
        book: book
      };

      commit("addBook", payload);
    });

    // child removed
    userBooks.on("child_removed", snapshot => {
      const bookId = snapshot.key;

      commit("deleteBook", bookId);
    });
  },

  // write to firebase - will write changes to firebase database
  firebaseAdd({}, payload) {
    const userId = auth.currentUser.uid;
    const bookRef = database.ref(`books/${userId}/${payload.id}`);
    bookRef.set(payload.book, error => {
      if (error) {
        showErrorMessage(error.message);
      } else {
        Notify.create("Book added");
      }
    });
  },

  firebaseUpdate({}) {
    const userId = auth.currentUser.uid;
    const bookRef = database.ref(`books/${userId}/${payload.id}`);
    bookRef.update(payload.book, error => {
      if (error) {
        showErrorMessage(error.message);
      } else {
        Notify.create("Book updated");
      }
    });
  },

  firebaseDelete({}, bookId) {
    const userId = auth.currentUser.uid;
    const bookRef = database.ref(`books/${userId}/${bookId}`);
    bookRef.remove(error => {
      if (error) {
        showErrorMessage(error.message);
      } else {
        Notify.create("Book deleted");
      }
    });
  }
};
const getters = {
  booksSorted: state => {
    // some code here
  },
  booksFiltered: state => {
    // some code here
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
