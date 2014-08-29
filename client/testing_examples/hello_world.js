/** @jsx React.DOM */

var React = require("react");

var HelloWorld = React.createClass({
  getDefaultProps: function(){
    return {
      name: "Bleeding Edge React.js Book"
    };
  },
  render: function(){
    return (
      <div>
        <h1>Hello World!</h1>
        <h2 className="subheading">{this.props.name}</h2>
      </div>
      );
  }
});

module.exports = HelloWorld;