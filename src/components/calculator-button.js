"use strict";

var React = require("react"),
    PropTypes = React.PropTypes;

var CalculatorButton = React.createClass({
    propTypes: {
        value: PropTypes.string
    },
    render: function () {
        return (
          <input type="button" className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab" value={this.props.value} onClick={this.props.onClick}/>
        );
    }
});


module.exports = CalculatorButton;

