/** @jsx React.DOM */

var React = require("react");
var Promise = require('es6-promise').Promise;
var Router = require("react-router");
var AsyncState = Router.AsyncState;

var ListSurveys = React.createClass({
  mixins:[AsyncState],
  statics:{
    getInitialAsyncState: function(path, query, setState){
      return new Promise(function(resolve, reject){
        setTimeout(function(){
          setState({
            name:'nav'
          })
          resolve();
        }, 1000)
      });
    }
  },
  render: function(){
    if(!this.state.name){
      return <div>Loading ... </div>
    }
    return <div>List {this.state.name}</div>
  }
});

module.exports = ListSurveys;
