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
            <div>
                <table>
                    <tr>
                        <CalculatorDisplay value={this.state.displayValue} />
                    </tr>
                    <tr>
                        <td><CalculatorButton value="1" onClick={this.handleCalcButtonClick} /></td>
                        <td><CalculatorButton value="2" onClick={this.handleCalcButtonClick} /></td>
                        <td><CalculatorButton value="3" onClick={this.handleCalcButtonClick} /></td>
                    </tr>
                      <tr>
                        <td><CalculatorButton value="4" onClick={this.handleCalcButtonClick} /></td>
                        <td><CalculatorButton value="5" onClick={this.handleCalcButtonClick} /></td>
                        <td><CalculatorButton value="6" onClick={this.handleCalcButtonClick} /></td>
                    </tr>
                    <tr>
                        <td><CalculatorButton value="7" onClick={this.handleCalcButtonClick} /></td>
                        <td><CalculatorButton value="8" onClick={this.handleCalcButtonClick} /></td>
                        <td><CalculatorButton value="9" onClick={this.handleCalcButtonClick} /></td>
                    </tr>
                    <tr>
                         <td><CalculatorButton value="0" onClick={this.handleCalcButtonClick} /></td>
                    </tr>
                </table>
            </ div >
        );
    }
});

module.exports = CalculatorView;
