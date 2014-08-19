/** @jsx React.DOM */

var React = require('react');
var merge = require('lodash-node/modern/objects/merge');
var EditQuestion = require('./edit_question');

var EditMultipleChoiceQuestion = React.createClass({

  propTypes: {
    key: React.PropTypes.number.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onRemove: React.PropTypes.func.isRequired,
    question: React.PropTypes.object.isRequired
  },

  render: function () {
    var question = this.props.question;

    var description = question.description || "";
    var options = question.options || [];

    options = options.map(function (option, i) {
      return (
        <li key={i} className='option'>
          <input
            type='text'
            className='small'
            value={option}
            onChange={this.handleOptionChange.bind(this, i)}
          />
          <a className='remove-option' onClick={this.handleOptionRemove.bind(this, i)}>
            <span className='glyphicon glyphicon-remove'/>
          </a>
        </li>
      );
    }.bind(this));

    return (
      <EditQuestion type='multiple_choice' className='edit-multiple-choice' onRemove={this.handleRemove}>
        <label>Description</label>
        <input type='text' className='description' value={description} onChange={this.handleDescriptionChange} />

        <label>Options</label>
        <ul className='options list-unstyled'>
          {options}
          <li className='add-option'>
            <a onClick={this.handleOptionAdd}>
              <span className='glyphicon glyphicon-plus'/>
              Add option
            </a>
          </li>
        </ul>
      </EditQuestion>
    );
  },

  handleDescriptionChange: function (ev) {
    var question = merge(this.props.question, { description: ev.target.value });
    this.props.onChange(this.props.key, question);
  },

  handleOptionAdd: function () {
    var question = this.props.question;
    var options = question.options || [];
    question.options = options.concat('');
    this.props.onChange(this.props.key, question);
  },

  handleOptionChange: function (key, ev) {
    var question = this.props.question;
    question.options[key] = ev.target.value;
    this.props.onChange(this.props.key, question);
  },

  handleOptionRemove: function (key) {
    var question = this.props.question;
    question.options.splice(key, 1);
    this.props.onChange(this.props.key, question);
  },

  handleRemove: function () {
    this.props.onRemove(this.props.key);
  }
});

module.exports = EditMultipleChoiceQuestion;
