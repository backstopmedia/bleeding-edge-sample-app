/** @jsx React.DOM */

var React = require("react");
var MainHeader = require('./main_header');
var SurveyStore = require("../flux/SurveyStore");
var Dispatcher = require("../flux/Dispatcher");
var SurveyConstants = require("../flux/SurveyConstants");

// Wire up the SurveyStore with the action dispatcher
Dispatcher.register(function(payload) {
  switch(payload.actionType) {
    case SurveyConstants.SAVE_SURVEY:
      SurveyStore.saveSurvey(payload.survey);
      break;

    case SurveyConstants.DELETE_SURVEY:
      SurveyStore.deleteSurvey(payload.id)
      break;

    case SurveyConstants.RECORD_SURVEY:
      SurveyStore.recordSurvey(payload.results);
      break;
  }
});

var App = React.createClass({
  handleChange: function() {
    SurveyStore.listSurveys(function(surveys) {
      console.debug("TODO: update app state based on surveys returned by SurveyStore.listSurveys (once it actually returns some)");
    });
  },

  componentDidMount: function() {
    SurveyStore.addChangeListener(this.handleChange);
  },

  componentWillUnmount: function() {
    SurveyStore.removeChangeListener(this.handleChange);
  },

  render: function () {
    return (
      <div className='app'>
        <MainHeader/>
        <div className='main-content container'>
          {<this.props.activeRouteHandler />}
        </div>
      </div>
    );
  }
});

module.exports = App;
