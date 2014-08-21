var EventEmitter = require("event-emitter");
var CHANGE_EVENT = "changeEvent";

var request = require('superagent');

var currentHost = "";
if(typeof window == "undefined"){
  currentHost = 'http://127.0.0.1:' + (process.env.PORT || 8080);
}

var SurveyStore = function() {
  this.emitter = new EventEmitter();
};

// Basic event handling functions

SurveyStore.prototype.emitChange = function() {
  this.emitter.emit(CHANGE_EVENT);
};

SurveyStore.prototype.addChangeListener = function(callback) {
    this.emitter.on(CHANGE_EVENT, callback);
};

SurveyStore.prototype.removeChangeListener = function(callback) {
  this.emitter.off(CHANGE_EVENT, callback);
};



// Survey-specific methods
SurveyStore.prototype.saveSurvey = function(survey) {
  console.debug("TODO: fire XHR to persist survey, then invoke this.emitChange() after the XHR has completed.");

  this.emitChange();
}

SurveyStore.prototype.deleteSurvey = function(id) {
  console.debug("TODO: delete survey", id);

  this.emitChange();
}

SurveyStore.prototype.recordSurvey = function(results) {
  console.debug("TODO: record the survey results", results);

  this.emitChange();
}

SurveyStore.prototype.listSurveys = function(callback) {
  request
    .get(currentHost+'/api/surveys')
    .end(function (res) {
      callback(res.body);
    });
}

SurveyStore.prototype.getSurvey = function(id) {
  console.debug("TODO: fetch survey by id from server via XHR");
  request
    .get(currentHost+'/api/surveys/' + id)
    .end(function (res) {
      callback(res.body);
    });
}

// The SurveyStore is a singleton, so export only the one instance.
module.exports = new SurveyStore();
