/** @jsx React.DOM */
var React = require("react");
var PropsMethodMixin = require("../../../mixins/PropsMethodMixin");
var uniqueId = require('lodash-node/modern/utilities/uniqueId');

/*

This is a sample of what a survey item might look like.
It's responsibility is rendering the ui for a given survey question
and calling the `onComplete` method with the user`s final value.

It takes as input the `meta` object from the survey data source.

The only requirement is that `this.props.onComplete` be 
called with the new value entered by the user. The rest 
is taken care of by the parent `SurveyItem` component.

*/

var AnswerBasicQuestion = React.createClass({
  mixins: [PropsMethodMixin],
  propTypes: {
    value: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string,
    onCompleted: React.PropTypes.func.isRequired
  },
  getInitialState: function() {
    return {
      id: uniqueId('basic-'),
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
  render:function() {
    var id = this.state.id;
    return <div>
      <div className="col-lg-6 col-md-8 col-sm-12">
        <div className="form-group">
          <label htmlFor={id}>{this.props.label}</label>
          <input  
            id={id}
            name={id}
            className="form-control"
            placeholder={this.props.placeholder} 
            value={this.state.value} 
            onChange={this.handleChanged}
            onBlur={this.handleCompleted}/>
        </div>
      </div>
    </div>
  }
});

module.exports = AnswerBasicQuestion;