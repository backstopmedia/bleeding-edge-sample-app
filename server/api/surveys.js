var router = require('express').Router({caseSensitive: true});
var assert = require('assert');
var surveys = require('../data-store')("surveys");

// get all surveys
router.get('/', function(req, res){
  res.json({surveys: surveys.getAll()});
});

// get one survey
router.get('/:id', function(req, res){
  assert.ok(req.params.id);
  assert.equal(req.params.id.length, 9);

  var survey = surveys.getById(req.params.id);
  if (survey) {
    res.status(200).json(survey);
  }
  else {
    res.status(404).json({message: "This survey does not exist"});
  }
});

// create a survey
router.post('/', function(req, res){
  var item = {};
  surveys.upsert(item);
  res.status(201).json(item);
});

// update a survey
router.put('/:id', function(req, res){
  assert.ok(req.params.id);
  assert.equal(req.params.id.length, 9);

  var item = req.body;
  item.id = req.params.id;
  if (surveys.getById(item.id)) {
    surveys.upsert(item);
    res.status(200).json({message: "Saved"});
  }
  else {
    res.status(404).json({message: "This survey does not exist"});
  }
});

// delete a survey
router.delete('/:id', function(req, res){
  try {
    surveys.removeById(req.params.id);
    res.send(204);
  }
  catch (e) {
    if (e.name === "DoesNotExist") {
      res.status(404).json({message: "Cannot delete a survey that doesn't exist"});
    }
    else {
      throw e;
    }
  }
});

// include the survey response subrouter
router.use('/:surveyId/responses', function(req, res, next){
    try {
      assert.ok(req.params.body);
      assert.ok(req.params.surveyId);
      assert.equal(req.params.surveyId.length, 9);
      next();
    }
    catch (e) {
      console.error({url: req.url, method: req.method, params: req.params, body: req.body});
      console.error(e);
      res.status(400).json({message: "The url must contain a valid (9 hex digit) surveyId"});
    }
}, require('./survey-responses.js'));

module.exports = router;
