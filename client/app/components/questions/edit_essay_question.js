/** @jsx React.DOM */

var React = require('react');
var merge = require('lodash-node/modern/objects/merge');
var EditQuestion = require('./edit_question');

var EditEssayQuestion = React.createClass({

  propTypes: {
    key: React.PropTypes.number.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onRemove: React.PropTypes.func.isRequired,
    question: React.PropTypes.object.isRequired
  },

  render: function () {
    var title = this.props.question.title || "";

    return (
      <EditQuestion title='Essay' onRemove={this.handleRemove}>
        <label>Enter question</label>
        <input type='text' value={title} onChange={this.handleChange} />
      </EditQuestion>
    );
  },

  handleChange: function (ev) {
    var question = merge(this.props.question, { title: ev.target.value });
    this.props.onChange(this.props.key, question);
  },

  handleRemove: function () {
    this.props.onRemove(this.props.key);
  }
});

module.exports = EditEssayQuestion;
