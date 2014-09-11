/** @jsx React.DOM */

var React = require("react");

var UserImage = React.createClass({
  render: function(){
    var imgSrc = "http://example.com/users/" + this.props.slug + "/avatar.png";
    return (
      <img src={imgSrc} />
    );
  }
});

module.exports = UserImage;