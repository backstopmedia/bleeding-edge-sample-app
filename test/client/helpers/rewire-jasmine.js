var rewires = [];

var rewireJasmine = {
  rewire: function(mod, variableName, newVariableValue){
    // save off the real value, so we can revert back to it later
    var originalVariableValue = mod.__get__(variableName);

    // keep track of everything which was rewire'd through this helper
    rewires.push({
      mod: mod,
      variableName: variableName,
      originalVariableValue: originalVariableValue,
      newVariableValue: newVariableValue
    });

    // rewire the variable to the new value
    mod.__set__(variableName, newVariableValue);
  },

  unwireAll: function(){
    for (var i = 0; i < rewires.length; i++) {
      var mod = rewires[i].mod,
        variableName = rewires[i].variableName,
        originalVariableValue = rewires[i].originalVariableValue;

      // rewire the variable name back to the original value
      mod.__set__(variableName, originalVariableValue);
    }
  }
};

afterEach(function(){
  // unwire all modules we rewire'd
  rewireJasmine.unwireAll();

  // reset the array back to an empty state in preperation for the next spec
  rewires = [];
});

module.exports = rewireJasmine;