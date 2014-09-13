var request = require('supertest');
var cheerio = require('cheerio');
var app = require('../../server/server.js');
var expect = require('expect.js');

describe("serverside routing", function(){
  it("should render the AddSurvey component for the /add_survey path", function(done){

    request(app)
      .get('/add_survey')
      .expect(200)
      .end(function (err, res) {
        var doc = cheerio.load(res.text);
        expect(doc("title").html()).to.be("Add Survey to SurveyBuilder");
        expect(doc(".main-content .survey-editor").length).to.be(1);
        done();
      });
  });

  it("should render a 404 page for an invalid route", function(done){
    request(app)
      .get('/not-found-route')
      .expect(404)
      .end(function (err, res) {
        var doc = cheerio.load(res.text);
        expect(doc("body").html()).to.contain("The Page you were looking for isn&apos;t here!");
        done();
      });
  });
});