/** @jsx React.DOM */
var React = require("react");
var TakeSurvey = require("./take_survey");

var SurveyPage = React.createClass({
  getDefaultProps: function() {
    return {
      data: {}
    };
  },
  handleSubmit: function(params) {
    console.log('handleSubmit', params);
  },
  render:function(){
    return new TakeSurvey(this.props.data);
  }
});

module.exports = SurveyPage;