"use strict";

var React = require("react"),
    PropTypes = React.PropTypes;

var CalculatorButton = React.createClass({
    propTypes: {
        value: PropTypes.string
    },
    render: function () {
        return (
          <input type="submit" className="btn btn-flat" value={this.props.value} onClick={this.props.onClick}/>
        );
    }
});


module.exports = CalculatorButton;

