/** @jsx React.DOM */
var React = require("react");
var uniqueId = require('lodash-node/modern/utilities/uniqueId');

var AnswerRadioInput = React.createClass({
  propTypes: {
    id: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
    checked: React.PropTypes.bool,
    onChanged: React.PropTypes.func.isRequired
  },
  getDefaultProps: function () {
    return {
      checked: false
    };
  },
  getInitialState: function () {
    return {
      checked: !!this.props.checked,
      id: this.props.id ? this.props.id : uniqueId('radio-')
    };
  },
  componentWillReceiveProps: function (nextProps) {
    if(nextProps.checked !== undefined) {
      this.setState({
        checked: nextProps.checked
      });
    }
  },
  handleChanged: function (e) {
    var checked = e.target.checked;
    this.setState({checked: checked});
    if(checked) {
      this.props.onChanged(this.props.value);
    }
  },
  render: function () {
    return (
      <div className="radio">
        <label htmlFor={this.state.id}>
          <input type="radio"
            name={this.props.name}
            id={this.state.id}
            checked={this.state.checked}
            onChange={this.handleChanged} />
          {this.props.label}
        </label>
      </div>
    );
  }
});

module.exports = AnswerRadioInput;
