"use strict";

var CalculatorAction = require("./calculator-action"),
    CalculatorTokenizer = require("./input-tokenizer"),
    _ = require("lodash");

var _calcAction = null;

const Calculator = function(){

    var _calcAction = new CalculatorAction();

    const doParseFactor = function (tokenizer, stopChar) {
        
    };

    const doParseTerm = function (tokenizer, stopChar) {
        doParseFactor(tokenizer, stopChar);
    };

    const doParseExpression = function(tokenizer, stopChar){

        if (tokenizer.hasNext()) {
            const token = tokenizer.peek();
            const tokenValue = token.value;

            if (_.isEqual("+", tokenValue)){
                doParseTerm(tokenizer, stopChar);
                _calcAction.add();
            } else if (_.isEqual("-", tokenValue)) {

            } else {
                doParseTerm(tokenizer, stopChar);
            }
        }

    };

    const calculate = function(inputStr, stopChr) {
        var tokenizer = new CalculatorTokenizer();

        var result = doParseExpression(tokenizer, null);

        return result;
    };


    return {
      calculate: calculate,
        parseExpression: doParseExpression,
        parseTerm: doParseTerm,
        parseFactor: doParseFactor
    };

};


module.exports = Calculator;