/** @jsx React.DOM */

var React = require("react/addons");
var TestUtils = React.addons.TestUtils;
var SurveyItem = require("../../../../client/components/survey/survey_item");

var renderElem = function(props) {
  var view = new SurveyItem(props);
  return TestUtils.renderIntoDocument(view);
};

describe("Survey", function(){

  var elem = null;
  var props = {
    item: {
      type: "basic"
    }
  };

  describe("rendering", function() {
    beforeEach(function() {
      elem = renderElem(props);
    });

    it("should render", function(){
      expect(TestUtils.isCompositeComponent(elem)).toBe(true);
      expect(elem.getDOMNode().getAttribute('class')).toBe('survey-item');
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
        meta: {}
      };

      elem = renderElem(props);
    });

    afterEach(function() {
      callbacks = {};
      props = {};
    });

    it("responds to user input", function() {
      var newValue = "test";
      var input = elem.getDOMNode().getElementsByTagName('input')[0];
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