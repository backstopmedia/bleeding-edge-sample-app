/** @jsx React.DOM */

var React = require("react");

var IntervalMixin = require('./interval_mixin');

var Since2014 = React.createClass({
  mixins: [IntervalMixin],
  componentDidMount: function(){
    this.setInterval(this.forceUpdate.bind(this), 1000);
  },
  render: function() {
    var from = Number(new Date(2014, 0, 1));
    var to = Date.now();
    return (
      <div>{Math.round((to-from) / 1000)}</div>
      );
  }
});

module.exports = Since2014;