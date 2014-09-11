// Setup some casper.js config options
casper.options.verbose = true;
casper.options.logLevel = "debug";
casper.options.viewportSize = {width: 800, height: 600};

casper.test.begin('Adding a survey', 3, function suite(test) {

  // start the test by going to the homepage
  casper.start("http://localhost:3040/", function(){
    // assert the title of the homepage is "SurveyBuilder"
    test.assertTitle("SurveyBuilder", "the title for the homepage is correct");

    // click on the "Add Survey" link (which is the second in the nav bar)
    this.click(".navbar-nav li:nth-of-type(2) a");
  });

  casper.then(function(){
    // assert the /add_survey page looks as we suspect
    test.assertTitle("Add Survey to SurveyBuilder", "the title for the add survey page is correct");
    test.assertTextExists("Drag and drop a module from the left",
      "instructions for drag and drop questions exist on the add survey screen");
  });

  casper.run(function() {
    test.done();
  });
});