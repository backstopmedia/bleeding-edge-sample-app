/** @jsx React.DOM */

var React = require('react');

var Divider = require('./divider');

var DraggableQuestions = require('./draggable_questions');
var SurveyForm = require('./survey_form');

var EditYesNoQuestion = require('./questions/edit_yes_no_question');
var EditMultipleChoiceQuestion = require('./questions/edit_multiple_choice_question');
var EditEssayQuestion = require('./questions/edit_essay_question');

var SUPPORTED_QUESTIONS = {
  yes_no:           EditYesNoQuestion,
  multiple_choice:  EditMultipleChoiceQuestion,
  essay:            EditEssayQuestion
};

var SurveyEditor = React.createClass({
  getInitialState: function () {
    return {
      dropZoneEntered: false,
      questions: []
    };
  },

  render: function () {
    var questions = this.state.questions.map(function (q, i) {
      return SUPPORTED_QUESTIONS[q.type]({
        key: i,
        onChange: this.handleQuestionChange,
        onRemove: this.handleQuestionRemove,
        question: q
      });
    }.bind(this));

    var dropZoneEntered = '';
    if (this.state.dropZoneEntered) {
      dropZoneEntered = 'drag-enter';
    }

    return (
      <div className='survey-editor'>
        <div className='row'>
          <aside className='sidebar col-md-3'>
            <h2>Modules</h2>
            <DraggableQuestions />
          </aside>

          <div className='survey-canvas col-md-9'>
            <SurveyForm />

            <Divider>Questions</Divider>
            {questions}

            <div
              className={'drop-zone well well-drop-zone ' + dropZoneEntered}
              onDragOver={this.handleDragOver}
              onDragEnter={this.handleDragEnter}
              onDragLeave={this.handleDragLeave}
              onDrop={this.handleDrop}
            >
              Drag and drop a module from the left
            </div>

            <div className='actions'>
              <button className="btn btn-lg btn-primary btn-save" onClick={this.handleSaveClicked}>Save</button>
            </div>
          </div>
        </div>
      </div>
    );
  },

  handleDragOver: function (ev) {
    // This allows handleDropZoneDrop to be called
    // https://code.google.com/p/chromium/issues/detail?id=168387
    ev.preventDefault();
  },

  handleDragEnter: function () {
    this.setState({dropZoneEntered: true});
  },

  handleDragLeave: function () {
    this.setState({dropZoneEntered: false});
  },

  handleDrop: function (ev) {
    var questionType = ev.dataTransfer.getData('questionType');
    var questions = this.state.questions;
    questions = questions.concat({ type: questionType });

    this.setState({
      questions: questions,
      dropZoneEntered: false
    });
  },

  handleQuestionChange: function (key, newQuestion) {
    var questions = this.state.questions;
    questions[key] = newQuestion;
    this.setState({ questions: questions });
  },

  handleQuestionRemove: function (key) {
    var questions = this.state.questions;
    questions.splice(key, 1);
    this.setState({ questions: questions });
  },

  handleSaveClicked: function (ev) {
    console.log('TODO: handle save of questions', this.state.questions);
  }

});

module.exports = SurveyEditor;
