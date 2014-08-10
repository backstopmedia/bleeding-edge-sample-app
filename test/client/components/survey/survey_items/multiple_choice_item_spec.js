/** @jsx React.DOM */

var React = require("react/addons");
var TestUtils = React.addons.TestUtils;
var MultipleChoiceItem = require("../../../../../client/components/survey/survey_items/multiple_choice_item");

describe("MultipleChoiceItem", function(){

  var elem = null;
  var callbacks = {};
  var choices = ['a', 'b', 'c'];

  beforeEach(function() {
    callbacks = {
      onCompleted: function() {}
    };
    spyOn(callbacks, "onCompleted");

    var view = new MultipleChoiceItem({
      onCompleted: callbacks.onCompleted,
      choices: choices
    });

    elem = TestUtils.renderIntoDocument(view);
  });

  it("should render", function() {
    expect(TestUtils.isCompositeComponent(elem)).toBe(true);
  });

  it("responds to user input", function() {
    var input = elem.getDOMNode().getElementsByTagName('input')[1];
    input.checked = "checked";
    TestUtils.Simulate.change(input);
    expect(callbacks.onCompleted).toHaveBeenCalledWith('b');
  });

});