var express = require('express'),
    path = require('path'),
    webpackConfig = require('../webpack.dev.config.js'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware'),
    Paths = require("../config.paths");

const isDev = process.env.NODE_ENV !== 'production';
const port = isDev ? 3000 : process.env.PORT;

var app = express();

app.use(express.static(Paths.src));

if(isDev){
    var webpack = require('webpack');
    const compiler = webpack(webpackConfig);
    var middleware = webpackDevMiddleware(compiler, {
        noInfo: true,
        publicPath: webpackConfig.output.publicPath,
        contentBase: Paths.src
    });

    app.use(middleware);
    app.use(webpackHotMiddleware(compiler));
}

app.get('/', function(req, res){
   res.sendFile(path.resolve(Paths.src,'index.html'));
});

app.listen(port, '0.0.0.0', function(err){
   if(err){
       console.log(err);
       return;
   }

    console.info('Listening on port %s', port);
    console.log(Paths.src);
});
