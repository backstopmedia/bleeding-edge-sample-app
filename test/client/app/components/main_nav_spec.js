/** @jsx React.DOM */

var React = require("react/addons");
var TestUtils = React.addons.TestUtils;

var MainNav = require('../../../../client/app/components/main_nav');

// verifying karma-jasmine is working
describe("components/main_nav", function () {
  var subject;

  beforeEach(function () {
    subject = TestUtils.renderIntoDocument(
      <MainNav />
    );
  });

  describe('#render', function () {
    it('has a "All Surveys" nav item', function () {
      var item = TestUtils.scryRenderedDOMComponentsWithTag(subject, 'a')[0];
      expect( item.props.href ).toBe( '/' );
      expect( item.props.children ).toBe( 'All Surveys' );
    });

    it('has a "Add Surveys" nav item', function () {
      var item = TestUtils.scryRenderedDOMComponentsWithTag(subject, 'a')[1];
      expect( item.props.href ).toBe( '/add_survey' );
      expect( item.props.children ).toBe( 'Add Survey' );
    });

  });
});
