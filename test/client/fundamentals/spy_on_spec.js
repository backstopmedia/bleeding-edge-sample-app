/** @jsx React.DOM */

var React = require("react/addons");
var TestUtils = React.addons.TestUtils;

var jasmineReact = require("jasmine-react-helpers");

var HelloRandom = require('../../../client/testing_examples/hello_random');


describe("HelloRandom", function(){
  describe("spyOnClass", function(){
    it("should be able to spy on a function of a react class", function(){
      // We want to render the HelloRandom component and validate the output is correct.
      //   The important part to test is "is the render function outputting the correct text
      //   for a given author".
      //   In this example the author is random which makes it very difficult to test.  But even
      //   if your app doesn't have any "random" functions, the same strategy would be helpful if
      //   a function like getCurrentAuthor had complex behavior which should be tested independently
      //   of the render function.
      jasmineReact.spyOnClass(HelloRandom, "getRandomAuthor").andReturn({name: "Fake User", githubUsername: "fakeGithub"});

      var myHelloRandom = TestUtils.renderIntoDocument(<HelloRandom />);

      expect(myHelloRandom.getDOMNode().textContent).toBe("Fake User is an author and their github handle is fakeGithub.");
    });
  });

  // TODO: show spyForClass to show that a spy was called
});