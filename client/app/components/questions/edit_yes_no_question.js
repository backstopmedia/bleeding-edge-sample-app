/** @jsx React.DOM */
/** @jsx React.DOM */

var React = require('react');
var merge = require('lodash-node/modern/objects/merge');
var EditQuestion = require('./edit_question');

var EditYesNoQuestion = React.createClass({

  propTypes: {
    key: React.PropTypes.number.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onRemove: React.PropTypes.func.isRequired,
    question: React.PropTypes.object.isRequired
  },

  render: function () {
    var description = this.props.question.description || "";

    return (
      <EditQuestion type='yes_no' onRemove={this.handleRemove}>
        <label>Description</label>
        <input type='text' className='description' value={description} onChange={this.handleChange} />
      </EditQuestion>
    );
  },

  handleChange: function (ev) {
    var question = merge(this.props.question, { description: ev.target.value });
    this.props.onChange(this.props.key, question);
  },

  handleRemove: function () {
    this.props.onRemove(this.props.key);
  }
});

module.exports = EditYesNoQuestion;
