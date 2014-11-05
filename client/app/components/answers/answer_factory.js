var React = require('react');
var YesNoQuestion = React.createFactory(require('./answer_yes_no_question'));
var MultipleQuestion = React.createFactory(require('./answer_multiple_choice_question'));
var EssayQuestion = React.createFactory(require('./answer_essay_question'));

var answerTypeMap = {
  yes_no: YesNoQuestion,
  multiple_choice: MultipleQuestion,
  essay: EssayQuestion
};

var getAnswerClass = function (type) {
  if(answerTypeMap[type] !== undefined) {
    return answerTypeMap[type];
  }
};

module.exports = {
  getAnswerClass: getAnswerClass
};
