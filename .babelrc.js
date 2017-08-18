const IS_TEST = process.env.NODE_ENV === 'test'

module.exports = {
  presets: [['env', IS_TEST ? {} : { 'modules': false }], 'react'],
  plugins: [
    'syntax-object-rest-spread'
  ]
}
