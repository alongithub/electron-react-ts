const path = require('path');
// const { dependencies } = require('../package.json')
module.exports = {
  mode: 'production',
  entry: {
    main: './src/main/index.js'
  },
  // externals: [
  //   ...Object.keys(dependencies || {})
  // ],
  output: {
    libraryTarget: 'commonjs2',
    filename: '[name].js',
    path: path.resolve('./dist/electron'),
  },
  node: {
    // fs: 'empty'
  },
  target: 'electron-main',
}