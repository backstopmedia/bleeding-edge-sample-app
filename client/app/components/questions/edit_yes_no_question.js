/** @jsx React.DOM */

var React = require('react');
var EditQuestion = require('./edit_question');

var EditYesNoQuestion = React.createClass({
  render: function () {
    return (
      <EditQuestion>YES/NO</EditQuestion>
    );
  }
});

module.exports = EditYesNoQuestion;
