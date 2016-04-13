var chai = require("chai"),
    strFormatter = require("string-format"),
    Calculator = require("../../src/calculator/calculator");

chai.should();
strFormatter.extend(String.prototype);

describe("Calculator", function(){
    var calculator;

    beforeEach("general context", function(){
        calculator = new Calculator();
    });

    it("should handle E + T", function(){
        var left = 0,
            right = 0;

        var expression = "{0} + {1}"
        var result = calculator.calculate("2 + 1");

        result.should.equal(3);
    });
    it("should handle E - T");
    it("should handle T * F");
    it("should handle T / F");
    it("should handle T ^ F");
    it("should handle Round(E, E)")
    it("should handle (E)");
    it("should handle F");
});