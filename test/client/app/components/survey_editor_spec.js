/** @jsx React.DOM */

var React = require("react/addons");
var TestUtils = React.addons.TestUtils;

var SurveyEditor = require('../../../../client/app/components/survey_editor');

var EditQuestion = require('../../../../client/app/components/questions/edit_question');
var EditYesNoQuestion = require('../../../../client/app/components/questions/edit_yes_no_question');
var EditMultipleChoiceQuestion = require('../../../../client/app/components/questions/edit_multiple_choice_question');

var DraggableQuestions = require('../../../../client/app/components/draggable_questions');
var SurveyForm = require('../../../../client/app/components/survey_form');

describe("components/survey_editor", function (){
  var subject;

  beforeEach(function () {
    subject = TestUtils.renderIntoDocument(
      <SurveyEditor />
    );
  });

  describe('#render', function () {
    it('renders <DraggableQuestions />', function () {
      expect(
        TestUtils.findRenderedComponentWithType( subject, DraggableQuestions )
      ).not.toBe( null );
    });

    it('renders <SurveyForm />', function () {
      expect(
        TestUtils.findRenderedComponentWithType( subject, SurveyForm )
      ).not.toBe( null );
    });

    it('renders a drop zone', function () {
      expect(
        TestUtils.findRenderedDOMComponentWithClass( subject, 'drop-zone' )
      ).not.toBe( null );
    });

    it('renders as save button', function () {
      expect(
        TestUtils.findRenderedDOMComponentWithClass( subject, 'btn-save' )
      ).not.toBe( null );
    });

    describe('with questions added to the survey', function () {
      beforeEach(function () {
        subject.setState({
          questions: [
            {
              type: 'yes_no',
              question: 'Is Clark Kent, Superman?'
            },
            {
              type: 'multiple_choice',
              question: 'Which actor did not portray Batman?',
              choices: ['Christian Bale', 'Val Kilmer', 'Adam West', 'Tobey Maguire']
            }
          ]
        });
      });

      it('renders question modules', function () {
        expect(
          TestUtils.scryRenderedComponentsWithType(
            subject,
            EditQuestion
          ).length
        ).toBe( 2 );
      });
    });
  });

  describe('#handleFormChange', function () {
    it('updates the form field', function () {
      spyOn( subject, 'setState' );
      subject.handleFormChange({ title: 'Superhero Survey' });
      expect( subject.setState ).toHaveBeenCalledWith({
        title: 'Superhero Survey'
      });
    });
  });

  describe('#handleDragOver', function () {
    it('calls preventDefault to work around a chrome bug', function () {
      var ev = {
        preventDefault: jasmine.createSpy()
      };

      subject.handleDragOver(ev);

      expect( ev.preventDefault ).toHaveBeenCalled();
    });
  });

  describe('#handleDragEnter', function () {
    it('marks the drop zone as entered', function () {
      spyOn( subject, 'setState' );
      subject.handleDragEnter();
      expect( subject.setState ).toHaveBeenCalledWith({
        dropZoneEntered: true
      });
    });
  });

  describe('#handleDragLeave', function () {
    it('marks the drop zone as left', function () {
      spyOn( subject, 'setState' );
      subject.handleDragEnter();
      expect( subject.setState ).toHaveBeenCalledWith({
        dropZoneEntered: true
      });
    });
  });

  describe('#handleDrop', function () {
    it('it adds the questionType and marks drop zone as left', function () {
      spyOn( subject, 'setState' );

      subject.handleDrop({
        dataTransfer: {
          getData: function () {
            return 'yes_no';
          }
        }
      });

      expect( subject.setState ).toHaveBeenCalledWith({
        questions: [{ type: 'yes_no' }],
        dropZoneEntered: false
      });
    });
  });

  describe('#handleQuestionChange', function () {
    beforeEach(function () {
      subject.setState({
        questions: [
          { type: 'essay', description: 'who is superman?' }
        ]
      });

      spyOn( subject, 'setState' );
    });

    it('updates the question', function () {
      subject.handleQuestionChange(0, { type: 'essay', description: 'who is batman?' });
      expect( subject.setState ).toHaveBeenCalledWith({
        questions: [{ type: 'essay', description: 'who is batman?' }]
      });
    });
  });

  describe('#handeQuestionRemove', function () {
    beforeEach(function () {
      subject.setState({
        questions: [
          { type: 'essay', description: 'who is superman?' }
        ]
      });

      spyOn( subject, 'setState' );
    });

    it('removes the question', function () {
      subject.handleQuestionRemove(0);
      expect( subject.setState ).toHaveBeenCalledWith({
        questions: []
      });
    });
  });
});
