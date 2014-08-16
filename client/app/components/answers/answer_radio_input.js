/** @jsx React.DOM */
var React = require("react");
var PropsMethodMixin = require("../../../mixins/PropsMethodMixin");
var uniqueId = require('lodash-node/modern/utilities/uniqueId');

var AnswerRadioInput = React.createClass({
  mixins: [PropsMethodMixin],
  propTypes: {
    id: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
    checked: React.PropTypes.bool
  },
  getDefaultProps: function () {
    return {
      id: uniqueId('radio-'),
      checked: false
    };
  },
  getInitialState: function () {
    return {
      checked: !!this.props.checked
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
      this.callMethodOnProps('onChanged', this.props.value);
    }
  },
  render: function () {
    return (
      <div className="radio">
        <label>
          <input type="radio"
            name={this.props.name}
            id={this.props.id}
            value={this.props.value}
            checked={this.state.checked}
            onChange={this.handleChanged} />
          {this.props.label}
        </label>
      </div>
    );
  }
});

module.exports = AnswerRadioInput;
