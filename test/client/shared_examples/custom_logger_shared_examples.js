/** @jsx React.DOM */

var React = require("react/addons");
var TestUtils = React.addons.TestUtils;
var jasmineReact = require("jasmine-react-helpers");

var CustomLoggerSharedExamples = function(attributes){

  var ComponentClass;

  beforeEach(function(){
    ComponentClass = attributes.ComponentClass;
  });

  describe("componentWillMount", function(){
    it("should call 'log' with 'component will mount...'", function(){
      var logSpy = jasmineReact.spyOnClass(ComponentClass, "log");

      // render the component.  React will implicity call the componentWillMount
      //  callback (in the component and any of it's mixins).
      //  Note how we're not invoking the function directly because we are letting
      //  React handle that behavior.
      var subject = TestUtils.renderIntoDocument(<ComponentClass />);

      expect(logSpy).toHaveBeenCalledWith("component will mount...")
    });
  });

  describe("log", function(){
    it("should call console.log with 'DEBUG: ' and then the passed in message", function(){
      spyOn(console, "log");

      var subject = TestUtils.renderIntoDocument(<ComponentClass />);

      subject.log("calling log directly...");

      expect(console.log).toHaveBeenCalledWith("DEBUG: calling log directly...");
    });
  });
};

module.exports = CustomLoggerSharedExamples;