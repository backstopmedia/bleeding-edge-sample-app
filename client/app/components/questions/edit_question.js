/** @jsx React.DOM */

var React = require('react');

var typeLabels = {
  yes_no: 'Yes / No',
  multiple_choice: 'Multiple Choice',
  essay: 'Essay'
};

var EditQuestion = React.createClass({
  propTypes: {
    type: React.PropTypes.string.isRequired,
    onRemove: React.PropTypes.func.isRequired
  },

  getTypeLabel: function () {
    return typeLabels[this.props.type];
  },

  render: function () {
    var className = 'edit-question well well-active ' + (this.props.className || "");

    return (
      <div className={className}>
        <div className='type'>
          {this.getTypeLabel()}
          <a className='remove' onClick={this.handleRemove}>
            <span className='glyphicon glyphicon-remove'/>
          </a>
        </div>
        <div>{this.props.children}</div>
      </div>
    );
  },

  handleRemove: function () {
    if (confirm('Are you sure you want to delete this ' + this.getTypeLabel())) {
      this.props.onRemove(this.props.key);
    }
  }
});

module.exports = EditQuestion;
