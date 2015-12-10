var React = require('react'),
    Track = require('../util/Track'),
    KeyStore = require('../stores/KeyStore');


var Recorder = React.createClass({
  getInitialState: function () {
    return {isRecording: false,
            track: new Track({name: "awesome track"})};
  },

  componentDidMount: function () {
    this.listenerToken = KeyStore.addListener(function () {
      if (this.state.isRecording) {
        var currentTrack = this.state.track;
        currentTrack.addNotes(KeyStore.all());
        this.setState({track: currentTrack});
      }
    }.bind(this));
  },

  startRecording: function () {
    console.log("recording");
    var currentTrack = this.state.track;
    currentTrack.startRecording();
    this.setState({
      track: currentTrack,
      isRecording: true
    });
  },

  stopRecording: function () {
    var currentTrack = this.state.track;
    currentTrack.stopRecording();
    this.setState({
      track: currentTrack,
      isRecording: false
    });
    console.log(this.state.track);
  },

  playRecording: function () {
    this.state.track.playRecording();
  },

  render: function () {


    return (
      <div>
        <button onClick={this.startRecording}>Start</button>
        <button onClick={this.stopRecording}>Stop</button>
        <button onClick={this.playRecording}>Play</button>
      </div>
    );
  }
});


module.exports = Recorder;
