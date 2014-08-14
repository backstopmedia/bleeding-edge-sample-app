/** @jsx React.DOM */
var React = require("react");
var PropsMethodMixin = require("../../../mixins/PropsMethodMixin");
var uniqueId = require('lodash-node/modern/utilities/uniqueId');
var AnswerRadioInput = require('./answer_radio_input');

var AnswerMultipleChoiceQuestion = React.createClass({
  mixins: [PropsMethodMixin],
  propTypes: {
    value: React.PropTypes.string,
    choices: React.PropTypes.array.isRequired,
    onCompleted: React.PropTypes.func.isRequired
  },
  getInitialState: function() {
    return {
      id: uniqueId('multiple-choice-'),
      value: this.props.value
    };
  },
  handleChanged: function(value) {
    this.setState({value: value});
    this.callMethodOnProps('onCompleted', value);
  },
  renderChoices: function() {
    var name = this.state.id;
    var items = {};
    this.props.choices.map(function (choice, i) {
      var elem = new AnswerRadioInput({
        id: "choice-" + i,
        name: name,
        label: choice,
        value: choice,
        checked: this.state.value === choice,
        onChanged: this.handleChanged
      });
      items[id] = elem;
    }.bind(this));
    return items;
  },
  render: function() {
    var id = this.state.id;
    return <div className="form-group">
      <label className="survey-item-label" htmlFor={id}>{this.props.label}</label>
      <div className="survey-item-content">
          {this.renderChoices()}
      </div>
    </div>
  }
});

module.exports = AnswerMultipleChoiceQuestion;
