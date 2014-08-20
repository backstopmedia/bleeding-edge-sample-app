/** @jsx React.DOM */

var React = require("react");

var ModuleButton = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired,
    questionType: React.PropTypes.string.isRequired
  },

  render: function () {
    return (
      <div draggable="true" className="btn btn-lg btn-secondary draggable" onDragStart={this.handleDragStart}>
        <span className="glyphicon glyphicon-move" onClick={this.props.onClick}/>
        {this.props.text}
      </div>
    );
  },

  handleDragStart: function (ev) {
    ev.dataTransfer.setData('questionType', this.props.questionType);
  }

});

module.exports = ModuleButton;
