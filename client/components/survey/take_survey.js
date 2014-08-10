/** @jsx React.DOM */
var React = require("react");
var SurveyItem = require("./survey_item");
var merge = require('lodash-node/modern/objects/merge');

var TakeSurvey = React.createClass({
  getDefaultProps: function() {
    return {
      items: []
    };
  },
  getInitialState: function () {
    return {
      results: {}
    };
  },
  handleItemCompleted: function(params) {
    var results = this.state.results;
    results[params.id] = params.value;
    this.setState({
      results: results
    });
  },
  handleClick: function() {
    console.debug('TODO: submit the survey', this.state.results);
  },
  render:function(){
    var items = this.props.items.map(function(item) {
      var props = merge({}, {
        key: item.id,
        item: item,
        onCompleted: this.handleItemCompleted
      });
      var itemView = new SurveyItem(props);
      return itemView;
    }.bind(this));
    return <div className="survey">
      <h1>{this.props.title}</h1>
      <p>{this.props.description}</p>
      {items}
      <button className="btn btn-primary" onClick={this.handleClick}>Submit</button>
    </div>
  }
});

module.exports = TakeSurvey;