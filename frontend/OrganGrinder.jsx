var React = require('react'),
    ReactDOM = require('react-dom'),
    KeyListener = require('./util/KeyListener'),
    Key = require('./components/Key'),
    Organ = require('./components/Organ');

$(function () {
  ReactDOM.render(
    <Organ/>,
    document.getElementById('root')
  );
});
