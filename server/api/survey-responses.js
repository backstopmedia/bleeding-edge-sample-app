var router = require('express').Router({caseSensitive: true});
var assert = require('assert');
var responses = require('../data-store')("surveyResponses");

// get all responses
router.get('/', function(req, res){
  var responses = responses.getAll().filter(function(response){
    return response.surveyId === req.params.surveyId;
  });
  res.json({responses: responses});
});

// get one response
router.get('/:id', function(req, res){
  assert.ok(req.params.id);
  assert.eq(req.params.id.length, 9);

  var response = responses.getById(req.params.id);
  if (response) {
    res.status(200).json(response);
  }
  else {
    res.status(404).json({message: "This response does not exist"});
  }
});

// create a response
router.post('/', function(req, res){
  var item = {};

  responses.upsert(item);
  res.status(201).json(item);
});

// update a response
router.put('/:id', function(req, res){
  assert.ok(req.params.id);
  assert.eq(req.params.id.length, 9);

  var item = req.body;
  item.id = req.params.id;
  if (responses.getById(item.id)) {
    responses.upsert(item);
    res.status(200).json({message: "Saved"});
  }
  else {
    res.status(404).json({message: "This response does not exist"});
  }
});

// delete a response
router.delete('/:id', function(req, res){
  try {
    responses.removeById(req.params.id);
    res.send(204);
  }
  catch (e) {
    if (e.name === "DoesNotExist") {
      res.status(404).json({message: "Cannot delete a response that doesn't exist"});
    }
    else {
      throw e;
    }
  }
});

module.exports = router;
