/** @jsx React.DOM */

var React = require("react");
var Promise = require('es6-promise').Promise;
var Router = require("react-router");
var SurveyStore = require("../flux/SurveyStore");
var SurveyActions = require("../flux/SurveyActions");
var SurveyTable = require("./survey_table");

var ListSurveys = React.createClass({
  mixins:[SurveyStore.makeChangeMixin("surveys")],
  componentDidMount: function(){
      SurveyActions.list();
  },

  render: function(){
    if(!this.state.surveys){
      return <div>Loading ... </div>
    }

    return (
        <div>
            <SurveyTable surveys={this.state.surveys} />
        </div>
    );
  }
});

module.exports = ListSurveys;
