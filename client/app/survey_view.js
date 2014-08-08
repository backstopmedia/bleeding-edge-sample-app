/** @jsx React.DOM */
var React = require("react");
var SurveyItemView = require("./survey_item_view");

var SurveyView = React.createClass({
  getDefaultProps: function() {
    return {
      items: []
    };
  },
  handleItemCompleted: function(params) {
    console.log('handleItemCompleted', params);
    // TODO: merge new value into the survey data
  },
  handleClick: function() {
    console.debug('TODO: submit the survey');
  },
  render:function(){
    var items = this.props.items.map(function(item) {
      var props = {
        key: item.id,
        itemData: {
          id: item.id,
          name: item.name,
          label: item.label,
          value: item.value,
          placeholder: item.placeholder,
          onCompleted: this.handleItemCompleted
        }
      };
      var itemView = new SurveyItemView(props);
      return itemView;
    }.bind(this));
    return <div className="survey">
      <h1>{this.props.title}</h1>
      <p>{this.props.description}</p>
      {items}
      <button onClick={this.handleClick}>Submit</button>
    </div>
  }
});

module.exports = SurveyView;