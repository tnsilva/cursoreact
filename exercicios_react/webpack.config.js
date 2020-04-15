const webpack = require('webpack')

module.exports = {
    entry: './ex/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public',
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ["@babel/env", "@babel/react"]
            }

        }]
    }
}