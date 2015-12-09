var React = require('react'),
    TONES = require('../constants/Tones'),
    Key = require('./Key');

var Organ = React.createClass({
  render: function () {
    var keys = [];
    Object.keys(TONES).forEach(function (key){
      keys.push(
        <Key noteName={key} key={TONES[key]}/>
      );
    });
    return (
      <div>
        {keys}
      </div>
    );
  }
});

module.exports = Organ;
