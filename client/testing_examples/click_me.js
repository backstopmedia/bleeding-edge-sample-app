/** @jsx React.DOM */

var React = require("react");

var ClickMe = React.createClass({
  getInitialState: function(){
    return { clicks: 0 };
  },
  headingClicked: function(){
    var clicks = this.state.clicks;
    this.setState({clicks: clicks + 1});
  },
  render: function(){
    return (
      <h1 onClick={this.headingClicked}>Click me counter: {this.state.clicks}</h1>
    );
  }
});

module.exports = ClickMe;