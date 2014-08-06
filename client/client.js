/** @jsx React.DOM */

//client entry point - all components should be in separate files, 
//this will allow webpack to use hotmodule update later
//and allow for server side to include just the app

//Only the client side needs es5-shim so only include in bundle not app
require('es5-shim/es5-shim');
require('es5-shim/es5-sham');

var React = require('react');
var App = require('./app');

React.renderComponent(<App/>, document.body);

//allow react dev tools work
window.React = React;