/** @jsx React.DOM */

var React = require("react");
var Link = require('react-router').Link;
var Sparkline = require('./sparkline');
var moment = require('moment');

var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var formatDate = function (date) {
  if (date) {
    return moment("2010-10-20 4:30 +0000", "YYYY-MM-DDTHH:mm:ssZ").format('YYYY-MM-DD');
  }
};

function integerWithThousandsSeparator(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

var SurveyTableRow = React.createClass({
  propTypes: {
   survey: React.PropTypes.shape({
      id: React.PropTypes.string.isRequired,
      title: React.PropTypes.string.isRequired,
      publishedAt: React.PropTypes.string,
      updatedAt: React.PropTypes.string.isRequired,
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
        <td className='published'>{formatDate(survey.publishedAt)}</td>
        <td className='modified'>{formatDate(survey.updatedAt)}</td>
        <td className='total'>{integerWithThousandsSeparator(total)}</td>
        <td className='activity'>
          <Sparkline points={survey.activity} />
        </td>
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
