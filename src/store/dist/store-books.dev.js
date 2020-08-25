"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _quasar = require("quasar");

var _firebase = require("boot/firebase");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

var state = {
  books: {},
  search: "",
  sort: "",
  booksDownloaded: false
};
var mutations = {
  updateBook: function updateBook(state, payload) {
    Object.assign(state.books[payload.id], payload.updates);
  },
  deleteBook: function deleteBook(state, id) {
    _vue["default"]["delete"](state.books, id);
  },
  addBook: function addBook(state, payload) {
    _vue["default"].set(state.books, payload.id, payload.book);
  },
  setSearch: function setSearch(state, value) {
    state.search = value;
  },
  setSort: function setSort(state, value) {
    state.sort = value;
  },
  setBooksDownloaded: function setBooksDownloaded(state, value) {
    state.tasksDownloaded = value;
  },
  clearBooks: function clearBooks(state) {
    state.books = {};
  }
};
var actions = {
  updateBook: function updateBook(_ref, payload) {
    var dispatch = _ref.dispatch;
    dispatch("firebaseUpdate", payload);
  },
  deleteBook: function deleteBook(_ref2, id) {
    var dispatch = _ref2.dispatch;
    dispatch("firebaseDelete", id);
  },
  addBook: function addBook(_ref3, book) {
    var dispatch = _ref3.dispatch;
    var bookId = (0, _quasar.uid)();
    var payload = {
      id: bookId,
      book: book
    };
    dispatch("firebaseAdd", payload);
  },
  setSearch: function setSearch(_ref4, value) {
    var commit = _ref4.commit;
    commit("setSearch", value);
  },
  firebaseReadData: function firebaseReadData(_ref5) {
    var commit = _ref5.commit;
    commit("setSort", value);
  },
  // Read from firebase - will read each change made to firebase database
  firebaseRead: function firebaseRead(_ref6) {
    var _this = this;

    var commit = _ref6.commit;
    var userId = _firebase.auth.currentUser.uid;

    var userBooks = _firebase.database.ref("books/".concat(userId)); // Check if data exists


    userBooks.once("value", function (snapshot) {
      commit("setBooksDownloaded", true);
    }, function (error) {
      showErrorMessage(error.message);

      _this.$router.replace("/auth");
    }); // child added hook

    userBooks.on("child_added", function (snapshot) {
      var book = snapshot.val();
      var payload = {
        id: snapshot.key,
        task: task
      };
      commit("addBook", payload);
    }); // child removed

    userBooks.on("child_removed", function (snapshot) {
      var bookId = snapshot.key;
      commit("deleteBook", bookId);
    });
  },
  // write to firebase - will write changes to firebase database
  firebaseAdd: function firebaseAdd(_ref7, payload) {
    _objectDestructuringEmpty(_ref7);

    var userId = _firebase.auth.currentUser.uid;

    var bookRef = _firebase.database.ref("books/".concat(userId, "/").concat(payload.id));

    bookRef.set(payload.book, function (error) {
      if (error) {
        showErrorMessage(error.message);
      } else {
        _quasar.Notify.create("Book added");
      }
    });
  },
  firebaseUpdate: function firebaseUpdate(_ref8) {
    _objectDestructuringEmpty(_ref8);

    var userId = _firebase.auth.currentUser.uid;

    var bookRef = _firebase.database.ref("books/".concat(userId, "/").concat(payload.id));

    bookRef.update(payload.book, function (error) {
      if (error) {
        showErrorMessage(error.message);
      } else {
        _quasar.Notify.create("Book updated");
      }
    });
  },
  firebaseDelete: function firebaseDelete(_ref9, bookId) {
    _objectDestructuringEmpty(_ref9);

    var userId = _firebase.auth.currentUser.uid;

    var bookRef = _firebase.database.ref("books/".concat(userId, "/").concat(bookId));

    bookRef.remove(function (error) {
      if (error) {
        showErrorMessage(error.message);
      } else {
        _quasar.Notify.create("Book deleted");
      }
    });
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