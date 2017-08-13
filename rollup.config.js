import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'

const IS_PROD = process.env.NODE_ENV === 'production'

export default {
  entry: 'src/index.js',
  moduleName: 'pie',
  format: 'cjs',
  external: ['react'],
  plugins: [
    commonjs({include: 'node_modules/**'}),
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    (IS_PROD && uglify())
  ],
  dest: 'dist/pie.cjs.js'
}
