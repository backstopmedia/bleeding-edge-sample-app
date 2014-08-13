/** @jsx React.DOM */

var React = require("react/addons");
var TestUtils = React.addons.TestUtils;

var SurveyTable = require('../../../../client/app/components/survey_table');

var data = [{
  id: "287",
  uri: "/surveys/287",
  editUri: "/surveys/287/edit",
  title: "Game of Thrones",
  publishedDate: new Date(2014, 07, 1),
  modifiedDate: new Date(2014, 07, 6),
  total: 653,
  activity: []
}, {
  id: "345",
  uri: "/surveys/345",
  editUri: "/surveys/345/edit",
  title: "Favorite Harry Potter Character",
  publishedDate: new Date(2014, 06, 17),
  modifiedDate: new Date(2014, 07, 10),
  total: 12597,
  activity: []
}, {
  id: "378",
  uri: "/surveys/378",
  editUri: "/surveys/378/edit",
  title: "Do You Understand Net Neutrality?",
  publishedDate: new Date(2014, 06, 04),
  modifiedDate: new Date(2014, 06, 29),
  total: 17334,
  activity: []
}];

describe("components/survey_table", function () {

  var elem;

  beforeEach(function () {
    elem = TestUtils.renderIntoDocument(
      <SurveyTable surveys={data} />
    );
  });

  it("renders", function () {
    expect(TestUtils.isCompositeComponent(elem)).toBe(true);
    expect(TestUtils.isCompositeComponentWithType(elem, SurveyTable)).toBe(true);
  });

  it("renders list of surveys", function () {
    var li = TestUtils.scryRenderedDOMComponentsWithTag(elem, 'tr');
    expect(li.length).toBe(data.length + 1);
  });

});
