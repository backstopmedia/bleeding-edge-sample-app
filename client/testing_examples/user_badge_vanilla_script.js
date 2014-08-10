/** @jsx React.DOM */

var React = require("react");

window.vanillaScriptApp = window.vanillaScriptApp || {};

window.vanillaScriptApp.UserBadge = React.createClass({
  getDefaultProps: function(){
    return {
      friendlyName: "Billy McGee",
      userSlug: "billymcgee"
    };
  },
  render: function(){
    var UserImage = window.vanillaScriptApp.UserImage;

    return (
      <div>
        <h1>{this.props.friendlyName}</h1>
        <UserImage slug={this.props.userSlug} />
      </div>
      );
  }
});