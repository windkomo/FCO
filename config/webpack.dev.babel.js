const fs                = require('fs');
const path              = require('path');
const webpack           = require('webpack');
const base              = require('./webpack.base.babel');

const HtmlWebpackPlugin = require('html-webpack-plugin');

// ## //

module.exports = base({
    entry: [
        'babel-regenerator-runtime',
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:5100',
        'webpack/hot/only-dev-server',
        `${base.PATHS.app}/index`
    ],

    output: {
        filename: 'scripts/bundle.js',
        chunkFilename: 'scripts/[name].chunk.js'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),

        new HtmlWebpackPlugin({
            templateContent: fs.readFileSync(path.resolve(process.cwd(), 'src/index.html')).toString(),
            inject: true
        }),
    ],

    localLessLoader: [
        'style',
        'css?modules&importLoaders=1&localIdentName=[folder]__[local]-[hash:base64:5]',
        'resolve-url',
        'postcss',
        'less'
    ].join('!'),

    globalLessLoader: [
        'style',
        'css',
        'resolve-url',
        'postcss',
        'less'
    ].join('!'),

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
        port: 5100,
        hot: true,
        historyApiFallback: true,
        stats: {
            colors: true,
            cached: false,
            cachedAssets: false,
        }
    }
});
