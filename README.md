# vue-lib-template

vue-cli boilerplate to build a vue component library umd distribution.

based on rollup with:
- supports babel es2015 + eslint:recommended + uglifyjs minification
- supports css and sass + autoprefixer + csso 
- no support for vue scoped css 

### Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli).

``` bash
$ npm install -g vue-cli
$ vue init stasson/vue-lib-template my-project
$ cd my-project
$ npm install
$ npm run build
```

### What's Included

- `npm run build`: build all 
- `npm run build:dev`: build distribution with sourcemap.
- `npm run build:prod`: build minified & optimized distribution.

