"use strict";

var React = require('react'),
    ReactDom = require('react-dom'),
    CalculatorView = require("./components/calculator-view");


ReactDom.render( <CalculatorView/>, document.getElementById('content')
)