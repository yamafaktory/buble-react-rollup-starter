// Rollup plugins.
import buble from 'rollup-plugin-buble'
import cjs from 'rollup-plugin-commonjs'
import globals from 'rollup-plugin-node-globals'
import jsx from 'rollup-plugin-jsx'
import npm from 'rollup-plugin-npm'
import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'

export default {
  dest: 'build/app.js',
  entry: 'src/index.js',
  format: 'iife',
  plugins: [
    jsx({ factory: 'React.createElement' }),
    buble(),
    cjs({
      exclude: 'node_modules/process-es6/**',
      include: [
        'node_modules/fbjs/**',
        'node_modules/object-assign/**',
        'node_modules/react/**',
        'node_modules/react-dom/**'
      ]
    }),
    globals(),
    npm({ main: true }),
    replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
    resolve({ browser: true })
  ],
  sourceMap: true
}
