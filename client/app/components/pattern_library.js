/** @jsx React.DOM */

var React = require("react");

var SurveyHeader = require('../../components/survey_header');
var ModuleButton = require('../../components/module_button');

var PatternLibrary = React.createClass({

  renderHeaders: function() {
    return [1,2,3,4,5,6].map(function(i) {
      var tagName = 'h' + i;
      return new React.DOM[tagName]({}, 'Header ' + tagName);
    });
  },

  renderButtons: function() {
    return (
      <div>
        <button className="btn btn-primary">Save</button>

        <hr />

        <ModuleButton text="Multiple Choice" />
      </div>
    );
  },

  renderWells: function() {
    return (
      <div className="row">

        <div className="col-lg-6">
          <div className="well">A default well</div>
          <div className="well well-active">An active, or focused default well</div>
        </div>

        <div className="col-lg-6">
          <div className="well well-active">
            <button type="button" className="close">
              <i className="glyphicon glyphicon-remove"></i>
            </button>
            A closable well
          </div>
        </div>

      </div>
    );
  },
  render: function() {
    return (
      <div className='pattern-library'>

        <SurveyHeader text="Headers" />

        {this.renderHeaders()}

        <SurveyHeader text="Butons" />
        {this.renderButtons()}

        <SurveyHeader text="Wells" />
        {this.renderWells()}        

      </div>
    );
  }
});

module.exports = PatternLibrary;
