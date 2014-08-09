/** @jsx React.DOM */
var React = require('react');

var Remaining = React.createClass({
  render: function(){
    var restrictions = this.props.restrictions;
    var className = this.props.valid ? 'text-success' : 'text-danger';
    
    var wording = <span>{restrictions.length}/{restrictions.maxLength} {pluralize('character', restrictions.length)}</span>;
    
    if (restrictions.extraRequired > 0) {
       wording = <span>need {restrictions.extraRequired} more {pluralize('character', restrictions.extraRequired)}</span>
    }

    return (
        <div className={className}>
          {wording}
        </div>
      );
  }
})

var RestrictedTextBox = React.createClass({
  render: function(){
    var validClassName = this.validate(this.props.value) ? 'has-success' : 'has-error';
    
    return (
      <div>
          <label style={{display: 'block'}} >
            <div>{this.props.children}</div>
            <textarea 
              className="form-control"
              rows={5}
              value={this.props.value}
              onChange={this.props.onChange}
              className={"form-control " + validClassName} />
            {<Remaining restrictions={this.getRestrictions()} valid={this.validate(this.props.value)}/>}
          </label>

      </div>
    )
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

function pluralize(str, n){
  return n === 1 ? str : str + 's';
}

module.exports = RestrictedTextBox;


