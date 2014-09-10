/** @jsx React.DOM */

var React = require("react");
var SurveyTableRow = require('./survey_table_row');

var SurveyTable = React.createClass({

  propTypes: {
    surveys: React.PropTypes.array.isRequired
  },

  render: function () {
    var rows = this.props.surveys.map(function(survey, i) {
      return <SurveyTableRow key={i} survey={survey}/>;
    });

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
        <tbody>{rows}</tbody>
      </table>
    );
  }
});

module.exports = SurveyTable;
