/*
 * @Author: Finson
 * @LastEditors  : Finson
 */

 const path = require('path')
 const HtmlWebpackPlugin = require('html-webpack-plugin') // 导入在内存中自动生成index页面的 插件 

 // 创建一个插件的实例对象
 const htmlPlugin = new HtmlWebpackPlugin({
     template: path.join(__dirname, './src/index.html'), // 源文件
     filename: 'index.html', // 生成的内存中首页的名称
 })

// 向外暴露一个打包的配置对象；因为 webpack 是给予Nodee 构建的，所以webpack支持nodejs的Node所有 API 和 语法

module.exports = {
    mode: 'production', //development  production
    // 在 webpack 4.x 中，有一个很大的特性，就是 约定大于配置，约定 默认的打包入口文件是 src-> index.js
    plugins: [
        htmlPlugin
    ]
}