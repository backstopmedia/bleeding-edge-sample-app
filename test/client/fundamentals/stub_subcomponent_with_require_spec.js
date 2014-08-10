/** @jsx React.DOM */

var React = require("react/addons");
var TestUtils = React.addons.TestUtils;

var UserBadge = require('../../../client/testing_examples/user_badge');


describe("UserBadge", function(){
  describe("rewireify", function(){
    var userBadgeModule, fakeUserImageComponent, realUserImageComponent;

    beforeEach(function(){
      fakeUserImageComponent = React.createClass({
        render: function(){
          return (<div>Fake User Image!!</div>);
        }
      });

//      realUserImageComponent == userBadgeModule.__get__("UserImage");
//      userBadgeModule.__set__("UserImage", fakeUserImageComponent);
    });

    afterEach(function(){
//      userBadgeModule.__set__("UserImage", realUserImageComponent);
    });

    it("should foo", function(){
//      var userBadge = TestUtils.renderIntoDocument(<UserBadge />);
//      expect(userBadge.getDOMNode().innerHTML).toBe("jjj");
    });


  });
});