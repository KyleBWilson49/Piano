var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/Dispatcher');

var KeyStore = new Store(AppDispatcher);
var _keys = [];

KeyStore.all = function () {
  return _keys.slice();
};

KeyStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case "ADD_KEY":
      addKey(payload.noteName);
      break;
    case "REMOVE_KEY":
      removeKey(payload.noteName);
      break;
  }
};

var addKey = function (noteName) {
  _keys.push(noteName);
  KeyStore.__emitChange();
};

var removeKey = function (noteName) {
  var toRemove = _keys.indexOf(noteName);
  _keys.splice(toRemove, 1);
  KeyStore.__emitChange();
};

module.exports = KeyStore;
