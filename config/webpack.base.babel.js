const path    = require('path');
const webpack = require('webpack');

// ## //

const PATHS = {
    app: path.join(process.cwd(), 'src'),
    build: path.join(process.cwd(), 'build'),
    images: path.join(process.cwd(), 'assets/images'),
};

module.exports = options => ({
    entry: options.entry,

    output: Object.assign({
        path: PATHS.build,
        publicPath: '/'
    }, options.output),

    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: [
                'babel?cacheDirectory'
            ],
            include: PATHS.app
        }, {
            test: /\.json$/,
            loaders: [
                'json'
            ]
        }, {
            test: /\.less$/,
            loader: options.localLessLoader,
            exclude: PATHS.app + '/styles'
        }, {
            test: /\.less$/,
            loader: options.globalLessLoader,
            include: PATHS.app + '/styles'
        }, {
            test: /\.(eot|svg|ttf|woff|woff2)(\?.*$|$)/,
            loaders: [
                'url'
            ]
        }, {
            test: /\.(jpg|png|gif)(\?.*$|$)/,
            loaders: [
                'url'
            ],
            include: PATHS.images
        }]
    },

    plugins: options.plugins.concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        })
    ]),

    postcss: () => options.postcssPlugins,

    resolve: {
        alias: {
            '~': PATHS.app
        },
        modules: [
            PATHS.app,
            'node_modules'
        ],
        extensions: [
            '',
            '.js',
            '.jsx'
        ]
    },

    devtool: options.devtool,

    devServer: options.devServer,

    target: 'web',

    stats: options.stats,

    progress: true
});

module.exports.PATHS = PATHS;
