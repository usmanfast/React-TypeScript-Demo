var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
   
    output: {
        path: path.resolve(process.cwd()),
        filename: "[name].js",
        sourceMapFilename: "[name].js.map",
        chunkFilename: '[id].chunk.js',
        pathinfo: true
    },
    
    resolve: {
        extensions: [
            ".ts",
            ".js",
            ".jsx",
            ".tsx"
        ]
    },
  

    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[name].js.map'
        }),
        new HtmlWebpackPlugin({
            title: "<Library Name>",
            filename: "./Default.html",
            template: "./Default-Template.ejs",
            inject: true
        })
    ],
            
    module: {
        rules: [            
            {
                test: /\.(ts|tsx)?$/,
                use: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: { configFileName: './tsconfig.json' }
                    }
                    
                ],
                exclude: [/\.(spec|e2e)\.ts$/]
            },
            {
                test: /\.(js)$/,
                enforce: "pre",
                use: [
                    { loader: 'source-map-loader' }
                ]
            }
        ]
    }
};