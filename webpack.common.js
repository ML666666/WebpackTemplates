const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry: {
        app:'./src/index.js',
        another:'./src/js/another-module.js'
    },
    devtool: 'inline-source-map',
    output:{
        filename: '[name].bundle.js',
        path:path.resolve(__dirname,'dist'),
        // publicPath: '/'
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template:'./index.html'
        }),
    ],
    optimization: {
             splitChunks: {
              name: 'common'
            }
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    module:{
        rules:[
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
              test:/\.css$/,
              use:[
                'style-loader',
                'css-loader'
              ]
            },
            {
              test:/\.(png|svg|jpg|gif)$/,
              use:[
                 'file-loader'
              ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use:[
                   'file-loader'
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                     ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    }
}