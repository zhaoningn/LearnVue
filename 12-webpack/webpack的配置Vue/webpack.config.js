const path = require('path')

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
                test:/\.vue$/,
                use: ['vue-loader']
            }
        ]
    }
}