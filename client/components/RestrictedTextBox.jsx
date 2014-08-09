/** @jsx React.DOM */
var React = require('react');

var RestrictedTextBox = React.createClass({
  render: function(){
    var validClassName = this.validate(this.props.value) ? 'has-success' : 'has-error';
    
    return (
      <div>
          <label>
            <div>{this.props.children}</div>
            <textarea 
              className="form-control"
              rows={Math.ceil(this.props.maxLength / 10)}
              value={this.props.value}
              onChange={this.props.onChange}
              className={"form-control " + validClassName} />
            {this.renderRemaining()}
          </label>

      </div>
    )
  },

  renderRemaining: function(){
    var restrictions = this.getRestrictions();
    var className = this.validate(this.props.value) ? 'text-success' : 'text-danger';
    
    if (restrictions.extraRequired > 0) {
      return (
        <div className={className}>
          need {restrictions.extraRequired} more {pluralize('character', restrictions.extraRequired)}
        </div>
      );
    }

    // valid amount
    else if (restrictions.extraAllowed >= 0) {
      return (
        <div className={className}>
          {restrictions.length}/{restrictions.maxLength} {pluralize('character', restrictions.length)}
        </div>
      );
    }

    // too many
    else if (restrictions.length > restrictions.maxLength) {
      return (
        <div className={className}>
          {restrictions.length}/{restrictions.maxLength} {pluralize('character', restrictions.length)}
        </div>
      );
    }
  },

  // derive some data from our props
  getRestrictions: function(value){
    var props = this.props;

    // if a .length prop is passed allow it to overried .value.length
    var length = props.length != null ? props.length : props.value.length;
    var minLength = props.minLength != null ? props.minLength : 0;
    var maxLength = props.maxLength != null ? props.maxLength : Infinity;

    return {
      length: length,
      maxLength: maxLength,
      minLength: minLength,
      extraAllowed: maxLength - length,
      extraRequired: minLength - length
    };
  },


  validate: function(value){
    var restrictions = this.getRestrictions(value);
    return restrictions.extraAllowed >= 0 && restrictions.extraRequired <= 0;
  }
});

module.exports = RestrictedTextBox;

function pluralize(str, n){
  return n === 1 ? str : str + 's';
}



