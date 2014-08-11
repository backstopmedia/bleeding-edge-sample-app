/** @jsx React.DOM */

var React = require("react");

var ModuleButton = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func.isRequired
  },
  render: function () {
    return (
      <button className="btn btn-lg btn-secondary">
        <span className="glyphicon glyphicon-move" onClick={this.props.onClick}></span> {this.props.text}
      </button>
    );
  }
});

module.exports = ModuleButton;
