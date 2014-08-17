/** @jsx React.DOM */

var React = require("react");

var Divider = require("./divider");
var ModuleButton = require("./module_button");
var SurveyTable = require("./survey_table");
var Brand = require("./brand");

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
      return React.DOM[tagName]({}, "Header " + tagName);
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

  renderForms: function() {
    return (
      <div className="row">
        <div className="col-lg-6">

          <div className="survey">
            <h1>Survey Title</h1>
            <p>A description of the survey and what we want to know and why.</p>
            <div className="survey-item">
              <div className="form-group">
                <label className="survey-item-label">Email address</label>
                <div className="survey-item-content">
                  <input className="form-control" placeholder="Email Address" />
                </div>
              </div>
            </div>
            <div className="survey-item">
              <div className="form-group">
                <label className="survey-item-label">Select from a list</label>
                <div className="survey-item-content">
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" value="" />
                      Option one is this and that&mdash;be sure to include why it’s great
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" value="" />
                      Option one is this and that&mdash;be sure to include why it’s great
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" value="" />
                      Option one is this and that&mdash;be sure to include why it’s great
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="survey-item">
              <div className="form-group">
                <label className="survey-item-label">Which is your favorite</label>
                <div className="survey-item-content">
                  <div className="radio">
                    <label>
                      <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" />
                      Option one is this and that&mdash;be sure to include why it’s great
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />
                      Option two can be something else and selecting it will deselect option one
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="survey-item">
              <div className="form-group">
                <label className="survey-item-label">Comments</label>
                <div className="survey-item-content">
                  <textarea className="form-control" rows="5"></textarea>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  },

  render: function() {
    return (
      <div className="pattern-library">

        <Divider>Buttons</Divider>
        {this.renderButtons()}

        <Divider>Wells</Divider>
        {this.renderWells()}

        <Divider text="Drop Zone" />
        <div className="row">
          <div className="col-lg-6">
            <div className="well well-dropZone">Drag and drop a module from the left</div>
          </div>
        </div>

        <Divider>Table</Divider>
        <SurveyTable surveys={surveys} />

        <Divider>Form Styles</Divider>
        {this.renderForms()}

        <Divider>Brand</Divider>
        <Brand />

      </div>
    );
  }
});

module.exports = PatternLibrary;
