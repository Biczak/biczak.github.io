/* eslint-disable */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: ['./src/index.jsx'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
      Containers: path.resolve('src/containers/')
    },
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [{
      exclude: /node_modules|packages/,
      test: /\.jsx?$/,
      use: 'babel-loader',
    }, ],
  },
  plugins: [new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'public/index.html',
    title: 'Alex Biczak - Software Engineer'
  }), new webpack.NamedModulesPlugin()],
};