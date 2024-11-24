const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    module: {
        rules: [
            {
                test: /.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /.(png|jpg|gif|svg)$/, 
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: './img/', 
                        },
                    },
                ],
            },
        ],
    },

    plugins: [
        new CopyPlugin({
            patterns: [
                {from: './src/img/favicon.png', to: 'dist'},
            ],
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: true,
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/404.html',
            inject: true,
            filename: '404.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/about.html',
            inject: true,
            filename: 'about.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/add-task.html',
            inject: true,
            filename: 'add-task.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/projects.html',
            inject: true,
            filename: 'projects.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/tasks.html',
            inject: true,
            filename: 'tasks.html'
        }),
    ],

    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        open: true,
    },

    mode: 'development',
};
