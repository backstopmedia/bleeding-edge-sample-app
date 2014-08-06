var React = require('react');
var App = require('./app/App.jsx');

// React's dev tools require a global called React to work
if (process.browser) {
  global.React = React;
}

React.renderComponent(App(), document.body);

