/** @jsx React.DOM */
var React = require("react");
var TakeSurveyItem = require("./take_survey_item");
var merge = require('lodash-node/modern/objects/merge');

var TakeSurvey = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired,
    onSave: React.PropTypes.func.isRequired
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
    // We could dispatch to the store here for saving or propagate
    // the save up to the controller-view as shown here.
    this.props.onSave(this.state.results);
  },
  renderItems: function() {
    return this.props.items.map(function(item) {
      var props = merge({}, {
        key: item.id,
        item: item,
        onCompleted: this.handleItemCompleted
      });
      var itemView = TakeSurveyItem(props);
      return itemView;
    }.bind(this));
  },
  render:function(){
    return (
      <div className="survey">
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
        {this.renderItems()}
        <button className="btn btn-primary" onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
});

module.exports = TakeSurvey;
