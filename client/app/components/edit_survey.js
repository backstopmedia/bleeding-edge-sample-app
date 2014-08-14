/** @jsx React.DOM */

var React = require('react');
var SurveyEditor = require('./survey_editor');

var EditSurvey = React.createClass({
  render: function(){
    return <SurveyEditor/>;
  }
});

module.exports = EditSurvey;
