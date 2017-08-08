const path = require('path');
const dist = path.resolve(__dirname, '..', 'dist')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry:  path.resolve(__dirname, 'index.js'),
  plugins: [],
  output: {
    filename: '[name].bundle.js',
    path: dist
  },
  devServer: {
    contentBase: dist,
    watchContentBase: true
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
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Preact Pie',
      template: `${__dirname}/index.ejs`
    })
  ]
};
