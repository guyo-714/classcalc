var chai = require("chai"),
    InputReadBuffer = require("../../src/calculator/input-read-buffer");

const INPUT_ONE = "1 + 1";

describe("Input read buffer", function(){
    var inputReader = null;

    beforeEach(function () {
        inputReader = new InputReadBuffer(INPUT_ONE);
        console.log("before...");
    });

    afterEach(function () {
       inputReader = null;
    });

    it("should have a length that as the length of the input", function(){
        inputReader.length.should.equal(INPUT_ONE.length);
    });

    it("should indicate that it hasNext", function () {
        inputReader.hasNext().should.be.true;
    });

    it("should let me peek at the next char without advancing the marker", function () {
        inputReader.peekNext().should.equal(inputReader.peekNext());
    });

    it("should stop at the end of the input string", function () {
        var result = "";

        while (inputReader.hasNext()){
            result += inputReader.getNext();
        }

        result.should.equal(INPUT_ONE);
        result.length.should.equal(INPUT_ONE.length);
    });
});