"use strict";

var chai = require("chai"),
    InputTokenizer = require("../../src/calculator/input-tokenizer");

chai.should();

const INPUT_TO_TOKENIZE = "1 + 2 + 22";

describe("Input Tokenizer", function () {
    var tokenizer = null;

    beforeEach(function () {
        tokenizer = new InputTokenizer();
    });

    afterEach(function () {
        tokenizer = null;
    });

    it("should tokenize string input", function () {
        tokenizer.tokenize(INPUT_TO_TOKENIZE);
        tokenizer.getCount().should.equal(5);
    });
    
    it("should thow \"invalid input character\" error if an invalid ", function(){
        try {
            tokenizer.tokenize("Hello");
        } catch (e){
            e.should.equal("invalid input character");
        }

    });
});
