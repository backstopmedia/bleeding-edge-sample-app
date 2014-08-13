/** @jsx React.DOM */

var React = require("react/addons");
var TestUtils = React.addons.TestUtils;
var AnswerBasicQuestion = require("../../../../../client/app/components/answers/answer_basic_question");

describe("AnswerBasicQuestion", function(){

  var elem = null;
  var callbacks = {};

  beforeEach(function() {
    callbacks = {
      onCompleted: function() {}
    };
    spyOn(callbacks, "onCompleted");

    var view = new AnswerBasicQuestion({
      value: "test",
      onCompleted: callbacks.onCompleted
    });

    elem = TestUtils.renderIntoDocument(view);
  });

  it("should render", function(){
    expect(TestUtils.isCompositeComponent(elem)).toBe(true);
    expect(TestUtils.scryRenderedDOMComponentsWithTag(elem, 'div').length).toBe(2);
  });

  it("responds to user input", function() {
    var newValue = "test";
    var input = elem.getDOMNode().getElementsByTagName('input')[0];
    input.value = newValue;
    TestUtils.Simulate.change(input);
    TestUtils.Simulate.blur(input);
    expect(callbacks.onCompleted).toHaveBeenCalledWith(newValue);
  });

});