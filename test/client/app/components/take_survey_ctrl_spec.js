/** @jsx React.DOM */

var React = require("react/addons");
var TestUtils = React.addons.TestUtils;
var TakeSurvey = require("../../../../client/app/components/take_survey");
var TakeSurveyCtrl = require("../../../../client/app/components/take_survey_ctrl");

var renderElem = function(props) {
  var view = TakeSurveyCtrl(props);
  return TestUtils.renderIntoDocument(view);
};

describe("TakeSurvey", function(){

  var elem = null;

  describe("rendering", function() {
    beforeEach(function() {
      elem = renderElem({
        survey_id: "123"
      });
    });

    it("should render", function(){
      expect(TestUtils.isCompositeComponent(elem)).toBe(true);
      expect(TestUtils.scryRenderedComponentsWithType(elem, TakeSurvey).length).toBe(1);
    });
  });

});
