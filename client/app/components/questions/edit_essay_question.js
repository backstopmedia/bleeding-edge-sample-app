/** @jsx React.DOM */

var React = require('react');
var EditQuestion = require('./edit_question');

var EditEssayQuestion = React.createClass({
  render: function () {
    return (
      <EditQuestion>ESSAY</EditQuestion>
    );
  }
});

module.exports = EditEssayQuestion;
