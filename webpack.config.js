import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'node:path';

export default {
    entry: './src/js/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve('docs'),
    },
    module:
    {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/html/index.html',
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/html/pagina2.html',
            filename: 'pagina2.html',
        })
    ],
};