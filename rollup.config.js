import { babel } from '@rollup/plugin-babel'

const config = {
  input: 'src/colorfield.js',
  output: {
    dir: 'dist',
    format: 'umd',
    name: 'colorfield',
    sourcemap: true
  },
  plugins: [
    babel({ babelHelpers: 'bundled' })
  ]
}

export default config
