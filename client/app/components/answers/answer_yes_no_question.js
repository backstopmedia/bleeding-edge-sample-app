/** @jsx React.DOM */
var React = require("react");
var PropsMethodMixin = require("../../../mixins/PropsMethodMixin");
var AnswerRadioInput = require('./answer_radio_input');
var uniqueId = require('lodash-node/modern/utilities/uniqueId');

var AnswerYesNoQuestion = React.createClass({
  mixins: [PropsMethodMixin],
  propTypes: {
    value: React.PropTypes.string.isRequired,
    trueChoice: React.PropTypes.string,
    falseChoice: React.PropTypes.string,
    onCompleted: React.PropTypes.func.isRequired
  },
  getDefaultProps: function() {
    return {
      trueChoice: "Yes",
      falseChoice: "No"
    };
  },
  getInitialState: function() {
    return {
      id: uniqueId('bool-'),
      value: this.props.value
    };
  },
  handleChanged: function(value) {
    this.setState({value: value});
    this.callMethodOnProps('onCompleted', value);
  },
  render:function() {
    var isTrueChecked = (this.state.value === this.props.trueChoice);
    var isFalseChecked = (this.state.value === this.props.falseChoice);
    return (
      <div className="form-group">
        <label className="survey-item-label">{this.props.label}</label>
        <div className="survey-item-content">
          <AnswerRadioInput
            name={this.state.id}
            label={this.props.trueChoice}
            value={this.props.trueChoice}
            checked={isTrueChecked}
            onChanged={this.handleChanged} />
          <AnswerRadioInput
            name={this.state.id}
            label={this.props.falseChoice}
            value={this.props.falseChoice}
            checked={isFalseChecked}
            onChanged={this.handleChanged} />
        </div>
      </div>
    );
  }
});

module.exports = AnswerYesNoQuestion;
