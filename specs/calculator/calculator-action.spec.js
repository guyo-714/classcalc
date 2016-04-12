"use strict";

var CalculatorAction = require("../../src/calculator/calculator-action"),
    Constants = require("../../src/calculator/calculator-const");

const pushValue = 5;
const pushValue2 = 2;

describe("Calculator Action", function(){
    var calcAction;

    beforeEach("Create Calculator Action", function(){
        calcAction = new CalculatorAction();
    });

    afterEach(function () {
       calcAction.clear();
    });

    it("should be able to push and pop a value", function(){
        calcAction.push(pushValue);
        const result = calcAction.pop();
        result.should.equal(pushValue);
    });

    it("should add values", function () {
        calcAction.push(pushValue);
        calcAction.push(pushValue);
        const result = calcAction.add();
        result.should.equal(pushValue + pushValue);
    });

    it("should subtract values", function () {
        calcAction.push(pushValue);
        calcAction.push(pushValue);
        const result = calcAction.subtract();
        result.should.equal(pushValue - pushValue);
    });

    it("should multiply values", function(){
        calcAction.push(pushValue);
        calcAction.push(pushValue);
        const result = calcAction.multiply();
        result.should.equal(pushValue * pushValue);
    });

    it("should divide values", function(){
        calcAction.push(pushValue);
        calcAction.push(pushValue);
        const result = calcAction.divide();
        result.should.equal(pushValue / pushValue);
    });

    it("should throw error \"Dividing by zero is not allow.\" if dividing by zero", function(){
        calcAction.push(pushValue);
        calcAction.push(0);
        var result = undefined;

        try {
            result = calcAction.divide();
            result.should.not.equal(0);
        }catch (e){
            e.message.should.equal(Constants.error.DIVIDE_BY_ZERO);
        }
    });

    it("should raise to a power", function () {
        var result;

        calcAction.push(pushValue);
        calcAction.push(pushValue2);
        result = calcAction.power();
        result.should.equal(Math.pow(pushValue, pushValue2));
    });
});