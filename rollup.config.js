import resolve from 'rollup-plugin-node-resolve'
import babel from "rollup-plugin-babel"
import {uglify} from "rollup-plugin-uglify"
export default {
  input: "./src/plugin/rollup/main.js",
  output: [{
    file: './dist/index-plugin.cjs.js',
    format: 'cjs',
  }, {
    file: './dist/index-plugin.es.js',
    format: 'es',
  }],
  plugins: [
    resolve(),
    babel({runtimeHelpers: true}),
    uglify()
  ]
}