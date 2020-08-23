"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var state = {
  books: {// some code here
  },
  search: "",
  sort: ""
};
var mutations = {
  updateBook: function updateBook(state, payload) {// some code here
  },
  deleteBook: function deleteBook(state, id) {// some code here
  },
  addBook: function addBook(state, payload) {// some code here
  },
  setSearch: function setSearch(state, value) {// some code here
  },
  setSort: function setSort(state, value) {// some code here
  }
};
var actions = {
  updateBook: function updateBook(_ref, payload) {// some code here

    var commit = _ref.commit;
  },
  deleteBook: function deleteBook(_ref2, id) {// some code here

    var commit = _ref2.commit;
  },
  addBook: function addBook(_ref3, book) {// some code here

    var commit = _ref3.commit;
  },
  setSearch: function setSearch(_ref4, value) {// some code here

    var commit = _ref4.commit;
  },
  firebaseReadData: function firebaseReadData(_ref5) {// some code here

    var commit = _ref5.commit;
  }
};
var getters = {
  booksSorted: function booksSorted(state) {// some code here
  },
  booksFiltered: function booksFiltered(state) {// some code here
  }
};
var _default = {
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
};
exports["default"] = _default;