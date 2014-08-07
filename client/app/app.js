/** @jsx React.DOM */
var React = require("react");

var App = React.createClass({
  componentDidMount:function(){
    //componentDidMount only gets called from client side - not on server rendering
    console.log("Mounted");
  },
  componentWillMount:function(){
    //componentWillMount is called from client side and server rendering
    console.log("Going to Mount");
  },
  render:function(){
    console.log("Render");
    return <div>Hi Co-Authors!</div>
  }
});

module.exports = App;