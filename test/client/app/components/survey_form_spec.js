/** @jsx React.DOM */

var React = require("react/addons");
var TestUtils = React.addons.TestUtils;

var SurveyForm = require('../../../../client/app/components/survey_form');

describe("components/survey_form", function (){
  var subject, onChangeSpy;

  beforeEach(function () {
    onChangeSpy = jasmine.createSpy();

    subject = TestUtils.renderIntoDocument(
      <SurveyForm
        title='Superhero survey'
        introduction='help us find out who is most awesome'
        onChange={onChangeSpy}
      />
    );
  });

  describe('#render', function () {
    it('renders the title input', function () {
      var titleInput = TestUtils.findRenderedDOMComponentWithClass(
        subject,
        'title'
      );
      expect( titleInput).not.toBe( null );
    });

    it('renders the introduction textarea', function () {
      var introductionTextarea = TestUtils.findRenderedDOMComponentWithClass(
        subject,
        'introduction'
      );
      expect( introductionTextarea).not.toBe( null );
    });
  });

  describe('#handleTitleChange', function () {
    it('calls the onChange prop', function () {
      subject.handleTitleChange({ target: { value: 'new title' }});
      expect( onChangeSpy ).toHaveBeenCalledWith({ title: 'new title' });
    });
  });

  describe('#handleIntroductionChange', function () {
    it('calls the onChange prop', function () {
      subject.handleIntroductionChange({ target: { value: 'new intro' }});
      expect( onChangeSpy ).toHaveBeenCalledWith({ introduction: 'new intro' });
    });
  });


});
