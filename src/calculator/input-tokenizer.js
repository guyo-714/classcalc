"use strict";
var InputBuffer = require("./input-read-buffer");


const InputTokenizer = function (inputStr) {
    var _inputBuffer = null;
    var _tokens = [];

    if (inputStr){
        doTokenize(inputStr);
    }

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
                throw new Error("invalid character");
            }
        }
    };

    const doGetNumberToken = function () {
        var result = "",
            value = "",
            currentChar;

        while(_inputBuffer.hasNext()){
            currentChar = _inputBuffer.getNext();

            if (isWhitespace(currentChar)){
                break;
            } else {
                value += currentChar;
            }
        }

        result = {"type":"numeric","value": value};
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

            if (!isOperator(_inputBuffer.peekNext())){
                break;
            }
        }

        result = {"type": "operator", "value": value};
        _tokens.push(result);

        return result;
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
        return /[\+\-/\^\(\)=]/.test(inChar);
    };

    return {
        tokenize: doTokenize,
        getCount: doGetCount,
        tokens: _tokens
    };
};


module.exports = InputTokenizer;