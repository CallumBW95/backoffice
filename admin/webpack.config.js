const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: `${path.resolve(__dirname, 'src')}/index.html`
})

module.exports = {
  entry: `${path.resolve(__dirname, 'src')}/app.js`,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:[{
          loader: 'babel-loader'
        }]
      }
    ]
  },
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'build/'),
  },
  plugins: [HTMLWebpackPluginConfig]
};