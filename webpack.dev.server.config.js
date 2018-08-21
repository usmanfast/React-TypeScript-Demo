var webPackConfig = require('./webpack.app.config');
var webpackMerge = require('webpack-merge');

module.exports = webpackMerge(webPackConfig, {
    devServer: {
        historyApiFallback: true,
        compress: true,
        stats: {
            colors: true
        },
        contentBase: ["./"],
        port: "4321",
        
    }
});