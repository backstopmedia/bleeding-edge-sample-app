/** @jsx React.DOM */

var React = require("react/addons");
var TestUtils = React.addons.TestUtils;

var SurveyTable = require('../../../../client/app/components/survey_table');
var SurveyTableRow = require('../../../../client/app/components/survey_table_row');

var data = [{
  id: "287",
  uri: "/surveys/287",
  editUri: "/surveys/287/edit",
  title: "Game of Thrones",
  publishedDate: new Date(2014, 07, 1),
  modifiedDate: new Date(2014, 07, 6),
  activity: []
}, {
  id: "345",
  uri: "/surveys/345",
  editUri: "/surveys/345/edit",
  title: "Favorite Harry Potter Character",
  publishedDate: new Date(2014, 06, 17),
  modifiedDate: new Date(2014, 07, 10),
  activity: []
}, {
  id: "378",
  uri: "/surveys/378",
  editUri: "/surveys/378/edit",
  title: "Do You Understand Net Neutrality?",
  publishedDate: new Date(2014, 06, 04),
  modifiedDate: new Date(2014, 06, 29),
  activity: []
}];

describe("components/survey_table", function () {
  var subject;

  beforeEach(function () {
    subject = TestUtils.renderIntoDocument(
      <SurveyTable surveys={data} />
    );
  });

  describe('#render', function () {
    it('renders 3 SurveyTableRow', function () {
      expect(
        TestUtils.scryRenderedComponentsWithType(
          subject,
          SurveyTableRow
        ).length
      ).toBe(3);
    });
  });

});
