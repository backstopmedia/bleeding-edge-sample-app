/** @jsx React.DOM */

var React = require("react/addons");
var TestUtils = React.addons.TestUtils;

var ClickMe = require('../../../client/testing_examples/click_me');

describe("ClickMe", function(){

  describe("Simulate.Click", function(){
    var subject;

    beforeEach(function(){
      subject = TestUtils.renderIntoDocument(<ClickMe />);
    });

    it("should increase the count", function(){
      expect(subject.getDOMNode().textContent).toBe("Click me counter: 0");
      expect(subject.state.clicks).toBe(0);

      // click on the <h1> dom node
      TestUtils.Simulate.click(subject.getDOMNode());

      expect(subject.getDOMNode().textContent).toBe("Click me counter: 1");
      expect(subject.state.clicks).toBe(1);
    });
  });

});
