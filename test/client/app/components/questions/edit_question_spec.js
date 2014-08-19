/** @jsx React.DOM */

var React = require("react/addons");
var TestUtils = React.addons.TestUtils;

var EditQuestion = require('../../../../../client/app/components/questions/edit_question');

describe("components/questions/edit_question", function (){
  var subject, onRemoveSpy;

  beforeEach(function () {
    onRemoveSpy = jasmine.createSpy();

    subject = TestUtils.renderIntoDocument(
      <EditQuestion type='essay' onRemove={onRemoveSpy}>
        <div className='child'/>
      </EditQuestion>
    );
  });

  describe('#render', function () {
    it('renders the type', function () {
      expect(
        TestUtils.findRenderedDOMComponentWithClass(subject, 'type')
      ).not.toBe( null );
    });

    it('renders the children', function () {
      expect(
        TestUtils.findRenderedDOMComponentWithClass(subject, 'child')
      ).not.toBe( null );
    });
  });

  describe('when clicking the remove icon', function () {
    beforeEach(function () {
      window.confirm = function () { return true; };
      TestUtils.Simulate.click(
        TestUtils.findRenderedDOMComponentWithClass(subject, 'remove')
      );
    });

    it('calls the onRemove prop', function () {
      expect( onRemoveSpy ).toHaveBeenCalled();
    });
  });
});
