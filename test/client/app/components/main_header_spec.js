/** @jsx React.DOM */

var React = require("react/addons");
var TestUtils = React.addons.TestUtils;

var MainHeader = require('../../../../client/app/components/main_header');
var MainNav = require('../../../../client/app/components/main_nav');

// verifying karma-jasmine is working
describe("components/main_nav", function (){
  var subject;

  beforeEach(function () {
    subject = TestUtils.renderIntoDocument(
      <MainHeader />
    );
  });

  describe('#render', function () {
    it('has a logo', function () {
      var logo = TestUtils.findRenderedDOMComponentWithClass(subject, 'logo');
      expect( logo ).not.toBe( null );
    });

    it('has a <MainNav /> with currentUri', function () {
      var mainNav = TestUtils.findRenderedComponentWithType(subject, MainNav);

      expect( mainNav ).not.toBe( null );
    });
  });
});
