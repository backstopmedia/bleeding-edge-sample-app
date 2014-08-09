/** @jsx React.DOM */

var React = require("react");

var MainHeader = require('./main_header');

var SurveyEditor = require('./survey_editor');
var PatternLibrary = require('./pattern_library');
var mockSurveyData = require('../mock_survey_data');
var SurveyPage = require("./survey/survey_page");

var App = React.createClass({
  render: function () {
    return (
      <div className='app'>
        <MainHeader currentUri='/'/>
        <div className='main-content container-fluid'>
          <SurveyPage data={mockSurveyData} />
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = App;
