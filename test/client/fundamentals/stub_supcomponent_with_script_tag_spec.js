/** @jsx React.DOM */

var React = require("react/addons");
var TestUtils = React.addons.TestUtils;


describe("window.vanillaScriptApp.UserBadge", function(){
  describe("global variables", function(){
    var mockUserImageComponent, realUserImageComponent;

    beforeEach(function(){
      // When we want to unit test the UserBadge component, we don't want to implicitly test the UserImage component
      //   with it -- otherwise that turns into an integration test.  So we replace the UserImage component with a
      //   mock component (ie one with the minimum functionality needed)
      mockUserImageComponent = React.createClass({
        render: function(){
          return (<div className="fake">Fake Vanilla User Image!!</div>);
        }
      });

      // we need to save off the real definition, so we can put it back when the test is complete
      //   NOTE: if we don't do this, all subsequent tests will be polluted!!
      realUserImageComponent = window.vanillaScriptApp.UserImage;
      window.vanillaScriptApp.UserImage = mockUserImageComponent;
    });

    afterEach(function(){
      window.vanillaScriptApp.UserImage = realUserImageComponent;
    });

    it("should use the mock component and not the real component", function(){
      var UserBadge = window.vanillaScriptApp.UserBadge;
      var userBadge = TestUtils.renderIntoDocument(<UserBadge />);

      expect(TestUtils.findRenderedDOMComponentWithClass(userBadge, "fake").getDOMNode().innerHTML).toBe("Fake Vanilla User Image!!");
    });
  });

  // TODO: build the same example using jasmineReact helper
});