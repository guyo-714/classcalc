"use strict";
var InputBuffer = require("./input-read-buffer"),
    Constants = require("./calculator-const"),
    _ = require("lodash");


const InputTokenizer = function () {
    var _inputBuffer = null;
    var _tokens = [];
    var _idx = 0;

    const doTokenize = function (inputStr) {
        if (inputStr){
            _inputBuffer = new InputBuffer(inputStr);
        }

        while(_inputBuffer.hasNext()){
            var currentChar = _inputBuffer.peekNext();

            if (isWhitespace(currentChar)){
                _inputBuffer.getNext();
            } else if (isNumeric(currentChar)){
                doGetNumberToken();
            } else if (isOperator(currentChar)) {
                doGetOperatorToken();
            } else {
                throw new Error(Constants.error.INVALID_INPUT_CHAR);
            }
        }
    };

    const doGetNumberToken = function () {
        var result = "",
            value = "",
            currentChar;

        while(_inputBuffer.hasNext()){
            currentChar = _inputBuffer.peekNext();

            if (isWhitespace(currentChar)){
                break;
            } else if (isNaN(currentChar)) {
                break;
            } else {
                _inputBuffer.getNext();
                value += currentChar;
            }
        }

        result = {"type":"number","value": value};
        _tokens.push(result);

        return result;
    };

    const doGetOperatorToken = function () {
        var result = "",
            value = "",
            currentChar;

        while(_inputBuffer.hasNext()){
            currentChar = _inputBuffer.getNext();

            value += currentChar;
            break;
            
            if (!isOperator(_inputBuffer.peekNext())){
                break;
            }
        }

        result = {"type": "operator", "value": value};
        _tokens.push(result);

        return result;
    };

    const doHasNext = function () {
        return _tokens.length > _idx;
    };

    const doGetCount = function () {
        return _tokens.length;
    };

    const isWhitespace = function (inChar) {
        return /\s/.test(inChar);
    };

    const isAllowedChar = function (inChar) {
        return /[a-zA-Z_]/.test(inChar);
    };

    const isNumeric = function (inChar) {
      return /[0-9]/.test(inChar);
    };

    const isOperator = function (inChar) {
        return /[\+\-/\^\(\)\*]/.test(inChar);
    };

    const doToString = function () {
        return _.join(_tokens, ",");
    };

    const doPeek = function () {
        var result = null;

        if (_idx <= _tokens.length){
            result = _tokens[_idx];
        } else {
            throw new Error(Constants.error.NO_TOKENS_LEFT);
        }

        return result;
    };

    const doGetNext = function () {
        var result = null;

        result = doPeek();
        _idx += 1;

        return result;
    };



    return {
        isOperator: isOperator,
        tokenize: doTokenize,
        getCount: doGetCount,
        tokens: _tokens,
        toString: doToString,
        hasNext: doHasNext,
        next: doGetNext,
        peek: doPeek
    };
};


module.exports = InputTokenizer;