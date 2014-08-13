/** @jsx React.DOM */

var React = require("react/addons");
var classSet = React.addons.classSet;

var NAV_ITEMS = {
  'All Surveys': '/',
  'Add Survey': '/add_survey'
};

var MainNav = React.createClass({
  propTypes: {
    currentUri: React.PropTypes.string.isRequired
  },

  render: function () {
    var currentUri = this.props.currentUri;

    var items = Object.keys(NAV_ITEMS).map(function (key, i) {
      var uri = NAV_ITEMS[key];
      var className = classSet({
        'active': uri === currentUri
      });

      return <li key={i} className={className}><a href={uri}>{key}</a></li>;
    });

    return (
      <nav className='main-nav' role='navigation'>
        <ul className='nav navbar-nav'>{items}</ul>
      </nav>
    );
  }
});

module.exports = MainNav;
