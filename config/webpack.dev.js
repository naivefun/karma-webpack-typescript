const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

module.exports = {
    devtool: 'cheap-source-map',
    entry: {
        'index': './src/index.ts'
    },
    output: {
        filename: 'dist/[name].js',
        sourceMapFilename: 'dist/[name].source.map',
        library: 'lib',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['.ts', '.js'],
        modules: ['node_modules']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'awesome-typescript-loader'
                    }
                ],
                exclude: [/\.e2e\.ts$/]
            }
        ]
    },
    plugins: [

    ],
    node: {
        global: true,
        process: false,
        crypto: 'empty',
        module: false,
        clearImmediate: false,
        setImmediate: false
    }
};
