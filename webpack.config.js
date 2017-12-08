const webpack = require('webpack')
const path = require('path')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssets = require('optimize-css-assets-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')

let config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'output.js'
    },
    resolve: { // These options change how modules are resolved
        extensions: ['.js', '.jsx', '.json', '.scss', '.css', '.jpeg', '.jpg', '.gif', '.png'], // Automatically resolve certain extensions
        alias: { // Create aliases
            images: path.resolve(__dirname, 'src/assets/images')  // src/assets/images alias
        }
    },
    module: {
        rules: [
            { // Javascript files
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            { // Style files (scss, css)
                test: /\.scss$/,
                use: ExtractTextWebpackPlugin.extract({
                    use: ['css-loader', 'sass-loader'],
                    fallback: 'style-loader'
                })
            },
            { // Image files (jpeg, png, gif, svg)
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: ['file-loader?context=src/assets/images/&name=images/[path][name].[ext]', {  // images loader
                    loader: 'image-webpack-loader',
                    query: {
                        mozjpeg: {
                        progressive: true,
                    },
                    gifsicle: {
                        interlaced: false,
                    },
                    optipng: {
                        optimizationLevel: 4,
                    },
                    pngquant: {
                        quality: '75-90',
                        speed: 3,
                    },
                },
            }],
            exclude: /node_modules/,
            include: __dirname,
            },
        ] 
    },
    plugins: [
        new ExtractTextWebpackPlugin('style.css'), // Call the extract plugin and name your css file
        new DashboardPlugin(),
    ],
    devServer: {
        contentBase: path.resolve(__dirname, './public'), // The directory to serve HTML content from
        historyApiFallback: true, // Fallback to index.html for SPA's (404's etc)
        inline: true, // Set to fasle to disable including client scripts (like livereload)
        open: false, // Set to true to open default browser while launching
        compress: true // Enable gzip compression for everything served
    },
    devtool: 'eval-source-map' // Enable devtools (better debugging)
}

module.exports = config;

// NODE_ENV production setup 
if (process.env.NODE_ENV === 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin(), // Call the Uglifyjs-webpack-plugin
        new OptimizeCSSAssets() // Call the optimize-css-assets-webpack-plugin
    );
}
