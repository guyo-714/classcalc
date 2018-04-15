var React = require('react'),
    CalculatorDisplay = require('./calculator-display'),
    CalculatorButton = require("./calculator-button"),
    Calculator = require("../calculator/calculator");


const CalculatorView = React.createClass({
    getInitialState: function () {
        return {displayValue: ""};
    },
    handleCalcButtonClick: function (e) {
        var newValue = e.target.value;
        var existingValue = this.state.displayValue;

        if(existingValue != "0") {
            this.setState({displayValue: existingValue + newValue});
        } else {
            this.setState({displayValue: newValue});
        }
    },
    handleProcessEpression(){
        var calculator = new Calculator();
        try {
            var answer = calculator.calculate(this.state.displayValue);
            this.setState({displayValue: answer});
        }
         catch (err) {
            this.setState({displayValue: "Error: " + err.message});
        }
    },
    render: function () {
        return (
            <div className="panel">
                <div className="panel-heading">
                    <CalculatorDisplay value={this.state.displayValue} />
                </div>
                <div className="panel-body">
                    <div className="btn-group btn-group-justified">
                        <CalculatorButton value="7" onClick={this.handleCalcButtonClick} />
                        <CalculatorButton value="8" onClick={this.handleCalcButtonClick} />
                        <CalculatorButton value="9" onClick={this.handleCalcButtonClick} />

                        <CalculatorButton value="/" onClick={this.handleCalcButtonClick} />
                    </div>
                    <div className="btn-group btn-group-justified">
                        <CalculatorButton value="4" onClick={this.handleCalcButtonClick} />
                        <CalculatorButton value="5" onClick={this.handleCalcButtonClick} />
                        <CalculatorButton value="6" onClick={this.handleCalcButtonClick} />

                        <CalculatorButton value="*" onClick={this.handleCalcButtonClick} />
                    </div>
                    <div className="btn-group btn-group-justified">
                        <CalculatorButton value="1" onClick={this.handleCalcButtonClick} />
                        <CalculatorButton value="2" onClick={this.handleCalcButtonClick} />
                        <CalculatorButton value="3" onClick={this.handleCalcButtonClick} />

                        <CalculatorButton value="-" onClick={this.handleCalcButtonClick} />
                    </div>
                    <div className="btn-group btn-group-justified">
                        <CalculatorButton value="0" onClick={this.handleCalcButtonClick} />
                        <CalculatorButton value="+" onClick={this.handleCalcButtonClick} />
                    </div>
                    <div className="btn-group btn-group-justified">
                        <CalculatorButton value="=" onClick={this.handleProcessEpression} />
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = CalculatorView;
