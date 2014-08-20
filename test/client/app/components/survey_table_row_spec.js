/** @jsx React.DOM */

var React = require("react/addons");
var TestUtils = React.addons.TestUtils;
var Link = require('react-router').Link;

var SurveyTableRow = require('../../../../client/app/components/survey_table_row');

describe("components/survey_table_row", function () {
  var subject;

  beforeEach(function () {
    var survey = {
      id: "287",
      title: "Game of Thrones",
      publishedDate: new Date(2014, 07, 1),
      modifiedDate: new Date(2014, 07, 6),
      activity: [1,2,3,4,5]
    };

    subject = TestUtils.renderIntoDocument(
      <SurveyTableRow survey={survey} />
    );
  });

  describe("#render", function () {
    it('renders the title as a Link to the take route', function () {
      var title = TestUtils.scryRenderedComponentsWithType(subject, Link)[0];
      expect( title.props.to ).toBe( 'take' );
      expect( title.props.surveyId ).toBe( "287" );
      expect( title.props.children ).toBe( "Game of Thrones" );
    });

    it('renders the publish date', function () {
      expect(
        TestUtils.findRenderedDOMComponentWithClass(subject, 'published').props.children
      ).toBe('August 1, 2014');
    });

    it('renders the modified date', function () {
      expect(
        TestUtils.findRenderedDOMComponentWithClass(subject, 'modified').props.children
      ).toBe('August 6, 2014');
    });

    it('renders the total', function () {
      expect(
        TestUtils.findRenderedDOMComponentWithClass(subject, 'total').props.children
      ).toBe('15');
    });

    it('renders a Link to the edit route', function () {
      var edit = TestUtils.scryRenderedComponentsWithType(subject, Link)[1];
      expect( edit.props.to ).toBe( 'edit' );
      expect( edit.props.surveyId ).toBe( "287" );
    });
  });

});
