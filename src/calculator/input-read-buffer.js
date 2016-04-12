"use strict";

var Constants = require("./calculator-const");

var _input = null,
    _idx = 0;

const InputReadBuffer = function(input){

    _input = input;

    const doGetLength = function () {
        return _input.length;
    };

    const doHasNext = function () {
        return _idx < _input.length;
    };

    const doGetNext = function () {
        var result = doPeekNext();

        _idx += 1;

        return result;
    };

    const doPeekNext = function () {
        if (_idx >= _input.length) {
            throw new Error(Constants.BUFFER_EXHAUSTED);
        }

        return _input[_idx];
    };

    return {
        getNext: doGetNext,
        peekNext: doPeekNext,
        hasNext: doHasNext,
        length: doGetLength()
    };
};


module.exports = InputReadBuffer;