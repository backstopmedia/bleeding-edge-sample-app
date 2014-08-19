/** @jsx React.DOM */

var React = require("react/addons");
var TestUtils = React.addons.TestUtils;

var EditMultipleChoiceQuestion = require('../../../../../client/app/components/questions/edit_multiple_choice_question');

describe("components/questions/edit_essay_question", function (){
  var subject, onChangeSpy, onRemovSpy;

  beforeEach(function () {
    var question = {
      description: '',
      options: []
    };

    onChangeSpy = jasmine.createSpy();
    onRemoveSpy = jasmine.createSpy();

    subject = TestUtils.renderIntoDocument(
      <EditMultipleChoiceQuestion key={1} question={question} onChange={onChangeSpy} onRemove={onRemoveSpy}/>
    );
  });

  describe('#render', function () {
    it('renders the a description input', function () {
      var descriptionNode = TestUtils.findRenderedDOMComponentWithClass(subject, 'description');
      expect( descriptionNode).not.toBe( null );
      expect( descriptionNode.tagName ).toBe( 'INPUT' );
    });
  });

  describe('#handleDescriptoinChange', function () {
    it('calls the onChange prop with the new question description', function () {
      subject.handleDescriptionChange({ target: { value: 'new desc' } });
      expect( onChangeSpy ).toHaveBeenCalledWith(
        1,
        { description: 'new desc', options: []}
      );
    });
  });

  describe('#handleOptionAdd', function () {
    it('calls the onChange prop with an new empty option', function () {
      subject.handleOptionAdd();
      expect( onChangeSpy ).toHaveBeenCalledWith(
        1,
        { description: '', options: ['']}
      );
    });
  });

  describe('#handleOptionChange', function () {
    beforeEach(function () {
      subject.setProps({
        question: {
          description: 'who is superman?',
          options: ['Bruce wayne']
        }
      });
    });

    it('calls the onChange prop with an new empty option', function () {
      subject.handleOptionChange(0, { target: { value: 'Clark Kent' }} );
      expect( onChangeSpy ).toHaveBeenCalledWith(
        1,
        { description: 'who is superman?', options: ['Clark Kent']}
      );
    });
  });

  describe('#handleOptionRemove', function () {
    beforeEach(function () {
      subject.setProps({
        question: {
          description: 'who is superman?',
          options: ['Bruce wayne']
        }
      });
    });

    it('calls the onChange prop with an new empty option', function () {
      subject.handleOptionRemove(0);
      expect( onChangeSpy ).toHaveBeenCalledWith(
        1,
        { description: 'who is superman?', options: []}
      );
    });
  });

  describe('#handleRemove', function () {
    it('calls the onRemove prop with key', function () {
      subject.handleRemove()
      expect( onRemoveSpy ).toHaveBeenCalledWith(1);
    });
  });
});
