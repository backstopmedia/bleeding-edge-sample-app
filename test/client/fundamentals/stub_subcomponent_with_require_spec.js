/** @jsx React.DOM */

var React = require("react/addons");
var TestUtils = React.addons.TestUtils;

var UserBadge = require('../../../client/testing_examples/user_badge');

describe("UserBadge", function(){
  describe("rewireify", function(){
    var mockUserImageComponent, realUserImageComponent;

    beforeEach(function(){
      // When we want to unit test the UserBadge component, we don't want to implicitly test the UserImage component
      //   with it -- otherwise that turns into an integration test.  So we replace the UserImage component with a
      //   mock component (ie one with the minimum functionality needed)
      mockUserImageComponent = React.createClass({
        render: function(){
          return (<div className="fake">Fake User Image!!</div>);
        }
      });

      // TODO: wrap this in a rewire helper
      // we need to save off the real definition, so we can put it back when the test is complete
      //   NOTE: if we don't do this, all subsequent tests will be polluted!!
      realUserImageComponent = UserBadge.__get__("UserImage");
      UserBadge.__set__("UserImage", mockUserImageComponent);
    });

    // TODO: wrap this in a rewire helper
    afterEach(function(){
      UserBadge.__set__("UserImage", realUserImageComponent);
    });

    it("should use the mock component and not the real component", function(){
      var userBadge = TestUtils.renderIntoDocument(<UserBadge />);

      expect(TestUtils.findRenderedDOMComponentWithClass(userBadge, "fake").getDOMNode().innerHTML).toBe("Fake User Image!!");
    });
  });
});