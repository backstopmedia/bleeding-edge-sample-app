/** @jsx React.DOM */

var React = require("react/addons");
var TestUtils = React.addons.TestUtils;
var SurveyTableRow = require("../../../../client/app/components/survey_table_row");
var jasmineReact = require("jasmine-react-helpers");

var mockRowData = {
  id: "287",
  uri: "/surveys/287",
  editUri: "/surveys/287/edit",
  title: "Game of Thrones",
  publishedDate: new Date(2014, 07, 1),
  modifiedDate: new Date(2014, 07, 6),
  total: 653,
  activity: []
};

describe("components/survey_table_row", function () {

  it("renders", function () {
    var elem = TestUtils.renderIntoDocument(new SurveyTableRow(mockRowData));
    expect(TestUtils.isCompositeComponent(elem)).toBe(true);
    expect(TestUtils.isCompositeComponentWithType(elem, SurveyTableRow)).toBe(true);
  });

  it("triggers the archive action", function () {
    jasmineReact.spyOnClass(SurveyTableRow, 'handleArchiveClick');

    var elem = TestUtils.renderIntoDocument(new SurveyTableRow(mockRowData));
    var anchor = TestUtils.findRenderedDOMComponentWithClass(elem, 'btn-deleteSurvey');

    TestUtils.Simulate.click(anchor.getDOMNode());
    expect(jasmineReact.classPrototype(SurveyTableRow).handleArchiveClick).toHaveBeenCalled();
  });

});
