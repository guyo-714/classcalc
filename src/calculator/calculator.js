"use strict";

var CalculatorAction = require("./calculator-action");

var _calcAction = null;

const Calculator = function(calcAction){

    if (calcAction) {
        _calcAction = calcAction;
    } else {
        _calcAction = new CalculatorAction();
    }

    const calculate = function(expString) {

    };

    const doParseExpression = function(){

    };

    const doParseTerm = function () {

    };

    var doParseFactor = function (input, stopChar) {
    };

    return {
      calculate: calculate,
        parseExpression: doParseExpression,
        parseTerm: doParseTerm,
        parseFactor: doParseFactor
    };

};


module.exports = Calculator;