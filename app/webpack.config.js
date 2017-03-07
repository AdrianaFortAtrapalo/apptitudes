var webpack = require('webpack');

module.exports = {
    entry : {
        app : './js/main.js'
    },
    output: { filename: 'bundle.js' },
    module: {
        loaders: [
            {
                test: /.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    'presets': ['es2015'],
                    'comments': false
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    vue: {
        loaders: {
            js: 'babel?presets[]=es2015'
        }
    }
};
