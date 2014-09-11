/** @jsx React.DOM */

var React = require("react/addons");
var TestUtils = React.addons.TestUtils;

var SetIntervalSharedExamples = function(attributes){

  var componentClass;

  beforeEach(function(){
    componentClass = attributes.componentClass;
  });

  describe("SetIntervalSharedExamples", function(){
    xdescribe("setInterval", function(){

      var subject, fakeFunction;

      beforeEach(function(){
        spyOn(window, "setInterval");
        subject = TestUtils.renderIntoDocument(<componentClass />);
        fakeFunction = function(){};
      });

      it("should call window.setInterval with the callback and the interval", function(){
        expect(window.setInterval).not.toHaveBeenCalledWith(fakeFunction, jasmine.any(Number));

        subject.setInterval(fakeFunction, 100);

        expect(window.setInterval).toHaveBeenCalledWith(fakeFunction, jasmine.any(Number));
      });
    });

    describe("unmounting", function(){
      var subject, fakeFunction;

      beforeEach(function(){
        fakeFunction = function(){};

        spyOn(window, "setInterval").andCallFake(function(func, interval){
          // we want to make sure we are only asserting against the setInterval calls
          //  which come from this spec (not the ones which come from our components
          //  which use this mixin).  So we force the setInterval calls for our "fakeFunction"
          //  to return a different id number.
          if(func === fakeFunction){
            return 444;
          } else {
            return 555;
          }
        });
        spyOn(window, "clearInterval");
        subject = TestUtils.renderIntoDocument(<componentClass />);

        subject.setInterval(fakeFunction, 100);
      });

      it("should clear any setTimeout's", function(){
        expect(window.clearInterval).not.toHaveBeenCalledWith(444);

        React.unmountComponentAtNode(subject.getDOMNode().parentNode);

        expect(window.clearInterval).toHaveBeenCalledWith(444);
      });
    });
  });
};

module.exports = SetIntervalSharedExamples;