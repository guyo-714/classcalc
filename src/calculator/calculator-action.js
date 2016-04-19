"use strict";

var Constants = require("./calculator-const"),
    StrFormatter = require("string-format"),
    _ = require("lodash");

StrFormatter.extend(String.prototype);

var _stack = [];

const CalculatorAction = function(){
    const push = function(value){
        _stack.push(value);
    };

    const pop = function () {
        if(_stack.length === 0){
            throw new Error("no value to use...")
        }
      return _stack.pop();
    };

    const getBinaryOperationValues = function () {
        var left,
            right;

        if(_stack.length < 2) {
            throw new Error("Not enough values for binary operation");
        }

        right = _stack.pop();
        left = _stack.pop();

        return {left:left, right: right};
    };

    const doAdd = function(){
        var values,
            result;

        values = getBinaryOperationValues();

        result = values.left + values.right;

        this.push(result);

        return result;
    };

    const doSubtract = function(){
        var values,
            result;

        values = getBinaryOperationValues();
        result = values.left - values.right;

        this.push(result);

        return result;
    };

    const doMultiply = function(){
        var values,
            result;

        values = getBinaryOperationValues();

        result = values.left * values.right;

        this.push(result);

        return result;
    };

    const doDivide = function(){
        var values,
            result;

        values = getBinaryOperationValues();

        if(values.right === 0){
            throw new Error(Constants.error.DIVIDE_BY_ZERO);
        }

        result = values.left / values.right;

        this.push(result);

        return result;
    };

    const doPower = function () {
        var values,
            result;

        values = getBinaryOperationValues();
        result = Math.pow(values.left, values.right);
        this.push(result);

        return result;
    };

    const doToString = function () {
        var result;

        result = "Item count: " +  _stack.length + " = " +_.join(_stack, ",");

        return result;
    };

    const doClear = function () {
      _stack = [];
    };

    const doGetCount = function () {
        return _stack.length;
    };

    return {
        add: doAdd,
        subtract: doSubtract,
        multiply: doMultiply,
        divide: doDivide,
        power: doPower,
        clear: doClear,
        push: push,
        pop: pop,
        count: doGetCount(),
        toString: doToString
    }
};



module.exports = CalculatorAction;