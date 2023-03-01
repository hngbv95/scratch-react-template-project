
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
    }
}