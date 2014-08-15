/** @jsx React.DOM */

var React = require("react");
var Link = require('react-router').Link;

var MainNav = React.createClass({
  render: function () {
    return (
      <nav className='main-nav' role='navigation'>
        <ul className='nav navbar-nav'>
          <li><Link to="list">All Surveys</Link></li>
          <li><Link to="add">Add Survey</Link></li>
        </ul>
      </nav>
    );
  }
});

module.exports = MainNav;
