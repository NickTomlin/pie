import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import alias from 'rollup-plugin-alias'

let babelPresets = require('./.babelrc.js')
babelPresets.plugins = babelPresets.plugins.concat(['external-helpers'])

const IS_PROD = process.env.NODE_ENV === 'production'
const IS_PREACT = process.env.BUILD_TYPE === 'preact'

export default {
  entry: 'src/index.js',
  moduleName: `pie${IS_PREACT ? '.preact' : ''}`,
  format: 'cjs',
  external: [IS_PREACT ? 'preact' : 'react'],
  plugins: [
    commonjs({include: 'node_modules/**'}),
    alias(IS_PREACT ? {react: 'preact'} : {}),
    resolve(),
    babel({
      exclude: 'node_modules/**',
      presets: babelPresets
    }),
    (IS_PROD && uglify())
  ],
  dest: `dist/pie${IS_PREACT ? '.preact' : ''}.js`
}
