"use strict";

var Constants = require("./calculator-const");

const InputReadBuffer = function(inputStr){
    var self = this;

    self.input = inputStr;
    self.idx = 0;

    const doGetLength = function () {
        return self.input.length;
    };

    const doHasNext = function () {
        return self.idx < self.input.length;
    };

    const doGetNext = function () {
        var result = doPeekNext();

        self.idx += 1;

        return result;
    };

    const doPeekNext = function () {
        if (self.idx >= self.input.length) {
            throw new Error(Constants.BUFFER_EXHAUSTED);
        }

        return self.input[self.idx];
    };

    return {
        getNext: doGetNext,
        peekNext: doPeekNext,
        hasNext: doHasNext,
        length: doGetLength()
    };
};


module.exports = InputReadBuffer;