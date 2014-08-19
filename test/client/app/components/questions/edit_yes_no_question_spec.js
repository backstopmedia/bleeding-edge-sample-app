/** @jsx React.DOM */

var React = require("react/addons");
var TestUtils = React.addons.TestUtils;

var EditYesNoQuestion = require('../../../../../client/app/components/questions/edit_yes_no_question');

describe("components/questions/edit_yes_no_question", function (){
  var subject, onChangeSpy, onRemovSpy;

  beforeEach(function () {
    var question = {
      description: ''
    };

    onChangeSpy = jasmine.createSpy();
    onRemoveSpy = jasmine.createSpy();

    subject = TestUtils.renderIntoDocument(
      <EditYesNoQuestion key={1} question={question} onChange={onChangeSpy} onRemove={onRemoveSpy}/>
    );
  });

  describe('#render', function () {
    it('renders the a description input', function () {
      var descriptionNode = TestUtils.findRenderedDOMComponentWithClass(subject, 'description');
      expect( descriptionNode).not.toBe( null );
      expect( descriptionNode.tagName ).toBe( 'INPUT' );
    });
  });

  describe('#handleChange', function () {
    it('calls the onChange prop with the new question description', function () {
      subject.handleChange({ target: { value: 'new desc' } });
      expect( onChangeSpy ).toHaveBeenCalledWith(1, { description: 'new desc' });
    });
  });

  describe('#handleRemove', function () {
    it('calls the onRemove prop with key', function () {
      subject.handleRemove()
      expect( onRemoveSpy ).toHaveBeenCalledWith(1);
    });
  });
});
