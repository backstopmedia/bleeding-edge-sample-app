var IntervalMixin = {
  setInterval: function(callback, interval){
    var token = setInterval(callback, interval);
    this.__intervals.push(token);
    return token;
  },
  componentDidMount: function() {
    this.__intervals = [];
  },
  componentWillUnmount: function() {
    for(var i = 0; i < this.__intervals.length; i++){
      clearInterval(this.__intervals[i]);
    }
  }
};

module.exports = IntervalMixin;