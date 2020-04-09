const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './ex/index.js',
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    plugins: [
      //new ExtractTextPlugin('app.css')
      new MiniCssExtractPlugin({
        filename: `app.css`
      }),  
    ],
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ["@babel/env", "@babel/react"],
                plugins: ['transform-object-rest-spread']
            }
        }, {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
        }]
    } 
}