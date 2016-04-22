var jsdom = require('jsdom');

module.exports = function(){
    global.document = jsdom.jsdom('<!doctype html><html><body id="app"></body></html>');
    global.window = document.defaultView;
    global.navigator = {userAgent: 'node.js'};
};
