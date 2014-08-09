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
        <h1>{ this.props.name }</h1>
        <h2 className="subheading">Hello World!</h2>
      </div>
      );
  }
});

module.exports = HelloWorld;