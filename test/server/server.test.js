var request = require('supertest');
var app = require('../../server/server.js');

// can be useful for debugging
// surveys.items is an array of items, surveys.itemsById is an object mapping ids to surveys
var surveys = require('../../server/data-store').instances.surveys;

describe("/api/surveys", function(){
  var state = {};

  it("gives a list of surveys", function(done){
    request(app)
      .get("/api/surveys")
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(function(res){
        var items = res.body.surveys;
        if (!items) {
          throw new Error("expected items to be an array, but got nothing");
        }

        state.initialSurveyCount = items.length;
        console.log("There are initially " + state.initialSurveyCount + " surveys")
      })
      .end(function(err){
        err ? done(err) : done();
      });
  });

  it("allows creation of a survey", function(done){
    request(app)
      .post("/api/surveys")
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(function(res){
        state.surveyId = res.body.id;

        if (state.surveyId.length !== 9) {
          throw new Error("Expeced id to be a valid id but got " + state.surveyId);
        }
      })
      .expect(201, done);
  });
  
  it("includes the new item in the list surveys call", function(done){
    request(app)
      .get("/api/surveys")
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect({
        surveys: 
          [{id: state.surveyId}]
        }
      )
      .expect(200, done);
  });
  
  it("allows fetching of the individual item", function(done){
    request(app)
      .get("/api/surveys/" + state.surveyId)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect({id: state.surveyId})
      .expect(200, done);
  });
  
  it("allows updating a survey", function(done){
    request(app)
      .put("/api/surveys/" + state.surveyId)
      .set('Accept', 'application/json')
      .send({title: "my title"})
      .expect('Content-Type', /json/)
      .expect({message: "Saved"})
      .expect(200, done);
  });

  it("disallows updating a nonexistant survey", function(done){
    request(app)
      .put("/api/surveys/" + "111111111")
      .set('Accept', 'application/json')
      .send({title: "this won't be set"})
      .expect('Content-Type', /json/)
      .expect({message: "This survey does not exist"})
      .expect(404, done);
  });

  it("the item is updated", function(done){
    request(app)
      .get("/api/surveys/" + state.surveyId)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect({id: state.surveyId, title: "my title"})
      .expect(200, done);
  });
});

