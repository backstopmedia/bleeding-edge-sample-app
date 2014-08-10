/** @jsx React.DOM */

var React = require("react");

window.vanillaScriptApp = window.vanillaScriptApp || {};

window.vanillaScriptApp.UserImage = React.createClass({
  render: function(){
    var imgSrc = "http://example.com/users/" + this.props.slug + "/avatar.png";
    return (
      <img src={imgSrc} />
      );
  }
});