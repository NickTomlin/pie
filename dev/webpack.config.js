const path = require('path');

module.exports = {
  entry:  path.resolve(__dirname, 'dev/index.js')
  plugins: [],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '..', 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [['transform-react-jsx', { pragma: 'h' }]],
          }
        }
      }
    ]
  }
};
