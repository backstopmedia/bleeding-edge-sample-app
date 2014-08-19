/** @jsx React.DOM */

var React = require("react");
var Link = require('react-router').Link;

var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var formatDate = function (timestamp) {
  var date = new Date(+timestamp);
  return MONTHS[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
};

function integerWithThousandsSeparator(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

var SurveyTableRow = React.createClass({
  propTypes: {
   survey: React.PropTypes.shape({
      id: React.PropTypes.string.isRequired,
      title: React.PropTypes.string.isRequired,
      description: React.PropTypes.string.isRequired,
      createdAt: React.PropTypes.number.isRequired,
      updatedAt: React.PropTypes.number.isRequired,
      // createdAt: React.PropTypes.instanceOf(Date).isRequired,
      // updatedAt: React.PropTypes.instanceOf(Date).isRequired,
      activity: React.PropTypes.array.isRequired
    }).isRequired
  },

  render: function() {
    var survey = this.props.survey;

    var total = survey.activity.reduce(function (memo, n) {
      return memo + n;
    }, 0);

    return (
      <tr>
        <td>
          <Link to='take' surveyId={survey.id} className='title'>
            {survey.title}
          </Link>
        </td>
        <td className='published'>{formatDate(survey.createdAt)}</td>
        <td className='modified'>{formatDate(survey.updatedAt)}</td>
        <td className='total'>{integerWithThousandsSeparator(total)}</td>
        <td className='activity'>...</td>
        <td>
          <Link to='edit' surveyId={survey.id} className="btn btn-link btn-editSurvey edit">
            <i className="glyphicon glyphicon-pencil"></i>
          </Link>
        </td>
      </tr>
    );
  }
});

module.exports = SurveyTableRow;
