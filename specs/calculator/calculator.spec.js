var chai = require("chai"),
    strFormatter = require("string-format"),
    Calculator = require("../../src/calculator/calculator"),
    sprintf = require("sprintf-js").sprintf;

chai.should();
strFormatter.extend(String.prototype);

describe("Calculator", function(){
    var calculator;

    beforeEach("general context", function(){
        calculator = new Calculator();
    });

    it("should handle E + T", function(){
        var left = 2,
            right = 1;

        var expression = sprintf("%s + %s", left, right);
        var result = calculator.calculate(expression);

        result.should.equal(left + right);
    });

    it("should handle E+T no spaces", function () {
        var left = 2,
            right = 1;

        var expression = sprintf("%s+%s", left, right);
        var result = calculator.calculate(expression);

        result.should.equal(left + right);
    });

    it("should handle multiple E + T", function(){
        var left = 2,
            right = 1;

        var expression = sprintf("%s + %s + %s + %s + %s", left, right, left, right, left);
        var result = calculator.calculate(expression);

        result.should.equal(left + right + left + right + left);
    });


    it("should handle E - T", function () {
        var left = 7,
            right = 9;

        var expression = sprintf("%s - %s", left, right);
        var result = calculator.calculate(expression);

        result.should.equal(left - right);
    });

    it("should handle T", function () {
        var left = 42;

        var expression = sprintf("%s", left);

        var result = calculator.calculate(expression);

        result.should.equal(left);
    });

    it("should handle T * F", function () {
        var left = 5,
            right = 5;

        var expression = sprintf("%s * %s", left, right);
        var result = calculator.calculate(expression);

        result.should.equal(left * right);
    });

    it("should handle multiplication before addition", function(){
       var left = 5,
           right = 5,
           theadd = 2;

        var expression = sprintf("%s * %s + %s", left, right, theadd);
        var result = calculator.calculate(expression);
        result.should.equal((5*5)+2);
    });

    it("should handle T / F", function () {
        var left = 5,
            right = 5;

        var expression = sprintf("%s / %s", left, right);
        var result = calculator.calculate(expression);

        result.should.equal(left / right);
    });

    it("should handle divide before addition", function(){
        var left = 5,
            right = 5,
            theadd = 2;

        var expression = sprintf("%s / %s + %s", left, right, theadd);
        var result = calculator.calculate(expression);
        result.should.equal((5/5)+2);
    });

    it("should handle T ^ F", function () {
        var left = 2,
            right = 8;

        var expression = sprintf("%s ^ %s", left, right);
        var result = calculator.calculate(expression);

        result.should.equal(Math.pow(left,right));
    });

    it("should handle (E)", function () {
        var left = 2,
            right = 8;

        var expression = sprintf("%s * (%s + %s)", left, right, left);
        var result = calculator.calculate(expression);

        result.should.equal(left * (right + left));
    });

    it("should handle F", function () {
        var left = 55;

        var expression = sprintf("%s", left);
        var result = calculator.calculate(expression);
        result.should.equal(left);
    });
});