// webpack.config.js
var webpack = require('webpack');

module.exports = {
  context: __dirname + '/app',
  entry: './index.js',

  output: {
    filename: 'bundle.js',
    path: __dirname + '/build'
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
};
