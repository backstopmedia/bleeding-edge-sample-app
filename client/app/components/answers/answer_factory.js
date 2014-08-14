var BooleanQuestion = require('./answer_boolean_question');
var MultipleQuestion = require('./answer_multiple_choice_question');

var answerTypeMap = {
  "boolean": BooleanQuestion,
  "multiple_choice": MultipleQuestion
};

var getAnswerClass = function (type) {
  return answerTypeMap[type];
};

module.exports = {
  getAnswerClass: getAnswerClass
};
