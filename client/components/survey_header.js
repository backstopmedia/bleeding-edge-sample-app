/** @jsx React.DOM */

var React = require("react");

var SurveyHeader = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired
  },
  render: function () {
    return (
      <div className="survey-header clearfix">
        <h2>{this.props.text}</h2><hr />
      </div>
    );
  }
});

module.exports = SurveyHeader;
