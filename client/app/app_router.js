/** @jsx React.DOM */
var React = require("react");
var Promise = require('es6-promise').Promise;

var App = require('./components/app');
var NotFoundHandler = require('./components/not_found');



var Router = require("react-router");
var Routes = Router.Routes;
var Route = Router.Route;
var AsyncState = Router.AsyncState;
var NotFound = Router.NotFound;

var SurveyTake = 
SurveyEdit = 
SurveySummary = React.createClass({
  render: function(){
    return <div>Hi</div>
  }
});

var SurveyList = React.createClass({
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

var SurveyAdd = React.createClass({
  render: function(){
    return <div>Add</div>
  }
});

var app_router = <Routes location="history">
      <Route title="SurveyBuilder" handler={App}>
        <Route name="list" path="/" handler={SurveyList} />
        <Route title="Add Survey to SurveyBuilder" name="add" path="/add_survey" handler={SurveyAdd} />

        <Route name="edit" path="/surveys/:survey_id/edit" handler={SurveyEdit} />
        <Route name="take" path="/surveys/:survey_id" handler={SurveyTake} />
        <Route name="summary" path="/surveys/:survey_id/summary" handler={SurveySummary} />
        
        <NotFound title="Page Not Found" handler={NotFoundHandler}/>
      </Route>
    </Routes>

module.exports = app_router;