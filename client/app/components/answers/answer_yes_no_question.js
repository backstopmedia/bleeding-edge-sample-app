/** @jsx React.DOM */
var React = require("react");
var AnswerMultipleChoiceQuestion = require('./answer_multiple_choice_question');
var merge = require('lodash-node/modern/objects/merge');

var AnswerYesNoQuestion = React.createClass({
  propTypes: {
    value: React.PropTypes.string,
    onCompleted: React.PropTypes.func.isRequired
  },
  render:function() {
    var choices = ["Yes", "No"];
    var props = merge({}, this.props, {
      choices: choices
    });
    return AnswerMultipleChoiceQuestion(props);
  }
});

module.exports = AnswerYesNoQuestion;
