const path = require('path')

module.exports = {
    entry: './src/main.js',
    output: {
        //动态获取path
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        //之后涉及到url的地方，前面都会加上dist
        publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                //用于匹配文件
                test: /\.css$/,
                //css-loader只负责将css文件进行加载，不负责解析
                //style-loader负责将样式添加到Dom中
                //使用多个loader时，是从右向左
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            //当加载的图片小于limit时，会将图片编译成base64字符串形式
                            //当加载的图片大于limit时，需要使用file-loader模块进行加载
                            limit: 99999,
                            name: 'img/[name].[hash:8].[ext]'
                        },
                    }
                ]
            }
        ]
    }
}