// Convenience methods for handling methods on a child component's props that
// might have been set by a parent component.
//
// For parent -> child communication React recommends [passing methods
// into the child via props](http://facebook.github.io/react/tips/communicate-between-components.html).
//
// Parents are not required to define prop methods, so this mixin facilitates
// calling a method if it exists, ignoring it otherwise.

var PropsMethodMixin = {
  hasMethodOnProps: function(methodName) {
    return (typeof this.props[methodName] === 'function');
  },

  callMethodOnProps: function(methodName, params) {
    if (this.hasMethodOnProps(methodName)) {
      params = Array.prototype.slice.call(arguments, 1);
      var method = this.props[methodName];
      return method.apply(this.props, params);
    }
  },

  applyMethodOnProps: function(methodName, paramsArray) {
    if (this.hasMethodOnProps(methodName)) {
      var method = this.props[methodName];
      return method.apply(this.props, paramsArray);
    }
  }
};

module.exports = PropsMethodMixin;