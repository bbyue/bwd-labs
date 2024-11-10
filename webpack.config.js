const path = require('path'); // Импортируем модуль path
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Импортируем HtmlWebpackPlugin

module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    module: {
        rules: [
            {
                test: /.css$/, // Для обработки CSS файлов
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /.(png|jpg|gif|svg)$/, // Для обработки изображений
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]', // Формат имени выходного файла
                            outputPath: './', // Папка для изображений
                        },
                    },
                ],
            },
        ],
    },

    plugins: [
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
