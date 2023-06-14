const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  output: {
    filename: '[name].bundle.js',
  },
  devServer: {
    // https://webpack.js.org/configuration/dev-server
    static: [path.join(__dirname, '..', 'build')]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}
