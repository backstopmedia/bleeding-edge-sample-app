// creates a mixin which updates this.state[key] to reflect the store's state
// this function should be placed on a store's prototype
var makeChangeMixin = function(key) {
  var store = this;
  var mixin = {};
  var prefix = "_" + this.constructor.name;
  var changeHandlerName = prefix + "_change_handler__";

  mixin.getInitialState = function() {
    return {};
  };

  mixin.componentDidMount = function() {
    store.addChangeListener(this[changeHandlerName]);
  };

  mixin.componentWillUnmount = function() {
      store.removeChangeListener(this[changeHandlerName]);
  };

  mixin[changeHandlerName] = function() {
    var update = {};
    update[key] = store.getState();
    this.setState(update);
  };

  return mixin;
};
module.exports = makeChangeMixin;