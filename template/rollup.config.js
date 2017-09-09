import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import vue from 'rollup-plugin-vue2'
// import eslint from 'rollup-plugin-eslint'
import uglify from 'rollup-plugin-uglify'
import sass from 'rollup-plugin-sass';
import filesize from 'rollup-plugin-filesize'
import autoprefixer from 'autoprefixer'
import postcss from 'postcss'
import csso from 'postcss-csso';
import { minify } from 'uglify-es'
import uppercamelcase from 'uppercamelcase'
import decamelize from 'decamelize'

const isProduction = process.env.NODE_ENV === `production`
const isDevelopment = process.env.NODE_ENV === `development`

const libraryName = uppercamelcase('{{ name }}')
const distName = decamelize(libraryName, '-')

const libPath = (isDevelopment 
      ? 'dist/'+ distName + '.js' 
      : 'dist/'+ distName + '.min.js')
  
const cssPath = (isDevelopment 
      ? 'dist/'+ distName + '.css' 
      : 'dist/'+ distName + '.min.css')

const config = {
  input: 'libentry.js',
  output: {
    file: libPath,
    format: 'umd',
    name: 'Vue'
  },
  external: ['vue'],
  plugins: [
    vue (),
    resolve({ jsnext: true, main: true, browser: true }),
    // eslint(),
    sass({
      include: [ '**/*.css', '**/*.scss' ],
      options: {includePaths: ['node_modules']},
      output: cssPath,
      processor: css => postcss((isDevelopment
                          ? [autoprefixer()]
                          : [autoprefixer(), csso()]))
                        .process(css)
                        .then(result => result.css)
    }),
    commonjs (),
    ... ( isProduction
          ? [ uglify({}, minify), filesize() ] 
          : [] ),
    babel({
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
    }),
  ],
  sourcemap: isDevelopment
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
