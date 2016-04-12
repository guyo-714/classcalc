"use strict";

var chai = require("chai"),
    InputTokenizer = require("../../src/calculator/input-tokenizer");

chai.should();

const INPUT_TO_TOKENIZE = "1 + 2 + 22";

describe.only("Input Tokenizer", function () {
    var tokenizer = null;

    beforeEach(function () {
        tokenizer = new InputTokenizer();
        console.log("before each...");
    });

    afterEach(function () {
        tokenizer = null;
        console.log("after each...");
    });

    it("should accept string input", function () {
        tokenizer.tokenize(INPUT_TO_TOKENIZE);
        tokenizer.getCount().should.be.greaterThan(0);
    });

    it("should skip whitespace");
});
