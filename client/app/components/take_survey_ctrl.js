/** @jsx React.DOM */
var React = require("react");
var TakeSurvey = require("./take_survey");
var merge = require('lodash-node/modern/objects/merge');
var SurveyActions = require("../flux/SurveyActions");
var SurveyStore = require("../flux/SurveyStore");

var TakeSurveyCtrl = React.createClass({
  mixins: [SurveyStore.makeChangeMixin("surveys")],
  propTypes: {
    survey_id: React.PropTypes.string
  },

  getDefaultProps: function () {
    return {
      survey_id: null
    };
  },

  handleSurveySave: function(results) {
    SurveyActions.record(results);
  },

  // get the survey from SurveyStore if it has it
  getSurvey: function(id) {
    if (!this.state.surveys) {
      return;
    }

    return this.state.surveys.find(function(item){
      return item.id === id;
    });
  },

  render: function () {
    var survey = this.getSurvey(this.props.survey_id);

    if (!survey) {
      return <div>Loading...</div>;
    }

    var props = merge({}, survey, {
      onSave: this.handleSurveySave
    });
    return TakeSurvey(props);
  },

  // fetch the survey from the server when the id changes
  requestSurvey: function(id) {
    if (id && !this.getSurvey(id)) {
      SurveyActions.get(id);
    }
  },

  componentDidMount: function(){
    this.requestSurvey(this.props.survey_id);
  },
  
  componentWillRecieveProps: function(nextProps){
    this.requestSurvey(nextProps.survey_id);
  }
});

module.exports = TakeSurveyCtrl;
