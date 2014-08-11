/** @jsx React.DOM */

var React = require("react");

var Brand = React.createClass({
  render: function () {
    return (
      <div className="brand">
        <span className="brand-lead">Brought to you by</span>
        <br />
        <span className="brand-name">Survey Builder</span>
      </div>
    );
  }
});

module.exports = Brand;
