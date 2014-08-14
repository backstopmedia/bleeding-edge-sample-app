/** @jsx React.DOM */

var React = require("react");
var MainHeader = require('./main_header');
var TakeSurvey = require("./take_survey");
var mockData = require("../mock_survey_data");

var App = React.createClass({
  render: function () {
    return (
      <div className='app'>
        <MainHeader/>
        <div className='main-content container'>
          {<this.props.activeRouteHandler />}
          {new TakeSurvey(mockData)}
        </div>
      </div>
    );
  }
});

module.exports = App;
