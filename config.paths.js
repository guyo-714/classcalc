var path = require("path"),
    srcPath = path.resolve(__dirname, "./src"),
    srcPublicPath = path.resolve(srcPath, "./public"),
    buildPath = path.resolve(__dirname, "./build"),
    buildPublicPath = path.resolve(buildPath, "./public"),
    publicPath = "/assets",
    specPath = path.resolve(__dirname, "./specs");

const Paths = {
    src: srcPath,
    srcPublic: srcPublicPath,
    build: buildPath,
    buildPublic: buildPublicPath,
    publicPath: publicPath,
    specPath: specPath
};

module.exports = Paths;