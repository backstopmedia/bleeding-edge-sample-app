/** @jsx React.DOM */

var React = require('react');
var EditQuestion = require('./edit_question');

var EditMultipleChoiceQuestion = React.createClass({
  render: function () {
    return (
      <EditQuestion>MULTIPLECHOICE</EditQuestion>
    );
  }
});

module.exports = EditMultipleChoiceQuestion;
