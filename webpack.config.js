const path = require('path'); 
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const EncodingPlugin = require('webpack-encoding-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: `[name].[chunkhash:5].js`,
        path: path.resolve(__dirname, 'dist')
    },
    
    devtool: 'inline-source-map',

    devServer: {
        historyApiFallback: true,
        open: false,
        hot: true,
        port: 8082
    },

    module: {
        rules: [
            {
                test:/\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                    },
                }, 'sass-loader']
            }
        ]
    },

    plugins: [
        new HtmlWebPackPlugin({
            titel: 'react app',
            filename: 'index.html',
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
        new EncodingPlugin({
            encoding: 'UTF-8'
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            '@styles': path.resolve(__dirname, 'styles')
        }
    }
}