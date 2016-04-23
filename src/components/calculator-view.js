
var React = require('react'),
    CalculatorDisplay = require('./calculator-display'),
    CalculatorButton = require("./calculator-button");


const CalculatorView = React.createClass({
    render: function() {
        return (
                <div>
            <div>
                <CalculatorDisplay value=""/>
        </div>
                <div>
                    <CalculatorButton value="0" />
                </div>
                </div>
        );
    }
});

module.exports = CalculatorView;
