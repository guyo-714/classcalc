var webpack = require('webpack'),
    path = require("path"),
    Paths = require("./config.paths"),
    IconsPlugin = require('icons-loader/IconsPlugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

const DEBUG = true;
const VERBOSE = true;
const RUN_TIMESTAMP = Math.round(Date.now() / 1000);

var commonLoaders = [
    {
        test: (/\.js$/|/\.jsx$/),
        include: [Paths.src],
        loader: 'babel-loader',
        query: {
            presets: ['react', 'es2015', 'stage-0']
        }
    },
    {test: /\.png$/, include: [Paths.src], loader: 'url-loader?limit=8192'},
    {test: /\.jpg$/, include: [Paths.src], loader: 'file-loader'},
    {test: /\.svg$/, include: [Paths.src], loader: 'icons-loader'},
    {
        test: /\.css$/,
        include: [path.resolve(Paths.srcPublic,'./assets')],
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
    },
    {
        test: /\.scss$/,
        include: [path.resolve(Paths.srcPublic,'./assets')],
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader, sass-loader')
    }
];

var commonPlugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new IconsPlugin({
        fontName: 'icons',
        timestamp: RUN_TIMESTAMP,
        normalize: true,
        formats: ['ttf', 'eot', 'woff', 'svg']
    }),
    new ExtractTextPlugin('style.css', {
        allChunks: true
    })
];

var config = {
    debug: DEBUG,
    devtool: 'source-map',
    module: {
      loaders: commonLoaders
    },
    plugins: commonPlugins,
    resolve:{
        extentions: ['', '.js', '.jsx', '.less', '.css']
    },
    stats: {
        colors: true,
        reasons: DEBUG,
        hash: VERBOSE,
        version: VERBOSE,
        timings: true,
        chunks: VERBOSE,
        chunkModules: VERBOSE,
        cached: VERBOSE,
        cachedAssets: VERBOSE,
    }
};

module.exports = config;