# vue-plugin-rollup

vue-cli init template to rollup a vue plugin distribution.

based on rollup with:
- supports babel es2015 + eslint:recommended + uglifyjs minification
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
### Layout

```
my-prolect
├─ dist          # distribution files
├─ components    # vue component sources
└─ styles        # css/scss extra files
```

### What's Included
- `npm run build`: build all 
- `npm run build:dev`: build distribution with sourcemap.
- `npm run build:prod`: build minified & optimized distribution.

### TODO

- add option to inject css 
- add support for vue scope 
- add npm run test
