/** @jsx React.DOM */
var React = require("react");
var TakeSurvey = require("./take_survey");
var mockData = require("../mock_survey_data");
var merge = require('lodash-node/modern/objects/merge');
var SurveyActions = require("../flux/SurveyActions");

var TakeSurveyCtrl = React.createClass({
  propTypes: {
    survey_id: React.PropTypes.string
  },
  getDefaultProps: function () {
    return {
      survey_id: null
    };
  },
  getInitialState: function () {
    return {
      survey: mockData
    };
  },
  handleSurveySave: function(results) {
    SurveyActions.record(results);
  },
  render:function () {
    var props = merge({}, this.state.survey, {
      onSave: this.handleSurveySave
    });
    return TakeSurvey(props);
  }
});

module.exports = TakeSurveyCtrl;
