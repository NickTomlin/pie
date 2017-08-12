import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'

const IS_PROD = process.env.NODE_ENV === 'production'

export default {
  entry: 'src/index.js',
  format: 'cjs',
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    (IS_PROD && uglify())
  ],
  dest: 'dist/pie.cjs.js'
}
