const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const WIDGET_PATH = process.env.WIDGET_PATH || false

const resolve = WIDGET_PATH
  ? {
    alias: {
      'uploadcare-widget': path.join(
        WIDGET_PATH, 'uploadcare-widget', 'pkg', 'latest', 'uploadcare.min.js'
      ),
      'jquery': path.join(__dirname, 'node_modules', 'jquery', 'dist', 'jquery.min.js'),
    },
  }
  : {}

console.log(resolve)

module.exports = {
  entry: {app: './client/index.js'},
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({template: './src/template.html'}),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|pkg)/,
        use: {loader: 'babel-loader'},
      },
    ],
  },
  resolve,
}
