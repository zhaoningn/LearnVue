const path = require('path')

module.exports = {
    entry: './src/main.js',
    output: {
        //动态获取path
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
}