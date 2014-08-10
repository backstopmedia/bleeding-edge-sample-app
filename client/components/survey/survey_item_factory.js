var BasicSurveyItem = require('./survey_items/basic_survey_item');
var MultipleChoiceItem = require('./survey_items/multiple_choice_item');

var surveyItemTypeMap = {
  "basic": BasicSurveyItem,
  "multiple_choice": MultipleChoiceItem
};

var getSurveyItemClass = function (type) {
  return surveyItemTypeMap[type];
};

module.exports = {
  getSurveyItemClass: getSurveyItemClass
};