const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = function (env) {

    return [{
        name: 'browser',
        entry: {
            browser: ['./src/client/browser.tsx']
        },
        output: {
            path: path.resolve(__dirname, './assets'),
            filename: '[name].js'
        },
        resolve: {
            extensions: ['.ts', '.js', '.tsx', '.less'],
        },
        module: {
            rules: [
                {test: /\.tsx?$/, use: ["awesome-typescript-loader"], exclude: /node_modules/},
            ]
        },
    }, {
        entry: {
            server: ['./src/server/server-gallery.ts']
        },
        output: {
            path: path.resolve(__dirname, './assets'),
            filename: '[name].js',
            libraryTarget: "umd",
        },
        target: 'node',
        resolve: {
            extensions: ['.ts', '.js', '.tsx', '.less'],
            alias: {
                "client-logger": path.resolve(__dirname, 'packages/rewrite-client-logger/logger')
            }
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: "awesome-typescript-loader",
                    options: {configFileName: 'tsconfig-server.json'}
                }
            ]
        },
        externals: [nodeExternals()]
    }]

};

