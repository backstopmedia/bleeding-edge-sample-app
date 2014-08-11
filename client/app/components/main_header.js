/** @jsx React.DOM */

var React = require("react");

var MainNav = require('./main_nav');

var MainHeader = React.createClass({
  propTypes: {
    currentUri: React.PropTypes.string.isRequired
  },

  render: function () {
    return (
      <header className='main-header navbar navbar-static-top container'>
        <a href='/' className='navbar-brand logo'>SurveyBuilder</a>
        <MainNav currentUri={this.props.currentUri} />
      </header>
    );
  }
});

module.exports = MainHeader;
