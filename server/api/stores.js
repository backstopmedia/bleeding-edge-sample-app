
var surveys = require('../data-store')("surveys");
var responses = require('../data-store')("surveyResponses");


module.exports = {
  surveys: surveys,
  responses: responses
};