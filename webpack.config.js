var webpack = require('webpack'),
    extend = require('extend'),
    path = require("path"),
    Paths = require("./config.paths"),
    config = require("./webpack.common");

const WebPackHotMiddleware = 'webpack-hot-middleware/client?reload=true';

const clientConfig = extend(true, {}, config, {
    name: 'client.dev',
    entry: {
        bundle: [
        'eventsource-polyfill',
        WebPackHotMiddleware,
        path.resolve(Paths.src, './client.js')]
    },
    output: {
        path: Paths.build,
        publicPath: Paths.publicPath,
        filename: "[name].js"
    }
});

module.exports = clientConfig;
