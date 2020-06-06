const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const uglifyJsPlugin = require('uglifyjs-webpack-plugin')


module.exports = {
    entry: './src/main.js',
    output: {
        //动态获取path
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        //alias别名
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('最终版权归赵凝所有'),
        new HtmlWebpackPlugin({
            //作为模板
            template: 'index.html'
        }),
        //开发不要压缩
        // new uglifyJsPlugin()
    ],
    devServer: {
        contentBase: './dist',
        inline: true
    }
}