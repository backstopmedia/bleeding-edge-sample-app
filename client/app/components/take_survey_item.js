/** @jsx React.DOM */
var React = require("react");
var PropsMethodMixin = require("../../mixins/PropsMethodMixin");
var AnswerFactory = require('./answers/answer_factory');
var merge = require('lodash-node/modern/objects/merge');

var TakeSurveyItem = React.createClass({
  mixins: [PropsMethodMixin],
  getDefaultProps: function() {
    return {
      onCompleted: function() {},
      item: {}
    };
  },
  handleItemCompleted: function(value) {
    this.callMethodOnProps('onCompleted', {
      id: this.props.item.id,
      value: value
    });
  },
  getSurveyItemClass: function () {
    return AnswerFactory.getAnswerClass(this.props.item.type);
  },
  renderSurveyItem: function() {
    var ItemComponentClass = this.getSurveyItemClass();
    var props = merge({}, this.props.item.meta, {
      onCompleted: this.handleItemCompleted
    });
    return ItemComponentClass(props);
  },
  render:function() {
    return <div className="survey-item">
      {this.renderSurveyItem()}
    </div>
  }
});

module.exports = TakeSurveyItem;
