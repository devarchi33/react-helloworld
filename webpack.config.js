module.exports = {
    entry: './src/index.js',
    output: {
        path: './src',
        filename: 'bundle.js',
    },
    devServer: {
        inline: true,
        contentBase: './src',
        port: 3334
    },
    module: {
        loaders: [
            {
                test: /\js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};