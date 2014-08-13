/** @jsx React.DOM */

var React = require("react/addons");
var TestUtils = React.addons.TestUtils;
var TakeSurveyItem = require("../../../../client/app/components/take_survey_item");

var renderElem = function(props) {
  var view = new TakeSurveyItem(props);
  return TestUtils.renderIntoDocument(view);
};

describe("Survey", function(){

  var elem = null;
  var props = {
    item: {
      type: "basic",
      meta: {
        value: "test"
      }
    }
  };

  describe("rendering", function() {
    beforeEach(function() {
      elem = renderElem(props);
    });

    it("should render", function(){
      expect(TestUtils.isCompositeComponent(elem)).toBe(true);
      var found = TestUtils.findRenderedDOMComponentWithClass(elem, 'survey-item');
      expect(found).toNotBe(null);
    });
  });

  describe("user input", function() {

    var callbacks = {};
    var props = {};
    var id = "123";

    beforeEach(function() {
      callbacks = {
        onCompleted: function() {}
      };
      spyOn(callbacks, "onCompleted");

      props.onCompleted = callbacks.onCompleted;
      props.item = {
        id: id,
        type: "basic",
        meta: {
          value: "test"
        }
      };

      elem = renderElem(props);
    });

    afterEach(function() {
      callbacks = {};
      props = {};
    });

    it("responds to user input", function() {
      var newValue = "test";
      var input = TestUtils.scryRenderedDOMComponentsWithTag(elem, 'input')[0].getDOMNode();
      input.value = newValue;
      TestUtils.Simulate.change(input);
      TestUtils.Simulate.blur(input);
      expect(callbacks.onCompleted).toHaveBeenCalledWith(jasmine.objectContaining({
        id: id,
        value: newValue
      }));
    });
  });
});