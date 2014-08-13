/** @jsx React.DOM */

var React = require("react");
var MainHeader = require('./main_header');

var App = React.createClass({
  render: function () {
    return (
      <div className='app'>
        <MainHeader/>
        <div className='main-content container'>
          {<this.props.activeRouteHandler />}
        </div>
      </div>
    );
  }
});

module.exports = App;
