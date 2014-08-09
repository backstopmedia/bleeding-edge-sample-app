/** @jsx React.DOM */
var React = require("react");
var BasicSurveyItem = require('./survey_items/basic_survey_item');

var SurveyItem = React.createClass({
  getDefaultProps: function() {
    return {
      itemData: {
        onCompleted: function() {}
      }
    };
  },
  renderSurveyItem: function() {
    // TODO: based on the type of survey item requested, 
    // change the child view class
    var props = this.props.itemData;
    return new BasicSurveyItem(props);
  },
  render:function() {
    return <div className="survey-item">
      {this.renderSurveyItem()}
    </div>
  }
});

module.exports = SurveyItem;