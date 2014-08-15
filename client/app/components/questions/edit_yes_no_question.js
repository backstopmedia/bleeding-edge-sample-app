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
    var title = this.props.question.title || "";

    return (
      <EditQuestion title='Yes / No' onRemove={this.handleRemove}>
        <div><label>Enter question</label></div>
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

module.exports = EditYesNoQuestion;
