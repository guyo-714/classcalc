"use strict";

var CalculatorAction = require("./calculator-action"),
    CalculatorTokenizer = require("./input-tokenizer"),
    _ = require("lodash");

const Calculator = function(){

    var _calcAction = new CalculatorAction();

    /**
     * F => (E) | E^F | LiteralValue | Error
     * @param tokenizer
     * @param stopChar
     */
    const doParseFactor = function (tokenizer, stopChar) {
        var token,
            tokenValue;

        if (tokenizer.hasNext()){
            token = tokenizer.next();
            tokenValue = token.value;

            if (_.isEqual("(", tokenValue)) {
                doParseExpression(tokenizer, ")");
            } else if (_.isEqual(")", tokenValue)) {
                //no-op
            } else if (_.isEqual("^", tokenValue)) {
                doParseFactor(tokenizer, stopChar);
                _calcAction.power();
            } else if (/[0-9]/.test(tokenValue)) {
                _calcAction.push(tokenValue);
            } else {
                throw new Error("Invalid character... \"" + tokenValue + "\"");
            }
        }

        return _calcAction.count > 0 ? _calcAction.peek() : null;
    };

    /**
     * T => T * F | T / F | F
     * @param tokenizer
     * @param stopChar
     */
    const doParseTerm = function (tokenizer, stopChar) {
        var result,
            token,
            tokenValue;

        if (tokenizer.hasNext()) {
            token = tokenizer.peek();
            tokenValue = token.value;

            if (_.isEqual("*", tokenValue)){
                tokenizer.next();
                doParseFactor(tokenizer, stopChar);
                _calcAction.multiply();
            } else if (_.isEqual("/", tokenValue)){
                tokenizer.next();
                doParseFactor(tokenizer, stopChar);
                _calcAction.divide();
            } else {
                doParseFactor(tokenizer, stopChar);
            }
        }

        if (tokenizer.hasNext() &&
            /[\*,\/]/.test(tokenizer.peek().value)) {
            doParseTerm(tokenizer, stopChar);
        }

        result = _calcAction.count > 0 ? _calcAction.peek() : null;
        return result;
    };

    /**
     * E => E + T | E - T | T
     * @param tokenizer
     * @param stopChar
     */
    const doParseExpression = function(tokenizer, stopChar){
        var token,
            tokenValue;

        if (tokenizer.hasNext()) {
            token = tokenizer.peek();
            tokenValue = token.value;

            if (_.isEqual("+", tokenValue)){
                tokenizer.next();
                doParseTerm(tokenizer, stopChar);
                _calcAction.add();
            } else if (_.isEqual("-", tokenValue)) {
                tokenizer.next();
                doParseTerm(tokenizer, stopChar);
                _calcAction.subtract();
            } else {
                doParseTerm(tokenizer, stopChar);
            }
        }

        var result = _calcAction.count > 0 ? _calcAction.peek() : null;

        if (tokenizer.hasNext()  && !_.isEqual(tokenValue, stopChar)){
            doParseExpression(tokenizer, stopChar);
        }

        return result;
    };

    const doCalculate = function(inputStr, stopChr) {
        var tokenizer = new CalculatorTokenizer();
        tokenizer.tokenize(inputStr);

        var result = doParseExpression(tokenizer, null);
        result = _calcAction.getAnswer();

        return result;
    };


    return {
      calculate: doCalculate,
        parseExpression: doParseExpression,
        parseTerm: doParseTerm,
        parseFactor: doParseFactor
    };

};


module.exports = Calculator;