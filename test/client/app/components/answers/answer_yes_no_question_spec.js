/** @jsx React.DOM */

var React = require("react/addons");
var TestUtils = React.addons.TestUtils;
var AnswerYesNoQuestion = require("../../../../../client/app/components/answers/answer_yes_no_question");

describe("AnswerYesNoQuestion", function(){

  var elem = null;
  var callbacks = {};

  beforeEach(function() {
    callbacks = {
      onCompleted: function() {}
    };
    spyOn(callbacks, "onCompleted");

    var view = new AnswerYesNoQuestion({
      value: null,
      onCompleted: callbacks.onCompleted
    });

    elem = TestUtils.renderIntoDocument(view);
  });

  it("should render", function(){
    expect(TestUtils.isCompositeComponent(elem)).toBe(true);
    expect(TestUtils.scryRenderedDOMComponentsWithTag(elem, 'input').length).toBe(2);
  });

  it("responds to user input", function() {
    elem.handleChanged("Yes");
    expect(callbacks.onCompleted).toHaveBeenCalledWith("Yes");
  });

});
