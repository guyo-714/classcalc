"use strict";

var Chai = require('chai'),
    setupDom = require("../setup"),
    TestUtils = require("react-addons-test-utils"),
    React = require("react"),
    ReactDOM = require("react-dom"),
    CalculatorButton = require("../../src/components/calculator-button");

Chai.should();

describe("Calculator Button", function () {
    var targetValue;

    function clickHandler(e){
        targetValue = e.target.value;
    } 

    beforeEach(function () {
        targetValue = "";
        setupDom();
        var renderedComponent = TestUtils.renderIntoDocument(<CalculatorButton onClick={clickHandler} value="0"/>, {});
        this.buttonElement = TestUtils.findRenderedComponentWithType(renderedComponent, CalculatorButton);
    });


    it("should have a value of 0", function(){
        var input = TestUtils.findRenderedDOMComponentWithTag(this.buttonElement, "input");
        input.value.should.equal("0");
    });

    it("button element should call click handler with it's value", function() {
        var button = ReactDOM.findDOMNode(this.buttonElement);
        TestUtils.Simulate.click(button);
        targetValue.should.equal("0");
    });
});