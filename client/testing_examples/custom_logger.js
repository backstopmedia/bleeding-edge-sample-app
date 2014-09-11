var CustomLogger = {

  componentWillMount: function(){
    this.log("component will mount...")
  },

  log: function(message){
    console.log("DEBUG: " + message);
  }

};

module.exports = CustomLogger;