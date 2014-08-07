/** @jsx React.DOM */

// verifying karma-browserify is working
var foo = require("react");

// verifying karma-browserify transform=reactify is working
var div = React.DOM.div;
var app = <div className="appClass">Hello, React!</div>;

// verifying karma-jasmine is working
describe("foo", function(){
  it("should bar", function(){
    expect(2).toBe(2);
  });
});