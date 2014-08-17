/** @jsx React.DOM */

var React = require("react/addons");
var TestUtils = React.addons.TestUtils;
var AnswerEssayQuestion = require("../../../../../client/app/components/answers/answer_essay_question");

describe("AnswerEssayQuestion", function(){

  var elem = null;
  var onCompleted = null;

  beforeEach(function() {
    onCompleted = jasmine.createSpy();

    var view = AnswerEssayQuestion({
      label: 'test',
      value: null,
      onCompleted: onCompleted
    });

    elem = TestUtils.renderIntoDocument(view);
  });

  it("should render", function(){
    expect(TestUtils.isCompositeComponent(elem)).toBe(true);
    expect(TestUtils.scryRenderedDOMComponentsWithTag(elem, 'textarea').length).toBe(1);
  });

  it("responds to user input", function() {
    var textarea = TestUtils.findRenderedDOMComponentWithTag(elem, 'textarea');
    TestUtils.Simulate.blur(textarea);
    expect(onCompleted).toHaveBeenCalled();
  });

});
