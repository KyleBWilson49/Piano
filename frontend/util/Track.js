var KeyStore = require('../stores/KeyStore'),
    KeyActions = require('../actions/KeyActions');

var Track = function (attributes) {
  this.name = attributes.name;
  this.roll = attributes.roll || [];
  // this.startRecording();
};

Track.prototype.startRecording = function () {
  this.roll = [];
  this.startTime = new Date();
};

Track.prototype.addNotes = function (notes) {
  this.roll.push({
    timeSlice: (new Date() - this.startTime),
    notes: notes //KeyStore.all() usually
  });
  console.log(this.roll[this.roll.length - 1].notes);
  console.log(this.roll[this.roll.length - 1].timeSlice);
};

Track.prototype.stopRecording = function () {
  this.addNotes([]);
};

Track.prototype.playRecording = function () {
  if ( this.interval ){
    return;
  }

  var playbackStartTime = new Date(),
      rollPosition = 0;

  var callback = function () {
    if (rollPosition < this.roll.length) {
      var currentNote = this.roll[rollPosition];

      if (Date.now() - playbackStartTime > currentNote.timeSlice) {
        KeyActions.keysPlayed(currentNote.notes);
        rollPosition ++;
        clearInterval(this.interval);

        var newInterval = (
          sthis.roll[rollPosition].timeSlice -
            this.roll[rollPosition -1].timeSlice);

        this.interval = setInterval(callback, newInterval);
      }
    }
  }.bind(this);

  this.interval = setInterval(callback, this.roll[rollPosition].timeSlice);
};

module.exports = Track;
