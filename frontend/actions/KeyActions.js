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
  },

  keysPlayed: function (keys) {
    AppDispatcher.dispatch({
      actionType: "PLAY_RECORDED_KEYS",
      keys: keys
    });
  }
};

module.exports = KeyActions;
