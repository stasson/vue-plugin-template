import vue from 'rollup-plugin-vue2'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import sass from 'rollup-plugin-sass';
import autoprefixer from 'autoprefixer'
import postcss from 'postcss'

const umdName = 'MyProjectPlugin'

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

const sassConfig = {
  include: [ '**/*.css', '**/*.scss' ],
  options: {includePaths: ['node_modules']},
  insert: true,
  processor: css => postcss( [autoprefixer()])
                    .process(css)
                    .then(result => result.css)
}


const rollupConfig = {
	plugins: [
    vue (),
    resolve({ jsnext: true, main: true, browser: true }),
    sass(sassConfig),
    commonjs (),
    babel(babelConfig),
	],
	format: 'umd', // Helps prevent naming collisions.
	name: umdName, // Required for 'iife' format.
	sourcemap: 'inline'     // Sensible for testing.
}

export default function (config) {
	config.set({
		files: [
			// Make sure to disable Karma’s file watcher
			// because the preprocessor will use its own.
			{ pattern: 'test/**/*.spec.js', watched: false }
		],
		preprocessors: {
			'test/**/*.spec.js': ['rollup']
		},
		rollupPreprocessor: rollupConfig 
	})
}