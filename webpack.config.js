const path = require('path');
const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = {
    entry: './src/js/oncoprint.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'oncoprint.bundle.js',
        library: 'oncoprintjs',
        libraryTarget: 'commonjs-module'
    },
    plugins: [
        new WebpackShellPlugin({onBuildStart:['rm -r dist', 'mkdir dist']})
    ]
};