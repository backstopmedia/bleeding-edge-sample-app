/** @jsx React.DOM */

var React = require("react");

var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var formatDate = function (date) {
  return MONTHS[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear(); 
};

function integerWithThousandsSeparator(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

var TableRow = React.createClass({
  propTypes: {
    id: React.PropTypes.string.isRequired,
    uri: React.PropTypes.string.isRequired,
    editUri: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    publishedDate: React.PropTypes.instanceOf(Date).isRequired,
    modifiedDate: React.PropTypes.instanceOf(Date).isRequired,
    total: React.PropTypes.number.isRequired,
    activity: React.PropTypes.array.isRequired
  },
  handleArchiveClick: function (event) {
    console.debug("TODO: dispatch the archive message to the store", this.props.id);
  },
  render: function() {
    return (
      <tr>
        <td><a href={this.props.uri}>{this.props.title}</a></td>
        <td>{formatDate(this.props.publishedDate)}</td>
        <td>{formatDate(this.props.modifiedDate)}</td>
        <td>{integerWithThousandsSeparator(this.props.total)}</td>
        <td></td>
        <td>
          <a href={this.props.editUri} className="btn btn-link btn-editSurvey">
            <i className="glyphicon glyphicon-pencil"></i>
          </a>
          <a onClick={this.handleArchiveClick} className="btn btn-link btn-deleteSurvey">
            <i className="glyphicon glyphicon-remove-circle"></i>
          </a>
        </td>
      </tr>
    );
  }
});

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
      return new TableRow(item);
    }); 

    var headers = ['Title', 'Published On', 'Last Active', 'Completions', 'Activity', ''].map(function(item) {
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
