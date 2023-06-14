const path = require('path');
const src = path.resolve(__dirname, '..', 'src');

module.exports = {
  entry: {
    main: path.join(src, 'main.js'),
    other: path.join(src, 'other.js'),
  },
  output: {
    path: path.resolve(__dirname, '..', 'build'),
    clean: true
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minChunks: 3,
      minSize: 1 // Required for this example to get cats.js split into its own chunk.  Defaults to 30k.
    }
  },
}
