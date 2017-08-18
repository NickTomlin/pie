const {resolve} = require('path')
const docs = resolve(__dirname, '..', 'docs')
const dist = resolve(__dirname, '..', 'dist')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    preact: resolve(__dirname, 'index.preact.js'),
    react: resolve(__dirname, 'index.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: docs
  },
  devServer: {
    contentBase: dist,
    watchContentBase: true
  },
  devtool: 'cheap-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|dist)/, // we pre-bundle source
        use: {
          loader: 'babel-loader',
          options: require('../.babelrc.js')
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Pie',
      template: `${__dirname}/template.html.ejs`
    })
  ],
  resolve: {
    alias: {
      '@nicktomlin/pie': `${dist}/pie.js`,
      '@nicktomlin/pie.preact': `${dist}/pie.preact.js`
    }
  }
}
