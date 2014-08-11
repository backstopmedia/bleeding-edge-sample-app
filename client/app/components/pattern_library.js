/** @jsx React.DOM */

var React = require("react");

var SurveyHeader = require("../../components/survey_header");
var ModuleButton = require("../../components/module_button");
var SurveyTable = require("../../components/survey_table");
var Brand = require("../../components/brand");

var surveys = [{
  id: "287",
  uri: "/surveys/287",
  editUri: "/surveys/287/edit",
  title: "Game of Thrones",
  publishedDate: new Date(2014, 07, 1),
  modifiedDate: new Date(2014, 07, 6),
  total: 653,
  activity: []
}, {
  id: "345",
  uri: "/surveys/345",
  editUri: "/surveys/345/edit",
  title: "Favorite Harry Potter Character",
  publishedDate: new Date(2014, 06, 17),
  modifiedDate: new Date(2014, 07, 10),
  total: 12597,
  activity: []
}, {
  id: "378",
  uri: "/surveys/378",
  editUri: "/surveys/378/edit",
  title: "Do You Understand Net Neutrality?",
  publishedDate: new Date(2014, 06, 04),
  modifiedDate: new Date(2014, 06, 29),
  total: 17334,
  activity: []
}];

var PatternLibrary = React.createClass({

  renderHeaders: function() {
    return [1,2,3,4,5,6].map(function(i) {
      var tagName = "h" + i;
      return new React.DOM[tagName]({}, "Header " + tagName);
    });
  },

  renderButtons: function() {
    return (
      <div>
        <button className="btn btn-lg btn-primary">Save</button>

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
          <div className="well">
            <button type="button" className="close">
              <i className="glyphicon glyphicon-remove"></i>
            </button>
            <div className="form-group">
              <label>Email address</label>
              <input className="form-control" placeholder="Enter text" />
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="well well-active">An active well</div>
          <div className="well well-active">
            <button type="button" className="close">
              <i className="glyphicon glyphicon-remove"></i>
            </button>
            <div className="form-group">
              <label>Email address</label>
              <input className="form-control" placeholder="Enter text" />
            </div>
          </div>
        </div>

      </div>
    );
  },
  render: function() {
    return (
      <div className="pattern-library">

        <SurveyHeader text="Buttons" />
        {this.renderButtons()}

        <SurveyHeader text="Wells" />
        {this.renderWells()}

        <SurveyHeader text="Drop Zone" />
        <div className="row">
          <div className="col-lg-6">
            <div className="well well-dropZone">Drag and drop a module from the left</div>
          </div>
        </div>

        <SurveyHeader text="Table" />
        <SurveyTable surveys={surveys} />

        <SurveyHeader text="Brand" />
        <Brand />

      </div>
    );
  }
});

module.exports = PatternLibrary;
