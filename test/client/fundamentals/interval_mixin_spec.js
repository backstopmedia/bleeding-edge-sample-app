/** @jsx React.DOM */

var React = require("react/addons");
var TestUtils = React.addons.TestUtils;

var IntervalMixin = require ('../../../client/testing_examples/interval_mixin');

describe("IntervalMixin", function(){
  describe("testing the mixin directly", function(){
    var subject;

    beforeEach(function(){
      subject = Object.create(IntervalMixin);

      // WARNING: DON'T DO THIS!! IT WILL CAUSE ISSUES
      //subject = IntervalMixin;
    });

    describe("componentDidMount", function(){
      it("should set an empty array called __intervals on the instance", function(){
        expect(subject.__intervals).toBeUndefined();

        subject.componentDidMount();

        expect(subject.__intervals).toEqual([]);
      });

      it("should set an empty array called __intervals on the instance (testing for test pollution)", function(){
        expect(subject.__intervals).toBeUndefined();

        subject.componentDidMount();

        expect(subject.__intervals).toEqual([]);
      });
    });

    describe("setInterval", function(){

      var fakeIntervalId;

      beforeEach(function(){

        fakeIntervalId = 555;

        spyOn(window, "setInterval").andReturn(fakeIntervalId);
        // NOTE: how we have to call componentDidMount before we call setInterval, so that
        //   this.__intervals is defined.  This is a drawback of calling functions directly on
        //   a mixin object
        subject.componentDidMount();
      });

      it("should call window.setInterval with the callback and the interval", function(){
        expect(window.setInterval.callCount).toBe(0);

        subject.setInterval(function(){}, 500);

        expect(window.setInterval.callCount).toBe(1);
      });

      it("should store the setInterval id in the this.__intervals array", function(){
        subject.setInterval(function(){}, 500);

        expect(subject.__intervals).toEqual([fakeIntervalId]);
      });

      it("should return the setInterval id", function(){
        var returnValue = subject.setInterval(function(){}, 500);

        expect(returnValue).toBe(fakeIntervalId);
      });
    });

    // TODO: write this
    describe("componentWillUnmount", function(){

    });
  });

  describe("testing the mixin via a faux component", function(){
    var FauxComponent;

    beforeEach(function(){

      // Notice how the faux component is defined in the jasmine spec file.  This is
      //  intentional.  This expresses the intent that this react component exists
      //  for the sole purpose of testing this mixin.
      FauxComponent = React.createClass({
        mixins: [IntervalMixin],
        render: function(){
          return (<div>Faux components are all the rage!</div>);
        },
        myFakeMethod: function(){
          this.setInterval(function(){}, 500);
        }
      });
    });

    describe("setInterval", function(){

      var subject;

      beforeEach(function(){
        spyOn(window, "setInterval");
        subject = TestUtils.renderIntoDocument(<FauxComponent />);
      });

      it("should call window.setInterval with the callback and the interval", function(){
        expect(window.setInterval.callCount).toBe(0);

        subject.myFakeMethod();

        expect(window.setInterval.callCount).toBe(1);
      });
    });

    describe("unmounting", function(){
      var subject;

      beforeEach(function(){
        spyOn(window, "setInterval").andReturn(555);
        spyOn(window, "clearInterval");
        subject = TestUtils.renderIntoDocument(<FauxComponent />);
        subject.myFakeMethod();
      });

      it("should clear any setTimeout's", function(){
        expect(window.clearInterval.callCount).toBe(0);
        React.unmountComponentAtNode(subject.getDOMNode().parentNode);
        expect(window.clearInterval.callCount).toBe(1);
      });
    });

  });
});