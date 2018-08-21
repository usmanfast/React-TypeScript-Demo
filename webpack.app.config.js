var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.config');

module.exports = webpackMerge(commonConfig, {
    entry: {
        "main": ["./main.tsx"]
    },
	// externals: {
	// 	"react": "React",
	// 	"react-dom": "ReactDOM"
	// 	} 
	
});