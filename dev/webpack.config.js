const path = require('path')
const docs = path.resolve(__dirname, '..', 'docs')
const dist = path.resolve(__dirname, '..', 'dist')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    filename: '[name].bundle.js',
    path: docs
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
            plugins: [['transform-react-jsx', { pragma: 'h' }]]
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
}
