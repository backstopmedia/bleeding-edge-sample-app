/** @jsx React.DOM */

var React = require("react/addons");
var TestUtils = React.addons.TestUtils;

var HelloWorld = require('../../../client/testing_examples/hello_world');

describe("HelloWorld", function(){
  describe("renderIntoDocument", function(){

    it("should return the component which is mounted", function(){
      // notice how we don't have to specify a dom element to insert the
      //  component into (unlike React.renderComponent)?
      //  This is because it is put into a detached DOM node.
      var myComponent = TestUtils.renderIntoDocument(<HelloWorld />);

      // you can assert things on the component
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
      expect(mySubheading.getDOMNode().innerHTML).toBe("Hello World!");
    });

  });
});