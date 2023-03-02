const commonConfig = require('./webpack.common');

// entry point index.html
// start webpack dev servb

/** @type {import('webpack').Configuration}  */
module.exports = {
    ...commonConfig,
    output: {
        filename: '[name].bundle.js'
    },
    optimization : {
        splitChunks: {
            chunks: 'all'
        }
    },
    mode: 'production',
}