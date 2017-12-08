const webpack = require('webpack');

let config = {
    entry: './main.js',
    output: {
        filename: 'output.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loader: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
}

module.exports = config;