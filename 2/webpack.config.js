const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /.san$/,
                use: 'san-loader'
            },
            {
                test: /.html$/,
                use: 'html-loader'  
              },
              {
                test: /.css$/,
                use: 'css-loader'  
              },
              {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
              },
              {
                test: /.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'  
              }
        ]
    }
        
    
}