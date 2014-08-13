/** @jsx React.DOM */

var React = require("react");

var CompanyLogo = require("./company_logo");

var NavBar = React.createClass({
  render: function(){
    return (
      <div>
        <CompanyLogo />
        <ul>
          <li className="tab active">Tab 1</li>
          <li className="tab">Tab 2</li>
          <li className="tab">Tab 3</li>
          <li className="tab">Tab 4</li>
          <li className="tab">Tab 5</li>
        </ul>
      </div>
      );
  }
});

module.exports = NavBar;