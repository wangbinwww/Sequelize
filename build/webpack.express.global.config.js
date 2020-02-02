const path = require('path');
const nodeExternals = require('webpack-node-externals')
const webpack = require('webpack');

const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')

module.exports = {
    mode: 'development', // 开发模式
    entry: {
        main: path.resolve(__dirname, '../src/main_express.js'), // 入口文件
        //vendor: ['express'],

    },
    output: {
        filename: "[name].[hash:2].js", // 打包后的文件名称
        path: path.resolve(__dirname, "../dist/express_global"), // 打包后的目录
        publicPath: "../dist",
        //libraryTarget: 'commonjs',
    },
    target: "node",
    plugins: [
        new CleanWebpackPlugin(),

    ],


    externals: [
        nodeExternals(),
    ],





}