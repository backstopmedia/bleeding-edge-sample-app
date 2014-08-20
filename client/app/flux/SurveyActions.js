var Dispatcher = require("./Dispatcher");
var SurveyConstants = require("./SurveyConstants");

var SurveyActions = {
  save: function(survey) {
    Dispatcher.dispatch({
      actionType: SurveyConstants.SAVE_SURVEY,
      survey: survey
    });
  },

  delete: function(id) {
    Dispatcher.dispatch({
      actionType: SurveyConstants.DELETE_SURVEY,
      id: id
    });
  },

  record: function(results) {
    Dispatcher.dispatch({
      actionType: SurveyConstants.RECORD_SURVEY,
      results: results
    });
  },

  list: function() {
    Dispatcher.dispatch({
      actionType: SurveyConstants.LIST_SURVEYS
    });
  },

  get: function(id) {
    Dispatcher.dispatch({
      actionType: SurveyConstants.GET_SURVEY,
      id: id
    });
  }
}

module.exports = SurveyActions;
