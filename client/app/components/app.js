/** @jsx React.DOM */

var React = require("react");

var MainHeader = require('./main_header');
var PatternLibrary = require('./pattern_library');

var App = React.createClass({
  componentDidMount: function () {
    //componentDidMount only gets called from client side - not on server rendering
    console.log("Mounted");
  },
  componentWillMount: function () {
    //componentWillMount is called from client side and server rendering
    console.log("Going to Mount");
  },
  render: function () {
    return (
      <div className='app'>
        <MainHeader currentUri='/'/>
        <div className='main-content container-fluid'>
          {this.props.children}
          <PatternLibrary />
        </div>
      </div>
    );
  }
});

module.exports = App;
