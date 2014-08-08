var React = require('react');

describe("foo", function(){
  it("should have an npm module loaded", function(){
    expect(React.createClass).toBeDefined();
  });
});