// var Store = require('flux/utils').Store;
// var AppDispatcher = require('../dispatcher/Dispatcher');
var KeyActions = require('../actions/KeyActions');


$(function(){
  var NOTES = {
    65 : "C4",
    87 : "Cs4",
    83 : "D4",
    69 : "Ds4",
    68 : "E4",
    70 : "F4",
    84 : "Fs4",
    71 : "G4",
    89 : "Gs4",
    72 : "A4",
    85 : "As4",
    74 : "B4",
    75 : "C5",
    79 : "Cs5",
    76 : "D5",
    80 : "Ds5",
    186 : "E5",
    222 : "F5"
  };

  $(document).on("keydown", function (e) {
    e.preventDefault();
    KeyActions.keyPressed(NOTES[e.keyCode]);
  });

  $(document).on("keyup", function (e){
    e.preventDefault();
    KeyActions.keyReleased(NOTES[e.keyCode]);
  });
});
