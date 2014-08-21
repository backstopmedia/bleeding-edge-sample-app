/** @jsx React.DOM */
var React = require("react");
var TakeSurvey = require("./take_survey");
// var mockData = require("../mock_survey_data");
var merge = require('lodash-node/modern/objects/merge');
var SurveyActions = require("../flux/SurveyActions");
var SurveyTable = require('./survey_table');
var SurveyStore = require("../flux/SurveyStore");
var Promise = require('es6-promise').Promise;
var AsyncState = require('react-router').AsyncState;

var TakeSurveyCtrl = React.createClass({
  mixins:[AsyncState],

  statics:{
    getInitialAsyncState: function(params, query, setState){
      return new Promise(function(resolve, reject){
        SurveyStore.getSurvey(params.surveyId, function (survey) {
          setState({survey: survey});
          resolve();
        });
      });
    }
  },

  updateState:function(){
    this.constructor.getInitialAsyncState(this.props.params, this.props.query, this.setState);
  },
  componentDidMount: function () {
    SurveyStore.addChangeListener(this.updateState);
  },
  componentWillUnmount: function () {
    SurveyStore.removeChangeListener(this.updateState);
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
