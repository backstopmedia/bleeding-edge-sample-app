var BooleanQuestion = require('./answer_boolean_question');
var MultipleQuestion = require('./answer_multiple_choice_question');
var EssayQuestion = require('./answer_essay_question');

var answerTypeMap = {
  "boolean": BooleanQuestion,
  "multiple_choice": MultipleQuestion,
  "essay": EssayQuestion
};

var getAnswerClass = function (type) {
  if(answerTypeMap[type] !== undefined) {
    return answerTypeMap[type];
  }
};

module.exports = {
  getAnswerClass: getAnswerClass
};
