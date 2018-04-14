"use strict";

var React = require("react"),
    PropTypes = React.PropTypes;

var CalculatorButton = React.createClass({
    propTypes: {
        value: PropTypes.string
    },
    render: function () {
        return (
          <input type="button" className="num-btn" value={this.props.value} onClick={this.props.onClick}/>
        );
    }
});

module.exports = CalculatorButton;

