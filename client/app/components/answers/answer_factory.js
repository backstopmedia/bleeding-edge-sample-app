var Basic = require('./answer_basic_question');
var MultipleChoice = require('./answer_multiple_choice_question');

var answerTypeMap = {
  "basic": Basic,
  "multiple_choice": MultipleChoice
};

var getAnswerClass = function (type) {
  return answerTypeMap[type];
};

module.exports = {
  getAnswerClass: getAnswerClass
};