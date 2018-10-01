const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: `${path.resolve(__dirname, 'src')}/index.html`
})

module.exports = {
  mode: 'development',
  entry: `${path.resolve(__dirname, 'src')}/index.js`,
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          // MiniCssExtractPlugin.loader,
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  output: {
    filename: 'build/js/bundle.js',
    path: path.resolve(__dirname),
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new MiniCssExtractPlugin({
      filename: 'build/css/style.css',
      // chunkFilename: DEV_MODE ? '[id].css' : '[id].[hash].css'
    })
  ]
};