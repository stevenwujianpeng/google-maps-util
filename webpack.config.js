const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'google-maps-util.js',
    path: path.resolve(__dirname, 'dist')
  }
};
