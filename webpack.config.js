const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const webpackConfig = {
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: `[name].bundle.js`
    },
    module: {
        rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/mode_modules/',
                options: {
                    presets: ['@babel/preset-env']
                }
            },
            {
                test: /\.css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: 'css-loader' },
                    { loader: 'postcss-loader' }
                ]
            },
            {
                test: /\.styl$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: 'css-loader' },
                    { loader: 'postcss-loader' },
                    { loader: 'stylus-loader' }
                ]
            },
            {
                test: /\.(gif|jpg|jpeg|png|svg|ttf)$/,
                loader: 'url-loader',
                options: {
                    limit: 1024
                }
            }
        ]
    },
    plugins: [
        new UglifyJSPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].bundle.css',
            chunkFilename: '[id].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
        new HtmlWebpackPlugin({
            title: 'es7-cli',
            template: 'index.html',
            hash: true,
            minify: true
        })
    ]
}

module.exports = webpackConfig