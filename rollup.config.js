import { babel } from '@rollup/plugin-babel'

const config = {
  input: 'src/kolorfield.js',
  output: {
    dir: 'dist',
    format: 'umd',
    name: 'kolorfield',
    sourcemap: true
  },
  plugins: [
    babel({ babelHelpers: 'bundled' })
  ]
}

export default config
