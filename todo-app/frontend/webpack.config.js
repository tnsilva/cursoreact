const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: './app.js' 
    },
    devServer: {
        port: 8080,
        contentBase: './public',
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
            modules: __dirname + '/node_modules'
        }
    },
    plugins: [
        //new ExtractTextPlugin('app.css')
        new MiniCssExtractPlugin({
            filename: `app.css`
          })
    ],
    module: {
        rules: [{
            test: /\.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ["@babel/env", "@babel/react"],
                plugins: ['@babel/plugin-proposal-object-rest-spread']
            }
        }, {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
        }, {
            test: /\.woff|.woff2|.ttf|.eot|.svg*.*/,
            loader: 'file-loader'
        }]
    }
}