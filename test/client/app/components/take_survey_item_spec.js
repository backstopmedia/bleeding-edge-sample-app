/** @jsx React.DOM */

var React = require("react/addons");
var TestUtils = React.addons.TestUtils;
var TakeSurveyItem = require("../../../../client/app/components/take_survey_item");

var renderElem = function(props) {
  var view = TakeSurveyItem(props);
  return TestUtils.renderIntoDocument(view);
};

describe("Survey", function(){

  var elem = null;
  var props = {
    item: {
      type: "yes_no",
      meta: {
        label: "Label",
        value: null
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
        type: "yes_no",
        meta: {
          label: "label",
          value: null
        }
      };

      elem = renderElem(props);
    });

    afterEach(function() {
      callbacks = {};
      props = {};
    });

    it("responds to user input", function() {
      var value = "Yes";
      elem.handleItemCompleted(value);
      expect(callbacks.onCompleted).toHaveBeenCalledWith(jasmine.objectContaining({
        id: id,
        value: value
      }));
    });
  });
});
