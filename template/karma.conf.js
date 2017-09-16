const resolve = require('rollup-plugin-node-resolve')
const babel =  require('rollup-plugin-babel')
const buble = require('rollup-plugin-buble')
const commonjs = require('rollup-plugin-commonjs')
const vue = require('rollup-plugin-vue2')
const eslint = require('rollup-plugin-eslint')
const uglify = require('rollup-plugin-uglify')
const sass = require('rollup-plugin-sass')
const autoprefixer = require('autoprefixer')
const postcss = require('postcss')
const includepaths = require('rollup-plugin-includepaths')

const options = {
  name: '{{ camelcase name }}Plugin',
  transpiler: '{{transpiler}}',
  external: ['vue']
}


const sassConfig = {
  include: [ '**/*.css', '**/*.scss' ],
  insert: true,
  options: {includePaths: ['node_modules']},
  processor: css => postcss([autoprefixer()])
                    .process(css)
                    .then(result => result.css)
}

const rollupConfig = {
  plugins: [
    includepaths({
      paths: ['src/plugin'],
      extensions: ['.js', '.vue']
    }),
    eslint({ include: [ 'src/**/*.js', 'src/**/*.vue' ] }),
    vue (),
    resolve({ jsnext: true, main: true, browser: true }),
    sass(sassConfig),
    commonjs (),
	],
	format: 'iife',         // Helps prevent naming collisions.
	name: options.name,     // Required for 'iife' format.
	sourcemap: 'inline'     // Sensible for testing.
}

switch (options.transpiler){
  case 'babel' :
    rollupConfig.plugins.push(babel())
    break;
  case 'buble' :
    rollupConfig.plugins.push(buble)
    break;
  case 'none':
  default:
    break
}

module.exports = function (config) {
	config.set({
		files: [
			// Make sure to disable Karma’s file watcher
			// because the preprocessor will use its own.
		  { pattern: 'test/unit/**/*.spec.js', watched: false }
		],
		frameworks: ['mocha', 'chai', 'phantomjs-shim'],
		reporters: ['progress', 'mocha', 'coverage'],
		preprocessors: {
			'src/**/*.(js|vue)': ['coverage'],
			'test/unit/**/*.spec.js': ['rollup']
		},
		rollupPreprocessor: rollupConfig,
		coverageReporter: {
      dir : 'coverage/',
      reporters: [
        { type: 'text-summary', subdir: '.', file: 'summary.txt' },
      ]
    },
		// browsers: ['Chrome', 'PhantomJS'],
		browsers: ['PhantomJS'],
    hostname: process.env.IP,
    port: process.env.PORT,
    runnerPort: 0
	})
}