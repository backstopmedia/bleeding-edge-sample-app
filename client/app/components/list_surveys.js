/** @jsx React.DOM */

var React = require("react");
var Promise = require('es6-promise').Promise;
var AsyncState = require('react-router').AsyncState;

var SurveyTable = require('./survey_table');

var ListSurveys = React.createClass({
  mixins:[AsyncState],

  statics:{
    getInitialAsyncState: function(path, query, setState){
      return new Promise(function(resolve, reject){
        setTimeout(function () {
          setState({
            surveys:[
              {
                id: 'asd123',
                uri: 'asd123',
                editUri: 'ad123',
                title: 'Superhero mashup',
                publishedDate: new Date(),
                modifiedDate: new Date(),
                activity: [121,32,54,12,546]
              }
            ]
          })
          resolve();
        }, 100);
      });
    }
  },

  render: function(){
    if(!this.state.surveys){
      return <div>Loading ... </div>
    }

    return (
      <div className='list-surveys'>
        <h1>Active Surveys</h1>
        <SurveyTable surveys={this.state.surveys}/>
      </div>
    );
  }
});

module.exports = ListSurveys;
