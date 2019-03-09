const path = require('path');
module.exports = {
  target: 'node',

  entry: './src/client.js',
  output: {
    filename: 'client.bundle.js',
    path: path.resolve(__dirname, 'build/public'),
    publicPath: '/build/public'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
