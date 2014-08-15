/** @jsx React.DOM */

var React = require("react");

var Divider = React.createClass({
  render: function () {
    var text;
    if (this.props.children) {
      text = <h2>{this.props.children}</h2>
    }

    return (
      <div className="divider clearfix">
        {text}<hr />
      </div>
    );
  }
});

module.exports = Divider;
