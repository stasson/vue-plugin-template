# vue-plugin-template

vue-cli template to rollup a vue plugin.

based on rollup with for:
- es2015 with babel + eslint:recommended + uglifyjs minification
- supports css and sass + autoprefixer + csso 

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

* [babel](https://babeljs.io/): Full featured, battle tested transpiler.
* [buble](https://buble.surge.sh/guide/): Fast, use it if you want a clean output with no extra code
* __none__: you don't need ES6 support !?!

#### CSS output?

* extract: styles are consolidated in a stylesheet file (my-project.css / my-project.min.css)
* inject: <style> elements are injected into the <head>
* none: you don't use no styles !?!

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
