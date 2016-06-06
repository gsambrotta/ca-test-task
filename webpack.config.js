'use strict';

const webpack = require('webpack');

module.exports = {
	devtool: 'eval',
  entry: './js/app.js',
  output: {
    path: './dist',
    filename: 'bundle.js',
    publicPath: '/build/'
   },
   module: {
        loaders: [
            { test: /js[\\\/]app\.js$/, loader: 'amd-define-factory-patcher-loader' }
        ]
    }
 };
