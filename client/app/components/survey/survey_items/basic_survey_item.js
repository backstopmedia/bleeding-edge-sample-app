/** @jsx React.DOM */
var React = require("react");

var BasicSurveyItem = React.createClass({
  getDefaultProps: function() {
    return {
      value: null,
      placeholder: null,
      onCompleted: function() {}
    };
  },
  getInitialState: function() {
    return {
      value: this.props.value
    };
  },
  handleChanged: function(event) {
    this.setState({value: event.target.value});
  },
  handleCompleted: function(event) {
    this.setState({value: event.target.value});
    this.props.onCompleted({
      id: this.props.id,
      value: event.target.value
    });
  },
  render:function(){
    return <div>
      <label>{this.props.label}</label>
      <input 
        name={this.props.id} 
        placeholder={this.props.placeholder} 
        value={this.state.value} 
        onChange={this.handleChanged}
        onBlur={this.handleCompleted}/>
    </div>
  }
});

module.exports = BasicSurveyItem;