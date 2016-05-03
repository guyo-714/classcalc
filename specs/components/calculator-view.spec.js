var Chai = require('chai'),
    setupDom = require("../setup"),
    TestUtils = require("react-addons-test-utils"),
    React = require("react"),
    ReactDOM = require("react-dom"),
    CalculatorView = require("../../src/components/calculator-view"),
    CalculatorDisplay = require("../../src/components/calculator-display"),
    CalculatorButton = require("../../src/components/calculator-button");

Chai.should();

describe("Calculator View", function () {
    beforeEach("render and retrieve", function () {
        setupDom();

        var renderedComponent = TestUtils.renderIntoDocument(<CalculatorView/>, {});
        this.displayComponent = TestUtils.findRenderedComponentWithType(renderedComponent, CalculatorDisplay);
        this.buttonComponents = TestUtils.scryRenderedComponentsWithType(renderedComponent, CalculatorButton);
    });

    it("should have display element", function() {
        this.displayComponent.should.not.be.null;
    });

    context("Buttons", function() {
        it("should have total 10 buttons for number 0-9", function() {
            this.buttonComponents.length.should.equal(10);
        });

        it("buttons values should be correct", function() {
            var buttonValues = ["1","2","3","4","5","6","7","8","9","0"];
            for(var i=0; i<this.buttonComponents.length; i++) {
                var buttonElement = ReactDOM.findDOMNode(this.buttonComponents[i]);
                buttonElement.should.not.be.null;
                buttonElement.value.should.equal(buttonValues[i]);
            }
        });
    });

    context("#onClick of button", function() {

        context("One button clicked", function() {
            beforeEach(function () {
                this.buttonElement = ReactDOM.findDOMNode(this.buttonComponents[0]);
            });

            it("should display correct button value when button is clicked", function () {
                TestUtils.Simulate.click(this.buttonElement);
                var displayLabel = TestUtils.findRenderedDOMComponentWithTag(this.displayComponent, "label");
                displayLabel.textContent.should.equal(this.buttonElement.value);
            });
        });

        context("First non zero button and any other button clicked", function() {
            beforeEach(function () {
                this.firstButtonElement = ReactDOM.findDOMNode(this.buttonComponents[0]);
                this.secondButtonElement = ReactDOM.findDOMNode(this.buttonComponents[1]);
            });

            it("should display firstButtonElement value and secondButtonElement value", function() {
                TestUtils.Simulate.click(this.firstButtonElement);
                TestUtils.Simulate.click(this.secondButtonElement);
                var displayLabel = TestUtils.findRenderedDOMComponentWithTag(this.displayComponent, "label");
                displayLabel.textContent.should.equal(this.firstButtonElement.value + this.secondButtonElement.value);
            });
        });

        context("First zero button and any other button clicked", function() {
            beforeEach(function () {
                this.firstButtonElement = ReactDOM.findDOMNode(this.buttonComponents[9]);
                this.secondButtonElement = ReactDOM.findDOMNode(this.buttonComponents[1]);
            });

            it("should display firstButtonElement value and secondButtonElement value", function() {
                TestUtils.Simulate.click(this.firstButtonElement);
                TestUtils.Simulate.click(this.secondButtonElement);
                var displayLabel = TestUtils.findRenderedDOMComponentWithTag(this.displayComponent, "label");
                displayLabel.textContent.should.equal(this.secondButtonElement.value);
            });
        });

    });

});