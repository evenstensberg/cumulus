const path = require('path');

module.exports = {
  mode: 'production',
  entry: './dist/src/index.js',
  output: {
    chunkFormat: false,
    libraryTarget: 'commonjs2',
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  externals: [],
  target: 'node',
  devtool: 'eval-cheap-module-source-map',
  optimization: {
    nodeEnv: false
  }
};