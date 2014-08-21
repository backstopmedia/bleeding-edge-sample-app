/** @jsx React.DOM */
var React = require("react");
var TakeSurvey = require("./take_survey");
// var mockData = require("../mock_survey_data");
var merge = require('lodash-node/modern/objects/merge');
var SurveyActions = require("../flux/SurveyActions");
var SurveyTable = require('./survey_table');
var SurveyStore = require("../flux/SurveyStore");

var TakeSurveyCtrl = React.createClass({
  mixins:[AsyncState],

  statics:{
    getInitialAsyncState: function(params, query, setState){
      console.log(arguments);
      return new Promise(function(resolve, reject){
        SurveyStore.getSurvey(params.surveyId, function (survey) {
          setState({survey: survey});
          resolve();
        });
      });
    }
  },
  updateAsyncState:function(){
    this.constructor.getInitialAsyncState(this.props.params, this.props.query, this.setState);
  },
  componentDidMount: function () {
    SurveyStore.addChangeListener(updateAsyncState);
  },
  componentWillUnmount: function () {
    SurveyStore.removeChangeListener(updateAsyncState);
  },


  propTypes: {
    survey_id: React.PropTypes.string
  },
  getDefaultProps: function () {
    return {
      survey_id: null
    };
  },
  getInitialState: function () {
    return null
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
