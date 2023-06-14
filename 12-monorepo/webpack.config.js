const path = require('path');
const { readdirSync } = require('fs');
const nodeExternals = require('webpack-node-externals');


// const entries = {
//     'packages/button/lib/index.production': './packages/button/index.js',
//     'packages/footer/lib/index.production': './packages/footer/index.js',
//     'packages/image/lib/index.production': './packages/image/index.js'
// }

const entries = readdirSync('./packages').reduce((initial, moduleName) => {
    const modulePath = `./packages/${moduleName}`;
    const entryPath = `${modulePath}/index.js`;
    const entryName = `packages/${moduleName}/lib/index.production`;
    return {...initial, [entryName]: entryPath }
}, {});

module.exports = {
  mode: 'development',
  entry: entries,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '.'),
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
    ]
  },
//   externals: [nodeExternals()],
};
