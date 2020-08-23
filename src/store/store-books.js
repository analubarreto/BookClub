const state = {
  books: {
    // some code here
  },
  search: "",
  sort: ""
};
const mutations = {
  updateBook(state, payload) {
    // some code here
  },
  deleteBook(state, id) {
    // some code here
  },
  addBook(state, payload) {
    // some code here
  },
  setSearch(state, value) {
    // some code here
  },
  setSort(state, value) {
    // some code here
  }
};
const actions = {
  updateBook({ commit }, payload) {
    // some code here
  },
  deleteBook({ commit }, id) {
    // some code here
  },
  addBook({ commit }, book) {
    // some code here
  },
  setSearch({ commit }, value) {
    // some code here
  },
  firebaseReadData({ commit }) {
    // some code here
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
