
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/sloth.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'MotivationalSloth',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.js'],
  },
};
