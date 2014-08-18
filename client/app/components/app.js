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
  }
});

var App = React.createClass({
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
