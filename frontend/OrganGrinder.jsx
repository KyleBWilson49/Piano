var React = require('react'),
    ReactDOM = require('react-dom'),
    KeyListener = require('./util/KeyListener'),
    Key = require('./components/Key'),
    Organ = require('./components/Organ'),
    Recorder = require('./components/Recorder');

$(function () {
  ReactDOM.render(
    <div><Recorder/><br/><br/><br/><Organ/></div>,
    document.getElementById('root')
  );
});
