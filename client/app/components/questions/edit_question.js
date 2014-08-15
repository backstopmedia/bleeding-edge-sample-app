/** @jsx React.DOM */

var React = require('react');

var EditQuestion = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    onRemove: React.PropTypes.func.isRequired
  },

  render: function () {
    return (
      <div className='edit-question well well-active'>
        <div className='title'>
          {this.props.title}
          <a className='remove' onClick={this.handleRemove}>
            <span className='glyphicon glyphicon-remove'/>
          </a>
        </div>
        <div>{this.props.children}</div>
      </div>
    );
  },

  handleRemove: function () {
    if (confirm('Are you sure you want to delete this ' + this.props.title)) {
      this.props.onRemove(this.props.key);
    }
  }
});

module.exports = EditQuestion;
