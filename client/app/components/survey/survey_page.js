/** @jsx React.DOM */
var React = require("react");
var Survey = require("./survey");

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
    return new Survey(this.props.data);
  }
});

module.exports = SurveyPage;