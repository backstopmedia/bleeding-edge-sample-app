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
  renderTable: function() {
    return (
      <table className="table survey-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Published On</th>
            <th>Last Active</th>
            <th>Completions</th>
            <th>Activity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><a href="#">Game of Thrones</a></td>
            <td>August 1, 2014</td>
            <td>August 6, 2014</td>
            <td>653</td>
            <td></td>
            <td>
              <button className="btn btn-link btn-editSurvey">
                <i className="glyphicon glyphicon-pencil"></i>
              </button>
              <button className="btn btn-link btn-deleteSurvey">
                <i className="glyphicon glyphicon-remove-circle"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td><a href="#">Favorite Harry Potter Character</a></td>
            <td>July 17, 2014</td>
            <td>August 10, 2014</td>
            <td>12,459</td>
            <td></td>
            <td>
              <button className="btn btn-link btn-editSurvey">
                <i className="glyphicon glyphicon-pencil"></i>
              </button>
              <button className="btn btn-link btn-deleteSurvey">
                <i className="glyphicon glyphicon-remove-circle"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td><a href="#">Do You Understand Net Neutrality?</a></td>
            <td>July 4, 2014</td>
            <td>July 29, 2014</td>
            <td>17,334</td>
            <td></td>
            <td>
              <button className="btn btn-link btn-editSurvey">
                <i className="glyphicon glyphicon-pencil"></i>
              </button>
              <button className="btn btn-link btn-deleteSurvey">
                <i className="glyphicon glyphicon-remove-circle"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
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
        {this.renderTable()}

      </div>
    );
  }
});

module.exports = PatternLibrary;
