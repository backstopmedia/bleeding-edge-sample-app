/** @jsx React.DOM */

var React = require('react');

var SurveyForm = React.createClass({
  render: function () {
    return (
      <div>
        <h2>Title</h2>
        <input className='title' type='text' />

        <h2>Introduction</h2>
        <textarea className='introduction' />
      </div>
    );
  }
});

module.exports = SurveyForm;
