var React = require('react'),
    CalculatorDisplay = require('./calculator-display'),
    CalculatorButton = require("./calculator-button");


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
    }, render: function () {
        return (
            < div >
                < div >
                    < CalculatorDisplay value={this.state.displayValue} />
                </ div >
                < div >
                    < CalculatorButton value="1" onClick={this.handleCalcButtonClick} />
                    < CalculatorButton value="2" onClick={this.handleCalcButtonClick} />
                    < CalculatorButton value="3" onClick={this.handleCalcButtonClick} />
                    < CalculatorButton value="4" onClick={this.handleCalcButtonClick} />
                    < CalculatorButton value="5" onClick={this.handleCalcButtonClick} />
                    < CalculatorButton value="6" onClick={this.handleCalcButtonClick} />
                    < CalculatorButton value="7" onClick={this.handleCalcButtonClick} />
                    < CalculatorButton value="8" onClick={this.handleCalcButtonClick} />
                    < CalculatorButton value="9" onClick={this.handleCalcButtonClick} />
                    < CalculatorButton value="0" onClick={this.handleCalcButtonClick} />
                </ div >
            </ div >
        );
    }
});

module.exports = CalculatorView;
