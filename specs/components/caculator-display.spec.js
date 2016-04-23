var Chai = require('chai'),
    setupDom = require("../setup"),
    TestUtils = require("react-addons-test-utils"),
    React = require("react"),
    ReactDOM = require("react-dom"),
    CalculatorDisplay = require("../../src/components/calculator-display");

Chai.should();

describe("Calculator Display", function () {
    beforeEach(function () {
        setupDom();
        this.displayComponent = TestUtils.renderIntoDocument(<CalculatorDisplay value="0"/>, {});
    });

    it('should have the display component', function() {
        this.displayComponent.should.not.be.null;
    });

    it('should have the label', function() {
        var labelElement = TestUtils.findRenderedDOMComponentWithTag(this.displayComponent, "label");
        labelElement.should.not.be.null;
    });

    it("should have a value of \"0\"", function () {
        var labelElement = TestUtils.findRenderedDOMComponentWithTag(this.displayComponent, "label");
        labelElement.textContent.should.equal("0");
    });
});