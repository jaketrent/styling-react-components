import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import * as path from 'path'
import postcss from 'rollup-plugin-postcss'
import replace from '@rollup/plugin-replace'
import resolve from '@rollup/plugin-node-resolve'

export default {
  input: 'src/index.js',
  output: {
    file: path.resolve(__dirname, path.join('public', 'bundle.js')),
  },
  plugins: [
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    }),
    commonjs(),
    postcss(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    resolve(),
  ],
}
