const path = require('path')
const docs = path.resolve(__dirname, '..', 'docs')
const dist = path.resolve(__dirname, '..', 'dist')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    preact: path.resolve(__dirname, 'index.preact.js'),
    react: path.resolve(__dirname, 'index.js')
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
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [['transform-react-jsx']]
          }
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
