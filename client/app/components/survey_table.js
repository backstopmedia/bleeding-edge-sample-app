/** @jsx React.DOM */

var React = require("react");
var TableRow = require("./survey_table_row");
var headers = ["Title", "Published On", "Last Active", "Completions", "Activity", ""];

var SurveyTable = React.createClass({
  propTypes: {
    surveys: React.PropTypes.array.isRequired
  },
  getDefaultProps: function() {
    return {
      surveys: []
    };
  },
  render: function () {

    var rows = this.props.surveys.map(function(item, i) {
      item.key = item.key || i;
      return TableRow(item);
    });

    headers.map(function(item) {
      return <th key={item}>{item}</th>;
    });

    return (
      <table className="table survey-table">
        <thead>
          <tr>{headers}</tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
});

module.exports = SurveyTable;
