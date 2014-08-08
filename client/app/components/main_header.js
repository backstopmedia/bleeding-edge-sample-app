/** @jsx React.DOM */

var React = require("react");

var MainNav = require('./main_nav');

var MainHeader = React.createClass({
  propTypes: {
    currentUri: React.PropTypes.string.isRequired
  },

  render:function(){
    return (
      <div className='main-header'>
        <h1 className='logo'>SurveyBuilder</h1>
        <MainNav currentUri={this.props.currentUri} />
      </div>
    );
  }
});

module.exports = MainHeader;
