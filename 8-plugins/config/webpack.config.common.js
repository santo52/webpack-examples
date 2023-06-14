const path = require('path');
const webpack = require('webpack');

const banner = `
/*********************
 * THIS IS OUR STUFF!
 ********************/
`;

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '..', 'build')
  },
  plugins: [
    // https://webpack.js.org/plugins/banner-plugin/
    new webpack.BannerPlugin({
      banner,
      entryOnly: true
    }),
    new webpack.EnvironmentPlugin({
      DEBUG: process.env.NODE_ENV === 'development',
      NODE_ENV: process.env.NODE_ENV
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', // Tells webpack how to append CSS to the DOM as a style tag.
          'css-loader' // Tells webpack how to read a CSS file.
        ]
      },
      {
        test: [/\.jpg$/, /\.png$/],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  },
}
