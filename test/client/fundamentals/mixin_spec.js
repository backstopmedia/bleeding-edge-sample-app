/** @jsx React.DOM */

var React = require("react/addons");
var TestUtils = React.addons.TestUtils;
var jasmineReact = require("jasmine-react-helpers");

var FavoriteButton = require('../../../client/testing_examples/favorite_button');
var CustomLogger = require('../../../client/testing_examples/custom_logger');
var CustomLoggerSharedExamples = require('../shared_examples/custom_logger_shared_examples');

describe("CustomLogger", function(){

  describe("testing the mixin directly", function(){
    describe("componentWillMount", function(){
      it("should call 'log' with 'component will mount...'", function(){
        var logSpy = spyOn(CustomLogger, "log");

        CustomLogger.componentWillMount();

        expect(logSpy).toHaveBeenCalledWith("component will mount...")
      });
    });

    describe("log", function(){
      it("should call console.log with 'DEBUG: ' and then the passed in message", function(){
        spyOn(console, "log");

        CustomLogger.log("my cool message");

        expect(console.log).toHaveBeenCalledWith("DEBUG: my cool message");
      });
    });
  });

  describe("testing the mixin via a faux component", function(){
    var FauxComponent;

    beforeEach(function(){

      // Notice how the faux component is defined in the jasmine spec file.  This is
      //  intentional.  This expresses the intent that this react component exists
      //  for the sole purpose of testing this mixin.
      FauxComponent = React.createClass({
        mixins: [CustomLogger],
        render: function(){
          return (<div>Faux components are all the rage!</div>);
        },
        myFakeMethod: function(){
          this.log("fake method called...");
        }
      });
    });

    describe("componentWillMount", function(){
      it("should call 'log' with 'component will mount...'", function(){
        var logSpy = jasmineReact.spyOnClass(FauxComponent, "log");

        // render the component.  React will implicity call the componentWillMount
        //  callback (in the component and any of it's mixins).
        //  Note how we're not invoking the function directly because we are letting
        //  React handle that behavior.
        var subject = TestUtils.renderIntoDocument(<FauxComponent />);

        expect(logSpy).toHaveBeenCalledWith("component will mount...")
      });
    });

    describe("log", function(){
      it("should call console.log with 'DEBUG: ' and then the passed in message", function(){
        spyOn(console, "log");

        var subject = TestUtils.renderIntoDocument(<FauxComponent />);

        subject.log("calling log directly...");

        expect(console.log).toHaveBeenCalledWith("DEBUG: calling log directly...");
      });
    });

    describe("myFakeMethod", function(){
      it("should call log", function(){
        jasmineReact.spyOnClass(FauxComponent, "log");

        var subject = TestUtils.renderIntoDocument(<FauxComponent />);

        subject.myFakeMethod();

        // TODO: add a helper function for this called jasmineReact.spyForClass(FauxComponent, "log");
        expect(jasmineReact.classPrototype(FauxComponent).log).toHaveBeenCalledWith("fake method called...");
      });
    });
  });

});

describe("FavoriteButton", function(){

  describe("testing the mixin via a shared behavior spec", function(){
    // call a function which will execute the tests and pass in any
    //  data which is specific to the component (ie FavoriteButton)
    CustomLoggerSharedExamples({componentClass: FavoriteButton});
  });

});