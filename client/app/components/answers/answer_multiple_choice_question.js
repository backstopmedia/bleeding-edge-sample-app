/** @jsx React.DOM */
var React = require("react");
var PropsMethodMixin = require("../../../mixins/PropsMethodMixin");
var uniqueId = require('lodash-node/modern/utilities/uniqueId');

var Choice = React.createClass({
  mixins: [PropsMethodMixin],
  propTypes: {
    id: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
    checked: React.PropTypes.bool
  },
  getDefaultProps: function () {
    return {
      checked: false
    };
  },
  getInitialState: function () {
    return {
      checked: !!this.props.checked
    };
  },
  handleChanged: function (e) {
    var checked = e.target.checked
    this.setState({checked: checked});
    if(checked) {
      this.callMethodOnProps('onChanged', this.props.value);
    }
  },
  render: function () {
    return <div className="radio">
      <label>
        <input type="radio" 
          name={this.props.name} 
          id={this.props.id} 
          value={this.props.value} 
          checked={this.state.checked} 
          onChange={this.handleChanged} />
        {this.props.label}
      </label>
    </div>;
  }
});

var AnswerMultipleChoiceQuestion = React.createClass({
  mixins: [PropsMethodMixin],
  propTypes: {
    value: React.PropTypes.string,
    choices: React.PropTypes.array.isRequired,
    onCompleted: React.PropTypes.func.isRequired
  },
  getInitialState: function() {
    return {
      id: uniqueId('multiple-choice-'),
      value: this.props.value
    };
  },
  handleChanged: function(value) {
    this.setState({value: value});
    this.callMethodOnProps('onCompleted', value);
  },
  renderChoices: function() {
    var name = this.state.id;
    var items = [];
    this.props.choices.map(function (choice, i) {
      var elem = new Choice({
        id: "choice-" + i,
        name: name,
        label: choice,
        value: choice,
        checked: this.state.value === choice,
        onChanged: this.handleChanged
      });
      items.push(elem);
    }.bind(this));
    return items;
  },
  render: function() {
    var id = this.state.id;
    return <div className="form-group">
      <label className="survey-label" htmlFor={id}>{this.props.label}</label>
      <div className="survey-item-content">
          {this.renderChoices()}
      </div>
    </div>
  }
});

module.exports = AnswerMultipleChoiceQuestion;