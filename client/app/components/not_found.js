/** @jsx React.DOM */
var React = require('react');

var NotFound = React.createClass({
  render:function(){
    return <div>
      <h1>404</h1>
      <p>The Page you were looking for isn&apos;t here!</p>
    </div>;
  }
});

module.exports = NotFound;