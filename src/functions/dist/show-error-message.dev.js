"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showErrorMessage = showErrorMessage;

var _quasar = require("quasar");

function showErrorMessage(errorMessage) {
  _quasar.Loading.hide();

  _quasar.Dialog.create({
    title: "Error",
    message: errorMessage
  });
}