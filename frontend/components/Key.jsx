var React = require('react');
var KeyStore = require('../stores/KeyStore');
var Note = require('../util/Note');
var TONES = require('../constants/Tones');

var Key = React.createClass({
  getInitialState: function () {
    return { isPressed: false };
  },

  componentDidMount: function () {
    var noteFreq = TONES[this.props.noteName];
    this.note = new Note(noteFreq);

    this.pressListenerToken = KeyStore.addListener(function () {
      if (!this.state.isPressed && KeyStore.find(this.props.noteName) > -1) {
        this.note.start();
        this.setState({ isPressed: true });
      } else if (this.state.isPressed &&
          KeyStore.find(this.props.noteName) < 0) {

        this.note.stop();
        this.setState({ isPressed: false });
      }
    }.bind(this));
  },

  componentWillUnmount: function () {
    KeyStore.remove(this.pressListenerToken);
  },

  render: function () {
    return (
      <div>
        {this.props.noteName}
      </div>
    );
  }
});

module.exports = Key;
