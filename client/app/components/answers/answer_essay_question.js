/** @jsx React.DOM */
var React = require("react");
var PropsMethodMixin = require("../../../mixins/PropsMethodMixin");
var uniqueId = require('lodash-node/modern/utilities/uniqueId');

var AnswerEssayQuestion = React.createClass({
  mixins: [PropsMethodMixin],
  propTypes: {
    value: React.PropTypes.string,
    label: React.PropTypes.string.isRequired,
    onCompleted: React.PropTypes.func.isRequired
  },
  getDefaultProps: function() {
    return {
      value: ''
    };
  },
  handleComplete: function(event) {
    this.callMethodOnProps('onCompleted', event.target.value);
  },
  render: function() {
    return (
      <div className="form-group">
        <label className="survey-item-label">{this.props.label}</label>
        <div className="survey-item-content">
          <textarea className="form-control" rows="3" onBlur={this.handleComplete}/>
        </div>
      </div>
    );
  }
});

module.exports = AnswerEssayQuestion;
