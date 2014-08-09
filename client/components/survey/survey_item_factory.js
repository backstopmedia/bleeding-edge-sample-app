var BasicSurveyItem = require('./survey_items/basic_survey_item');

var surveyItemTypeMap = {
  "basic": BasicSurveyItem
};

var getSurveyItemClass = function (type) {
  return surveyItemTypeMap[type];
};

module.exports = {
  getSurveyItemClass: getSurveyItemClass
};