/** @jsx React.DOM */
var React = require("react");
var SurveyView = require("./survey_view");

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
    return new SurveyView(this.props.data);
  }
});

module.exports = SurveyPage;