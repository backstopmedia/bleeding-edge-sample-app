/** @jsx React.DOM */

var React = require("react");

var CustomLogger = require("./custom_logger");

var FavoriteButton = React.createClass({
  mixins: [CustomLogger],
  render: function(){
    return (<div>Favorite!</div>);
  }
});

module.exports = FavoriteButton;