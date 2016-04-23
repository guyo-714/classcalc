var Chai = require('chai'),
    setupDom = require("../setup"),
    TestUtils = require("react-addons-test-utils"),
    React = require("react"),
    ReactDOM = require("react-dom"),
    CalculatorView = require("../../src/components/calculator-view"),
    CalculatorDisplay = require("../../src/components/calculator-display"),
    CalculatorButton = require("../../src/components/calculator-button");

Chai.should();

describe.only("Calculator View", function () {
    beforeEach("render and retrieve", function () {
        setupDom();

        var renderedComponent = TestUtils.renderIntoDocument(<CalculatorView/>, {});

        this.displayComponent = TestUtils.findRenderedComponentWithType(renderedComponent, CalculatorDisplay);
        var buttonComponent = TestUtils.findRenderedComponentWithType(renderedComponent, CalculatorButton);
        this.buttonElement = ReactDOM.findDOMNode(buttonComponent);
    });

    it("should have display element", function() {
        this.displayComponent.should.not.be.null;
    });

    it("should have buttonElement", function() {
        this.buttonElement.should.not.be.null;
    });

    it("buttonElement should have value 0", function() {
        this.buttonElement.value.should.equal("0");
    });

    it("should display 0 when the 0 button is clicked", function () {
        TestUtils.Simulate.click(this.buttonElement);
        var displayLabel = TestUtils.findRenderedDOMComponentWithTag(this.displayComponent, "label");
        console.log(displayLabel);
        displayLabel.textContent.should.equal(this.buttonElement.value);
    });
});