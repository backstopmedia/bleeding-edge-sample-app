/** @jsx React.DOM */

var React = require("react");

var MainHeader = require('./main_header');

var App = React.createClass({
  render: function () {
    return (
      <div className='app'>
        <MainHeader currentUri='/'/>
        <div className='main-content container-fluid'>
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = App;
