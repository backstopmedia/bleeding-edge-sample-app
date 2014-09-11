/** @jsx React.DOM */

var React = require("react/addons");
var TestUtils = React.addons.TestUtils;

var Since2014 = require ('../../../client/testing_examples/since_2014');
var IntervalMixinSharedExamples = require('../shared_examples/interval_mixin_shared_examples');

describe("Since2014", function(){
  describe("shared examples", function(){
    IntervalMixinSharedExamples({componentClass: Since2014});
  });
});