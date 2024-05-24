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
                test: /\.html$/,
                use: ['html-loader']
            }, {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.css$/i,
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
            template: './src/html/pedido.html',
            filename: 'pedido.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/html/ofertas.html',
            filename: 'ofertas.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/html/buscar.html',
            filename: 'buscar.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/html/meusdados.html',
            filename: 'meusdados.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/html/formasdepagamento.html',
            filename: 'formasdepagamento.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/html/historico.html',
            filename: 'historico.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/html/configuracoes.html',
            filename: 'configuracoes.html',
        }),
    ],
};