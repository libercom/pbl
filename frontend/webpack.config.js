const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
    entry: ["regenerator-runtime/runtime.js", path.join(__dirname, "src", "index.js")],
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.scss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, "./static"),
        filename: 'main.js'
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    plugins: [
        // new BrowserSyncPlugin({
        //     notify: false,
        //     files: [
        //         './templates/frontend/*.html',
        //         './src/*.jsx'
        //     ],
        //     proxy: '127.0.0.1:8000'
        // }),
        // new HtmlWebpackPlugin({
        //     template: path.join(__dirname, "src", "index.html"),
        // }),
    ]
}