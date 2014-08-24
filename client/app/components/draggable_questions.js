/** @jsx React.DOM */

var React = require('react');

var ModuleButton = require('./module_button');

var DraggableQuestions = React.createClass({
  render: function () {
    return (
      <ul className="modules list-unstyled">
        <li><ModuleButton text='Yes / No' questionType='yes_no'/></li>
        <li><ModuleButton text='Multiple choice' questionType='multiple_choice'/></li>
        <li><ModuleButton text='Essay' questionType='essay'/></li>
      </ul>
    );
  },

  shouldComponentUpdate: function () {
    return false;
  }
});

module.exports = DraggableQuestions;
