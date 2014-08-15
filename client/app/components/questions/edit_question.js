/** @jsx React.DOM */

var React = require('react');

var EditQuestion = React.createClass({
  propTypes: {
    type: React.PropTypes.string.isRequired,
    onRemove: React.PropTypes.func.isRequired
  },

  render: function () {
    var className = 'edit-question well well-active ' + (this.props.className || "");

    return (
      <div className={className}>
        <div className='type'>
          {this.props.type}
          <a className='remove' onClick={this.handleRemove}>
            <span className='glyphicon glyphicon-remove'/>
          </a>
        </div>
        <div>{this.props.children}</div>
      </div>
    );
  },

  handleRemove: function () {
    if (confirm('Are you sure you want to delete this ' + this.props.type)) {
      this.props.onRemove(this.props.key);
    }
  }
});

module.exports = EditQuestion;
