var Chai = require('chai'),
    setupDom = require("../setup"),
    TestUtils = require("react-addons-test-utils"),
    React = require("react"),
    ReactDOM = require("react-dom"),
    CalculatorView = require("../../src/components/calculator-view"),
    CalculatorDisplay = require("../../src/components/calculator-display"),
    CalculatorButton = require("../../src/components/calculator-button"),
    CalcTestHelper = require("../test-helper");

Chai.should();

describe("Calculator View", function () {
  beforeEach("render and retrieve", function () {
    setupDom();

    var renderedComponent = TestUtils.renderIntoDocument(<CalculatorView/>, {});
    this.displayComponent = TestUtils.findRenderedComponentWithType(renderedComponent, CalculatorDisplay);
    this.buttonComponents = TestUtils.scryRenderedComponentsWithType(renderedComponent, CalculatorButton);
  });

  it("should have display element", function () {
    this.displayComponent.should.not.be.null;
  });

  context("Buttons", function () {
    it("should have a button with 0 displayed", function () {
      let buttonElement = CalcTestHelper.getButtonDomNodeByValue(this.buttonComponents, "0");
      buttonElement.should.not.be.null;
    });

    it("should have a button with 1 displayed", function () {
      let buttonElement = CalcTestHelper.getButtonDomNodeByValue(this.buttonComponents, "1");
      buttonElement.should.not.be.null;
    });

    it("should have a button with 2 displayed", function () {
      let buttonElement = CalcTestHelper.getButtonDomNodeByValue(this.buttonComponents, "2");
      buttonElement.should.not.be.null;
    });

    it("should have a button with 3 displayed", function () {
      let buttonElement = CalcTestHelper.getButtonDomNodeByValue(this.buttonComponents, "3");
      buttonElement.should.not.be.null;
    });

    it("should have a button with 4 displayed", function () {
      let buttonElement = CalcTestHelper.getButtonDomNodeByValue(this.buttonComponents, "4");
      buttonElement.should.not.be.null;
    });

    it("should have a button with 5 displayed", function () {
      let buttonElement = CalcTestHelper.getButtonDomNodeByValue(this.buttonComponents, "5");
      buttonElement.should.not.be.null;
    });

    it("should have a button with 6 displayed", function () {
      let buttonElement = CalcTestHelper.getButtonDomNodeByValue(this.buttonComponents, "6");
      buttonElement.should.not.be.null;
    });

    it("should have a button with 7 displayed", function () {
      let buttonElement = CalcTestHelper.getButtonDomNodeByValue(this.buttonComponents, "7");
      buttonElement.should.not.be.null;
    });

    it("should have a button with 8 displayed", function () {
      let buttonElement = CalcTestHelper.getButtonDomNodeByValue(this.buttonComponents, "8");
      buttonElement.should.not.be.null;
    });

    it("should have a button with 9 displayed", function () {
      let buttonElement = CalcTestHelper.getButtonDomNodeByValue(this.buttonComponents, "9");
      buttonElement.should.not.be.null;
    });

    it("should have a button with + displayed", function () {
      let buttonElement = CalcTestHelper.getButtonDomNodeByValue(this.buttonComponents, "+");
      buttonElement.should.not.be.null;
    });

    it("should have a button with - displayed", function () {
      let buttonElement = CalcTestHelper.getButtonDomNodeByValue(this.buttonComponents, "-");
      buttonElement.should.not.be.null;
    });

    it("should have a button with * displayed", function () {
      let buttonElement = CalcTestHelper.getButtonDomNodeByValue(this.buttonComponents, "*");
      buttonElement.should.not.be.null;
    });

    it("should have a button with / displayed", function () {
      let buttonElement = CalcTestHelper.getButtonDomNodeByValue(this.buttonComponents, "/");
      buttonElement.should.not.be.null;
    });

    it("should have a button with = displayed", function () {
      let buttonElement = CalcTestHelper.getButtonDomNodeByValue(this.buttonComponents, "=");
      buttonElement.should.not.be.null;
    });

    it("should have correct number of buttons for number 0-9 and +, =, *, -, /", function () {
      this.buttonComponents.length.should.equal(15);
    });
  });

  context("#onClick of button", function () {
    context("One button clicked", function () {
      beforeEach(function () {
        this.buttonElement = ReactDOM.findDOMNode(this.buttonComponents[0]);
      });

      it("should display correct button value when button is clicked", function () {
        TestUtils.Simulate.click(this.buttonElement);
        var displayLabel = TestUtils.findRenderedDOMComponentWithTag(this.displayComponent, "label");
        displayLabel.textContent.should.equal(this.buttonElement.value);
      });
    });

    context("First non zero button and any other button clicked", function () {
      beforeEach(function () {
        this.firstButtonElement = ReactDOM.findDOMNode(this.buttonComponents[0]);
        this.secondButtonElement = ReactDOM.findDOMNode(this.buttonComponents[1]);
      });

      it("should display firstButtonElement value and secondButtonElement value", function () {
        TestUtils.Simulate.click(this.firstButtonElement);
        TestUtils.Simulate.click(this.secondButtonElement);
        var displayLabel = TestUtils.findRenderedDOMComponentWithTag(this.displayComponent, "label");
        displayLabel.textContent.should.equal(this.firstButtonElement.value + this.secondButtonElement.value);
      });
    });

    context("First zero button and any other button clicked", function () {
      beforeEach(function () {
        CalcTestHelper.clickButtonWithValue(this.buttonComponents, "9");
        CalcTestHelper.clickButtonWithValue(this.buttonComponents, "4");
      });

      it("should display firstButtonElement value and secondButtonElement value", function () {
        var displayLabel = TestUtils.findRenderedDOMComponentWithTag(this.displayComponent, "label");
        displayLabel.textContent.should.equal('94');
      });
    });

    context("Addition", function () {
      it("should add two numbers e.g. 9+7=16", function () {
        CalcTestHelper.clickButtonWithValue(this.buttonComponents, "9");
        CalcTestHelper.clickButtonWithValue(this.buttonComponents, "+");
        CalcTestHelper.clickButtonWithValue(this.buttonComponents, "7");
        CalcTestHelper.clickButtonWithValue(this.buttonComponents, "=");

        var displayLabel = TestUtils.findRenderedDOMComponentWithTag(this.displayComponent, "label");
        displayLabel.textContent.should.equal("16");
      });


      it("should add more than two numbers e.g. 9+7+2=18", function () {
        CalcTestHelper.clickButtonWithValue(this.buttonComponents, "9");
        CalcTestHelper.clickButtonWithValue(this.buttonComponents, "+");
        CalcTestHelper.clickButtonWithValue(this.buttonComponents, "7");
        CalcTestHelper.clickButtonWithValue(this.buttonComponents, "+");
        CalcTestHelper.clickButtonWithValue(this.buttonComponents, "2");
        CalcTestHelper.clickButtonWithValue(this.buttonComponents, "=");

        var displayLabel = TestUtils.findRenderedDOMComponentWithTag(this.displayComponent, "label");
        displayLabel.textContent.should.equal("18");
      });
    });

    context("Subtraction", function () {
      it("should subtract two numbers e.g. 9-7=2", function () {
        CalcTestHelper.clickButtonWithValue(this.buttonComponents, "9");
        CalcTestHelper.clickButtonWithValue(this.buttonComponents, "-");
        CalcTestHelper.clickButtonWithValue(this.buttonComponents, "7");
        CalcTestHelper.clickButtonWithValue(this.buttonComponents, "=");

        var displayLabel = TestUtils.findRenderedDOMComponentWithTag(this.displayComponent, "label");
        displayLabel.textContent.should.equal("2");
      });

      it("should subtract more than two numbers e.g. 9-7-2=0", function () {
        CalcTestHelper.clickButtonWithValue(this.buttonComponents, "9");
        CalcTestHelper.clickButtonWithValue(this.buttonComponents, "-");
        CalcTestHelper.clickButtonWithValue(this.buttonComponents, "7");
        CalcTestHelper.clickButtonWithValue(this.buttonComponents, "-");
        CalcTestHelper.clickButtonWithValue(this.buttonComponents, "2");
        CalcTestHelper.clickButtonWithValue(this.buttonComponents, "=");

        var displayLabel = TestUtils.findRenderedDOMComponentWithTag(this.displayComponent, "label");
        displayLabel.textContent.should.equal("0");
      });
    });

    context("Multiplication", function () {
      it("should multiply two numbers", function () {
        CalcTestHelper.clickButtonWithValue(this.buttonComponents, "9");
        CalcTestHelper.clickButtonWithValue(this.buttonComponents, "*");
        CalcTestHelper.clickButtonWithValue(this.buttonComponents, "7");
        CalcTestHelper.clickButtonWithValue(this.buttonComponents, "=");

        var displayLabel = TestUtils.findRenderedDOMComponentWithTag(this.displayComponent, "label");
        displayLabel.textContent.should.equal("63");
      });

      it("should multiply multiple numbers", function () {
        CalcTestHelper.clickButtonWithValue(this.buttonComponents, "9");
        CalcTestHelper.clickButtonWithValue(this.buttonComponents, "*");
        CalcTestHelper.clickButtonWithValue(this.buttonComponents, "7");
        CalcTestHelper.clickButtonWithValue(this.buttonComponents, "*");
        CalcTestHelper.clickButtonWithValue(this.buttonComponents, "0");

        CalcTestHelper.clickButtonWithValue(this.buttonComponents, "=");

        var displayLabel = TestUtils.findRenderedDOMComponentWithTag(this.displayComponent, "label");
        displayLabel.textContent.should.equal("0");
      });
    });

    context("Division", function () {
      it("should divide two numbers correctly", function () {
        CalcTestHelper.clickButtonWithValue(this.buttonComponents, "8");
        CalcTestHelper.clickButtonWithValue(this.buttonComponents, "/");
        CalcTestHelper.clickButtonWithValue(this.buttonComponents, "2");
        CalcTestHelper.clickButtonWithValue(this.buttonComponents, "=");

        var displayLabel = TestUtils.findRenderedDOMComponentWithTag(this.displayComponent, "label");
        displayLabel.textContent.should.equal("4");
      });

      it("should divide multiple numbers correctly", function () {
        CalcTestHelper.clickButtonWithValue(this.buttonComponents, "1");
        CalcTestHelper.clickButtonWithValue(this.buttonComponents, "2");
        CalcTestHelper.clickButtonWithValue(this.buttonComponents, "/");
        CalcTestHelper.clickButtonWithValue(this.buttonComponents, "2");
        CalcTestHelper.clickButtonWithValue(this.buttonComponents, "/");
        CalcTestHelper.clickButtonWithValue(this.buttonComponents, "3");
        CalcTestHelper.clickButtonWithValue(this.buttonComponents, "=");

        var displayLabel = TestUtils.findRenderedDOMComponentWithTag(this.displayComponent, "label");
        displayLabel.textContent.should.equal("2");
      });

      it("dividing any number with zero should result in error", function () {
        CalcTestHelper.clickButtonWithValue(this.buttonComponents, "5");
        CalcTestHelper.clickButtonWithValue(this.buttonComponents, "/");
        CalcTestHelper.clickButtonWithValue(this.buttonComponents, "0");
        CalcTestHelper.clickButtonWithValue(this.buttonComponents, "=");

        var displayLabel = TestUtils.findRenderedDOMComponentWithTag(this.displayComponent, "label");
        displayLabel.textContent.should.equal("Error: Dividing by zero is not allowed.");
      });
    });

  });

});