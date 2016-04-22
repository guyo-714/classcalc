"use strict";

var chai = require("chai"),
    InputTokenizer = require("../../src/calculator/input-tokenizer"),
    _ = require("lodash");

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

        var idx = 0;
        while(tokenizer.hasNext()){
            tokenizer.next();
            idx += 1;
        }

        idx.should.equal(5);
    });
    
    it("should throw \"invalid input character\" error if an invalid ", function(){
        try {
            tokenizer.tokenize("Hello");
        } catch (e){
            e.message.should.equal("invalid input character");
        }

    });

    it("should have token values equal to", function () {
        tokenizer.tokenize(INPUT_TO_TOKENIZE);
        tokenizer.tokens[0].type.should.equal("number");
        tokenizer.tokens[0].value.should.equal("1");
        tokenizer.tokens[1].type.should.equal("operator");
        tokenizer.tokens[1].value.should.equal("+");
        tokenizer.tokens[2].type.should.equal("number");
        tokenizer.tokens[2].value.should.equal("2");
        tokenizer.tokens[3].type.should.equal("operator");
        tokenizer.tokens[3].value.should.equal("+");
        tokenizer.tokens[4].type.should.equal("number");
        tokenizer.tokens[4].value.should.equal("22");
    });
});
