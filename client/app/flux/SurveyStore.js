var EventEmitter = require("event-emitter");
var request = require("superagent");
var makeChangeMixin = require("./makeChangeMixin");
var CHANGE_EVENT = "changeEvent";

var SurveyStore = function() {
  this.emitter = new EventEmitter();
  this.items = [];
};

// Basic event handling functions
SurveyStore.prototype.emitChange = function() {
  this.emitter.emit(CHANGE_EVENT);
};

SurveyStore.prototype.addChangeListener = function(callback) {
    this.emitter.on(CHANGE_EVENT, callback);
};

SurveyStore.prototype.removeChangeListener = function(callback) {
  this.emitter.removeListener(CHANGE_EVENT, callback);
};

// Survey-specific methods
SurveyStore.prototype.saveSurvey = function(survey) {
  console.debug("TODO: fire XHR to persist survey, then invoke this.emitChange() after the XHR has completed.");
  request.post('/api/surveys')
    .send(survey)
    .end(function(res){
      if (res.status === 201) {
        this.emitChange();
      }
      else {
        // TODO handle showing this error to the user
        console.error("saveSurvey failed with " + res.status, res.body);
      }
    }.bind(this));
};

SurveyStore.prototype.deleteSurvey = function(id) {
  console.debug("TODO: delete survey", id);

  this.emitChange();
};

SurveyStore.prototype.recordSurvey = function(results) {
  console.debug("TODO: record the survey results", results);

  this.emitChange();
};

SurveyStore.prototype.listSurveys = function() {
  request.get('/api/surveys')
    .accept('json')
    .send()
    .end(function(res){
      if (res.status === 200) {
        this.items = res.body.surveys;
        this.emitChange();
      }
      else {
        // TODO handle showing this error to the user
        console.error("listSurveys failed with " + res.status, res.body);
      }
    }.bind(this));
};

SurveyStore.prototype.getSurvey = function(id) {
  request.get('/api/surveys/' + encodeURIComponent(id))
    .accept('json')
    .end(function(res){
      if (res.status === 404) {
        // TODO handle showing this to the user
        console.warn("survey " + id + " is not found");
        return;
      }
      else if (res.status !== 200) {
        console.error("error fetching survey " + id + " with status " + res.status, res.body);
        return;
      }

      // see if we have an item with the same id
      var existingItemIndex = this.items.findIndex(function(item){
        return item.id === id;
      });

      // either replace the current item or add a new one
      if (existingItemIndex !== -1) {
        this.items[existingItemIndex] = res.body;
      }
      else {
        this.items.push(res.body);
      }
      this.emitChange();
    }.bind(this));
};

SurveyStore.prototype.getState = function() {
  return this.items;
};

SurveyStore.prototype.makeChangeMixin = makeChangeMixin;

// The SurveyStore is a singleton, so export only the one instance.
global.SurveyStore = module.exports = new SurveyStore();
