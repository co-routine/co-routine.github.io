import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'

export default {
  input: 'source/javascript/application.js',
  output: {
    file: 'public/dist/javascript/application.js',
    format: 'iife',
    name: 'main'
  },
  plugins: [
    babel(),
    uglify()
  ]
}
