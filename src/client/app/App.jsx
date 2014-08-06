/** @jsx React.DOM */
var React = require('react');
var Hello = require('../common/Hello.jsx');

var App = React.createClass({
  render: function(){
    return (
      <div>
        <Hello />
      </div>
    );
  }
});

module.exports = App;

