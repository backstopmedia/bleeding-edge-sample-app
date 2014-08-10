/** @jsx React.DOM */

var React = require("react");

var HelloTime = React.createClass({
  currentTime: function(){
    return this.getDate().getHours() + ":" + this.getDate().getMinutes();
  },
  getDate: function(){
    return new Date();
  },
  render: function(){
    return (
      <div>
        The current time is: {this.currentTime()}
      </div>
    );
  }
});

module.exports = HelloTime;