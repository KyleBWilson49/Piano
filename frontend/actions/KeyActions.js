var KeyStore = require('../stores/KeyStore');
var AppDispatcher = require('../dispatcher/Dispatcher');

var KeyActions = {
  keyPressed: function (note) {
    AppDispatcher.dispatch({
      actionType: "ADD_KEY",
      noteName: note
    });
  },

  keyReleased: function (note) {
    AppDispatcher.dispatch({
      actionType: "REMOVE_KEY",
      noteName: note
    });
  }
};

module.exports = KeyActions;
