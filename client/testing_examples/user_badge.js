/** @jsx React.DOM */

var React = require("react");
var UserImage = require("./user_image");

var UserBadge = React.createClass({
  getDefaultProps: function(){
    return {
      friendlyName: "Billy McGee",
      userSlug: "billymcgee"
    };
  },
  render: function(){
    return (
      <div>
        <h1>{this.props.friendlyName}</h1>
        <UserImage slug={this.props.userSlug} />
      </div>
      );
  }
});

module.exports = UserBadge;