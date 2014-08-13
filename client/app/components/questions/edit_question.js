/** @jsx React.DOM */

var React = require('react');

var EditQuestion = React.createClass({
  render: function () {
    return (
      <div className='edit-question well well-active'>
        {this.props.children}
      </div>
    );
  }
});

module.exports = EditQuestion;
