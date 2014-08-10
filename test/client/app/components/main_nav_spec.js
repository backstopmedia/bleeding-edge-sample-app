/** @jsx React.DOM */

var React = require("react/addons");
var TestUtils = React.addons.TestUtils;

var MainNav = require('../../../../client/app/components/main_nav');

// verifying karma-jasmine is working
describe("components/main_nav", function () {
  var subject;

  beforeEach(function () {
    subject = TestUtils.renderIntoDocument(
      <MainNav currentUri='/add_survey' />
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

    describe('when currentUri is "/"', function () {
      beforeEach(function () {
        subject.setProps({ currentUri: '/' });
      });

      it('marks "All Surveys" as active', function () {
        var currentItem = TestUtils.findRenderedDOMComponentWithClass(
          subject,
          'active'
        );

        var currentItemLink = TestUtils.findRenderedDOMComponentWithTag(
          currentItem,
          'a'
        );

        expect( currentItemLink.props.href ).toBe( '/' );
        expect( currentItemLink.props.children ).toBe( 'All Surveys' );
      });
    });

    describe('when currentUri is "/add_survey"', function () {
      beforeEach(function () {
        subject.setProps({ currentUri: '/add_survey' });
      });

      it('marks "Add Survey" as active', function () {
        var currentItem = TestUtils.findRenderedDOMComponentWithClass(
          subject,
          'active'
        );

        var currentItemLink = TestUtils.findRenderedDOMComponentWithTag(
          currentItem,
          'a'
        );

        expect( currentItemLink.props.href ).toBe( '/add_survey' );
        expect( currentItemLink.props.children ).toBe( 'Add Survey' );
      });
    });
  });
});
