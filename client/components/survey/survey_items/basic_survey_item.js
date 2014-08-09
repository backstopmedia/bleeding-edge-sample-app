/** @jsx React.DOM */
var React = require("react");
var PropsMethodMixin = require("../../../mixins/PropsMethodMixin");

/*

This is a sample of what a survey item might look like.
It's responsibility is rendering the ui for a given survey question
and calling the `onComplete` method with the user`s final value.

It takes as input the `meta` object from the survey data source.

The only requirement is that `this.props.onComplete` be 
called with the new value entered by the user. The rest 
is taken care of by the parent `SurveyItem` component.

*/

var BasicSurveyItem = React.createClass({
  mixins: [PropsMethodMixin],
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
    this.callMethodOnProps('onCompleted', event.target.value);
  },
  render:function(){
    return <div>
      <label>{this.props.label}</label>
      <input  
        placeholder={this.props.placeholder} 
        value={this.state.value} 
        onChange={this.handleChanged}
        onBlur={this.handleCompleted}/>
    </div>
  }
});

module.exports = BasicSurveyItem;