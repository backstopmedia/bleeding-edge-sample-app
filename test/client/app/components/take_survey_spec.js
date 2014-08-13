/** @jsx React.DOM */

var React = require("react/addons");
var TestUtils = React.addons.TestUtils;
var TakeSurvey = require("../../../../client/app/components/take_survey");

var renderElem = function(props) {
  var view = new TakeSurvey(props);
  return TestUtils.renderIntoDocument(view);
};

describe("TakeSurvey", function(){

  var elem = null;
  var props = {};

  describe("rendering", function() {
    beforeEach(function() {
      elem = renderElem(props);
    });

    it("should render", function(){
      expect(TestUtils.isCompositeComponent(elem)).toBe(true);
      expect(TestUtils.scryRenderedDOMComponentsWithTag(elem, 'div').length).toBe(1);
    });
  });

  describe("items", function() {
    beforeEach(function() {
      props.items = [{
        id: 1,
        type: "basic",
        meta: {
          value: "test"
        }
      }, {
        id: 2,
        type: "basic",
        meta: {
          value: "test"
        }
      }];
      elem = renderElem(props);
    });

    it("renders items", function() {
      expect(TestUtils.isCompositeComponent(elem)).toBe(true);
      var surveyItems = TestUtils.scryRenderedDOMComponentsWithClass(elem, 'survey-item');
      expect(surveyItems.length).toBe(2);
    });

  });
});