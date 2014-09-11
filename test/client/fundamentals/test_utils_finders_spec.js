/** @jsx React.DOM */

var React = require("react/addons");
var TestUtils = React.addons.TestUtils;

var NavBar = require('../../../client/testing_examples/nav_bar');
var CompanyLogo = require('../../../client/testing_examples/company_logo');

describe("TestUtils Finders", function(){

  var subject;

  beforeEach(function(){
    subject = TestUtils.renderIntoDocument(<NavBar />);
  });

  describe("scryRenderedDOMComponentsWithTag", function(){
    it("should find all components with that html tag", function(){
      var results = TestUtils.scryRenderedDOMComponentsWithTag(subject, "li");
      expect(results.length).toBe(5);
      expect(results[0].getDOMNode().innerHTML).toBe("Tab 1");
      expect(results[1].getDOMNode().innerHTML).toBe("Tab 2");
    });
  });

  describe("scryRenderedComponentsWithType", function(){

    // GOTCHA!
    // One would expect they could query for things like React.DOM.div and React.DOM.li,
    //   but you can't at the moment
    //   https://github.com/facebook/react/issues/1533
    it("should not find pure DOM components", function(){
      var results = TestUtils.scryRenderedComponentsWithType(subject, React.DOM.li);
      expect(results).toEqual([]);
    });

    it("should find composite DOM components", function(){
      var results = TestUtils.scryRenderedComponentsWithType(subject, CompanyLogo);
      expect(results.length).toBe(1);

      // even though we rendered (and searched for) a <CompanyLogo>, that is a composite
      //  component which actually is an "<img />" tag.
      expect(results[0].getDOMNode().tagName).toBe("IMG");
    });
  });

  describe("scryRenderedDOMComponentsWithClass", function(){
    it("should find all components with that class attribe", function(){
      var tabs = TestUtils.scryRenderedDOMComponentsWithClass(subject, "tab");
      var activeTabs = TestUtils.scryRenderedDOMComponentsWithClass(subject, "active");

      expect(tabs.length).toBe(5);
      expect(activeTabs.length).toBe(1);
    });
  });

});