/** @jsx React.DOM */
var React = require("react");
var BasicSurveyItem = require('./survey_items/basic_survey_item');
var PropsMethodMixin = require("../../mixins/PropsMethodMixin");
var merge = require('lodash-node/modern/objects/merge');

var surveyItemTypes = {
  "basic": BasicSurveyItem
};

var SurveyItem = React.createClass({
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
    return surveyItemTypes[this.props.item.type];
  },
  renderSurveyItem: function() {
    var ItemComponentClass = this.getSurveyItemClass();
    var props = merge({}, this.props.item.meta, {
      onCompleted: this.handleItemCompleted
    });
    return new ItemComponentClass(props);
  },
  render:function() {
    return <div className="survey-item">
      {this.renderSurveyItem()}
    </div>
  }
});

module.exports = SurveyItem;