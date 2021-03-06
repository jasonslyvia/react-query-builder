var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: './index',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  resolveLoader: {
    modulesDirectories: ['node_modules']
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot-loader', 'babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader?sourceMap'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.NormalModuleReplacementPlugin(
      /^react-query-builder/, function (data) {
        const suffix = data.request.substring('react-query-builder'.length);
        data.request =  path.resolve(__dirname, '../modules/' + suffix);
      }
    )
  ]
};
