var React = require("react");

var CalculatorDisplay = React.createClass({
    render : function() {
        return (
            <div className="well">
                <label>{this.props.value}</label>
            </div>
        );
    }
});

module.exports = CalculatorDisplay;
