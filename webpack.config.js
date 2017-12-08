const webpack = require('webpack')
const path = require('path')
const Etwp = require('extract-text-webpack-plugin')

let config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './public'),
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
                use: Etwp.extract({
                    use: ['css-loader', 'sass-loader'],
                    fallback: 'style-loader'
                })
            }
        ] 
    },
    plugins: [
        new Etwp('style.css') // Call the extract plugin and name your css file
    ],
    devServer: {
        contentBase: path.resolve(__dirname, './public'), // The directory to serve HTML content from
        historyApiFallback: true, // Fallback to index.html for SPA's (404's etc)
        inline: true, // Set to fasle to disable including client scripts (like livereload)
        open: false // Set to true to open default browser while launching
    },
    devtool: 'eval-source-map' // Enable devtools (better debugging)
}

module.exports = config;