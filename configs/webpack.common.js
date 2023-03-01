// Init root html file, use an html template file if need any further configuration
const HtmlWebpackPlugin = require('html-webpack-plugin');
//config loader scss/sass ts/js
// images??
// code splitting and lazy loading

/** @type {import('webpack').Configuration}  */
module.exports = {
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx', '.json']
    },
    module: {
        rules: [
            {
                test: /\.(css|s[a|c]ss)$/,
                use: ['css-loader']
            },
            {
                test: /\.(ts|tsx|js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            }
        ],
    },
    plugins: [new HtmlWebpackPlugin({template: './src/index.html'})]
}