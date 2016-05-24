"use strict";

var _ = require("lodash"),
    TestUtils = require("react-addons-test-utils"),
    ReactDom = require("react-dom");



const CalcTestHelper = {
    getButtonDomNodeByValue: function (buttonArray, btnValue){
        var idx = _.findIndex(buttonArray, function(item) {return _.isEqual(btnValue, item.props.value);}),
            result = null;

        if (idx >= 0 && idx < buttonArray.length) {
            result = ReactDom.findDOMNode(buttonArray[idx]);
        }

        return result;
    },
    clickButtonWithValue: function (buttonArray, btnValue) {
        var btn = this.getButtonDomNodeByValue(buttonArray, btnValue);

        if (btn) {
            TestUtils.Simulate.click(btn);
        } else {
            throw new Error("No button with value: " + btnValue);
        }
    }
};

module.exports = CalcTestHelper;
