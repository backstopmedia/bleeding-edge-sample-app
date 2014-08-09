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
        'current': uri === currentUri
      });

      return <a key={i} href={uri} className={className}>{key}</a>;
    });

    return (
      <nav className='main-nav'>
        {items}
      </nav>
    );
  }
});

module.exports = MainNav;
