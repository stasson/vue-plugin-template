# vue-plugin-template

vue-cli template to rollup a vue plugin with support for
- es2015 (babel or buble)
- eslint:recommended 
- css/sass + autoprefixer 
- uglifyjs/csso  minification 

### Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli).

``` bash
$ npm install -g vue-cli
$ vue init stasson/vue-plugin-rollup my-project
$ cd my-project
$ npm install
$ npm run build
```

#### Transpile ES6?

* __[babel](https://babeljs.io/)__: Full featured, battle tested transpiler.
* __[buble](https://buble.surge.sh/guide/)__: Fast, use it if you want a clean output with no extra code
* __none__: you don't need ES6 support !?!

#### CSS output?

* __extract__: styles are consolidated in a stylesheet file (my-project.css / my-project.min.css)
* __inject__: <style> elements are injected into the <head>
* __none__: you don't use no styles !?!

#### Layout

```
my-prolect
├─ dist         # distribution output 
├─ src/plugins  # vue plugin sources (components, directives ...)  
└─ src/styles   # css/scss extra files 
```

#### What's Included
- `npm run build`: build all 
- `npm run build:dev`: build umd distribution with sourcemap.
- `npm run build:prod`: build minified & optimized umd distribution.

> if you publish on npm, the distribution will be available on [unpkg](https://unpkg.com) CDN  

### TODO

- add support for vue scope 
- add npm run test
