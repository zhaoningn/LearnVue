//生产时
const uglifyJsPlugin = require('uglifyjs-webpack-plugin')
//合并
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig,{
    plugins: [
        new uglifyJsPlugin()
    ]
})