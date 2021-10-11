const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ],
    },
    // plugins: [
    //     new BrowserSyncPlugin({
    //         notify: false,
    //         files: [
    //             './templates/frontend/*.html',
    //             './src/*.jsx'
    //         ],
    //         proxy: '127.0.0.1:8000'
    //     })
    // ]
};