const webpack           = require('webpack');
const base              = require('./webpack.base.babel');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// ## //

const css = {
    local: new ExtractTextPlugin('styles/local.[contenthash].css'),
    global: new ExtractTextPlugin('styles/global.[contenthash].css')
};

module.exports = base({
    entry: [
        'babel-regenerator-runtime',
        `${base.PATHS.app}/index`
    ],

    output: {
        filename: 'scripts/[name].[chunkhash].js',
        chunkFilename: 'scripts/[name].[chunkhash].chunk.js'
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            children: true,
            minChunks: 2,
            async: true
        }),

        new webpack.optimize.OccurrenceOrderPlugin(true),

        new webpack.optimize.DedupePlugin(),

        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),

        new HtmlWebpackPlugin({
            template: 'src/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
            inject: true
        }),

        css.global,
        css.local
    ],

    localLessLoader: css.local.extract([
        'css?modules&importLoaders=1&localIdentName=[folder]__[local]-[hash:base64:5]',
        'resolve-url',
        'postcss',
        'less'
    ]),

    globalLessLoader: css.global.extract([
        'css',
        'resolve-url',
        'postcss',
        'less'
    ]),

    postcssPlugins: [
        require('postcss-focus')(),
        require('postcss-cssnext')({
            browsers: ['last 2 versions', 'IE > 10']
        }),
        require('postcss-reporter')({
            clearMessages: true
        })
    ],

    devtool: 'cheap-module-eval-source-map',

    devServer: {
        port: 3000,
        hot: true,
        historyApiFallback: true,
        stats: {
            colors: true,
            cached: false,
            cachedAssets: false,
        }
    }
});
