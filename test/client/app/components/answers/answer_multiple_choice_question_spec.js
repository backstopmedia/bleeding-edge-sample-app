/** @jsx React.DOM */

var React = require("react/addons");
var TestUtils = React.addons.TestUtils;
var AnswerMultipleChoiceQuestion = require("../../../../../client/app/components/answers/answer_multiple_choice_question");

describe("AnswerMultipleChoiceQuestion", function(){

  var elem = null;
  var callbacks = {};
  var choices = ['a', 'b', 'c'];

  beforeEach(function() {
    callbacks = {
      onCompleted: function() {}
    };
    spyOn(callbacks, "onCompleted");

    var view = AnswerMultipleChoiceQuestion({
      onCompleted: callbacks.onCompleted,
      choices: choices
    });

    elem = TestUtils.renderIntoDocument(view);
  });

  it("should render", function() {
    expect(TestUtils.isCompositeComponent(elem)).toBe(true);
  });

  it("responds to user input", function() {
    var input = TestUtils.scryRenderedDOMComponentsWithTag(elem, 'input')[1].getDOMNode();
    input.checked = "checked";
    TestUtils.Simulate.change(input);
    expect(callbacks.onCompleted).toHaveBeenCalledWith('b');
  });

});
