var request = require('request');
var cheerio = require('cheerio');

describe("serverside routing", function(){
  it("should render the AddSurvey component for the /add_survey path", function(done){

    // TODO: boot the app on spec start
    request("http://localhost:8080/add_survey", function(error, response, body){
      var doc = cheerio.load(body);

      expect(doc("title").html()).toBe("Add Survey to SurveyBuilder");
      expect(doc(".main-content .add-survey").length).toBe(1);
      done();
    });
  });

  it("should render a 404 page for an invalid route", function(done){
    request("http://localhost:8080/invalid_route", function(error, response, body){
      var doc = cheerio.load(body);

      expect(doc("body").html()).toContain("The Page you were looking for isn&apos;t here!");
      done();
    });
  });
});