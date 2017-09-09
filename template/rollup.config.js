import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import vue from 'rollup-plugin-vue2'
import eslint from 'rollup-plugin-eslint'
import uglify from 'rollup-plugin-uglify'
import sass from 'rollup-plugin-sass';
import filesize from 'rollup-plugin-filesize'
import autoprefixer from 'autoprefixer'
import postcss from 'postcss'
import csso from 'postcss-csso';
import { minify } from 'uglify-es'

const isProduction = process.env.NODE_ENV === `production`
const isDevelopment = process.env.NODE_ENV === `development`

const distName = '{{ kebabcase name }}'
const umdName = '{{ camelcase name }}Plugin'

const libPath = (isDevelopment 
      ? `dist/${distName}.js` 
      : `dist/${distName}.min.js`)
  
const cssPath = (isDevelopment 
      ? `dist/${distName}.css` 
      : `dist/${distName}.min.css`)

const sassConfig = {
  include: [ '**/*.css', '**/*.scss' ],
  options: {includePaths: ['node_modules']},
  output: cssPath,
  processor: css => postcss((isDevelopment
                      ? [autoprefixer()]
                      : [autoprefixer(), csso()]))
                    .process(css)
                    .then(result => result.css)
}

const babelConfig = {
  presets: [ 
    [
      'es2015', 
      {modules: false} 
    ]
  ],
  babelrc: false,
  plugins: [
    'external-helpers'
  ]
}

const config = {
  input: 'libentry.js',
  output: {
    file: libPath,
    format: 'umd',
    name: umdName
  },
  external: ['vue', 'vue-router', 'vuex'],
  plugins: [
    eslint({ include: [ '**/*.js', '**/*.vue' ] }),
    vue (),
    resolve({ jsnext: true, main: true, browser: true }),
    sass(sassConfig),
    commonjs (),
    babel(babelConfig),
  ],
  sourcemap: isDevelopment
}

if (isProduction) {
  config.plugins.push(uglify({}, minify))
  config.plugins.push(filesize())
}


if (isDevelopment) {
  // config.plugins.push(livereload())
  // config.plugins.push(serve({
  //   contentBase: './public/',
  //   port: 8080,
  //   open: true
  // }))
}

export default config
