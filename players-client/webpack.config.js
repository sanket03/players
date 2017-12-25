const path = require('path');
const webpack = require('webpack');
const extractTextPlugin = require('extract-text-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const workboxPlugin = require('workbox-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');

const buildPath = path.resolve(__dirname, 'build');
const sourcePath = path.resolve(__dirname, 'src');
const publicPath = path.resolve(__dirname, 'public');
const isProd = process.env.NODE_ENV === 'production';
const jsFileName = isProd ?  'static/js/[name].[chunkhash:8].js' : 'static/js/[name].js';
const cssFileName = isProd ? 'static/css/[name].[chunkhash:8].css' : 'static/css/[name].css';

const browserConfig = {
    entry: {
        index: sourcePath + '/scripts/utilities/index.js',
        vendor: ['react', 'react-dom', 'redux', 'redux-logger']
    },
    output: {
        path: buildPath,
        filename: jsFileName
    },
    module: {
        rules: [{        
                test: /\.js?/,
                include: [sourcePath],
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-2']
                }
            },

            {
                test: [/\.bmp$/, /\.gif$/, /\.svg$/, /\.jpe?g$/, /\.png$/],
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  name: isProd ? 'static/media/[name].[hash:8].[ext]' : 'static/media/[name].[ext]',
                },
            },

            {
                test: /.css$/,
                use: extractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader?url=false','sass-loader']             
                })
            }]
    },
    plugins: [

        new webpack.DefinePlugin({
            'process.env': {
              'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),

        new extractTextPlugin({
            filename: cssFileName,
            disable: false,
            allChunks: true
         }),

         new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            path: buildPath,
            filename: jsFileName,
            minChunks: Infinity
        }),

        new htmlWebpackPlugin({
            inject: true,
            template: path.join(publicPath, '/index.html')
          }),

        new copyWebpackPlugin([
            { from: require.resolve('workbox-sw'), to: path.join(buildPath, '/static/js/workbox-sw.prod.js') },
            { from: path.join(publicPath, 'manifest.json'), to: buildPath }
        ])
        ]
};

isProd && browserConfig.plugins.push(
        new cleanWebpackPlugin([buildPath],
        new workboxPlugin({
            globDirectory: buildPath,
            globPatterns: ['**/*.{html,js,css}'],
            swSrc: path.join(publicPath, 'sw.js'),
            swDest: path.join(buildPath, 'sw.js')
        })
    ));


module.exports = [browserConfig];