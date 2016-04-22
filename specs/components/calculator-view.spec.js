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

        this.displayElement = TestUtils.findRenderedComponentWithType(renderedComponent, CalculatorDisplay);
        var buttonComponent = TestUtils.findRenderedComponentWithType(renderedComponent, CalculatorButton);
        this.buttonElement = ReactDOM.findDOMNode(buttonComponent);
    });

    it("should have display element", function() {
        this.displayElement.should.not.be.null;
    });

    it("should have buttonElement", function() {
        this.buttonElement.should.not.be.null;
    });

    it("buttonElement should have value 0", function() {
        this.buttonElement.value.should.equal("0");
    });
});