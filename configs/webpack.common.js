
//config loader scss/sass ts/js
// images??
// code splitting and lazy loading

/** @type {import('webpack').Configuration}  */
module.exports = {
    resolve: ['tsx', 'ts', '...'],
    module: {
        rules: [
            {
                test: /\.(css|s[a|c]ss)$/
            },
            {
                test: /\.(ts|tsx|js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            }
        ],
    }
}