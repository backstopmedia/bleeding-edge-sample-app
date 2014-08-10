/** @jsx React.DOM */

var React = require("react/addons");
var TestUtils = React.addons.TestUtils;

// TODO: jasmine-react is spewing warnings about jasmineContent div not being found
var jasmineReact = require("jasmine-react-helpers");

var HelloTime = require('../../../client/testing_examples/hello_time');


describe("HelloTime", function(){
  describe("spyOnClass", function(){
    xit("should be able to spy on a function of a react class", function(){
      // We want to render the HelloTime component and validate the output is correct.
      //   The important part to test is "is the date formatted correctly?", but the date
      //   is dynamic so we want to stub it out with a fake date.
      // Note: The fact that we are using a date is just as an illustrative example, we would use the
      //   same technique if one function in a react class is complex and we want to test that, but
      //   we don't want to implicity test all other complex functions it calls.

      var fakeDate = new Date("Sat Aug 09 2014 17:10:31 GMT-0700 (PDT)");
      jasmineReact.spyOnClass(HelloTime, "getDate").andReturn(fakeDate);

      var myHelloTime = TestUtils.renderIntoDocument(<HelloTime />);

      expect(myHelloTime.currentTime()).toBe("17:10");
      expect(myHelloTime.getDOMNode().textContent).toBe("The current time is: 17:10");
    });
  });
});