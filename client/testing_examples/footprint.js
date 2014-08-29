/** @jsx React.DOM */

var React = require("react");

var Footprint = React.createClass({
  getInitialState: function(){
    return { width: undefined };
  },
  componentDidMount: function(){
    var componentWidth = this.getDOMNode().offsetWidth;
    this.setState({width: componentWidth});
  },
  render: function(){
    var divStyle = {width: "100px"};
    return (<div style={divStyle}>component width: {this.state.width}</div>);
  }
});

module.exports = Footprint;