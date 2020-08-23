"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.database = exports.auth = void 0;

var firebase = _interopRequireWildcard(require("firebase/app"));

require("firebase/auth");

require("firebase/database");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var firebaseConfig = {
  apiKey: "AIzaSyC_mfBiMrCCD0DnG1s7BWDDcjXn2MNUyN4",
  authDomain: "bookclub-df6f9.firebaseapp.com",
  databaseURL: "https://bookclub-df6f9.firebaseio.com",
  projectId: "bookclub-df6f9",
  storageBucket: "bookclub-df6f9.appspot.com",
  messagingSenderId: "981040593481",
  appId: "1:981040593481:web:126c145e7b675a2bb2dd98",
  measurementId: "G-L5FP4NJDP2"
};
var fireApp = firebase.initializeApp(firebaseConfig);
var auth = fireApp.auth();
exports.auth = auth;
var database = fireApp.database();
exports.database = database;