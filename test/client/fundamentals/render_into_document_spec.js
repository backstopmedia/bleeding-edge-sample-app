/** @jsx React.DOM */

var React = require("react/addons");
var TestUtils = React.addons.TestUtils;

var HelloWorld = require('../../../client/testing_examples/hello_world');

describe("HelloWorld", function(){
  describe("renderIntoDocument", function(){

    it("should render the component", function(){
      // notice how we don't have to specify a dom element to insert the
      //  component into (unlike React.renderComponent)?
      //  This is because 'renderIntoDocument' renders into a detached DOM node.
      TestUtils.renderIntoDocument(<HelloWorld />);
    });

    it("should render the component and it's html into a dom node", function(){
      var myComponent = TestUtils.renderIntoDocument(<HelloWorld />);

      // you can validate on the html which was rendered
      expect(myComponent.getDOMNode().textContent).toContain("Hello World!");
    });

    it("should render the component and return the component as the return value", function(){
      var myComponent = TestUtils.renderIntoDocument(<HelloWorld />);

      // you can assert things on the component which was rendered
      expect(myComponent.props.name).toBe("Bleeding Edge React.js Book");
    });

    it("should not put the component into the DOM", function(){
      var myComponent = TestUtils.renderIntoDocument(<HelloWorld />);

      // notice how the width and height of the dom node are both 0
      //  if we actually put the component into the DOM, it'd have a width and height
      expect(myComponent.getDOMNode().offsetWidth).toBe(0);
      expect(myComponent.getDOMNode().offsetHeight).toBe(0);
    });

    it("can have finder methods run against it", function(){
      var myComponent = TestUtils.renderIntoDocument(<HelloWorld />);

      // we can then find other components within the component under test
      var mySubheading = TestUtils.findRenderedDOMComponentWithClass(myComponent, "subheading");

      // and we can assert things on those components
      expect(mySubheading.getDOMNode().innerHTML).toBe("Bleeding Edge React.js Book");
    });

    // This test is marked "pending" because it's an example of what not todo
    xit("should never pass if you try to assert on a whole dom node", function(){
      var myComponent = TestUtils.renderIntoDocument(<HelloWorld />);

      // DON'T DO THIS!! IT WON'T WORK
      expect(myComponent.getDOMNode().innerHTML).toContain("<h2 class='subheading'>Bleeding Edge React.js Book</h2>");
    });

  });
});