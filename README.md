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
$ vue init stasson/vue-plugin-template my-project
$ cd my-project
$ npm install
```

the template layout is as follow
```
my-prolect
├─ dist         # distribution output 
├─ src          #  
│  ├─ plugin    # plugin sources (components, directives ...)
│  └─ styles    # styles (.css/.scss) 
└─ test
   └─ unit
      └─ specs  # unit test spec
```

- `npm run test`: run karma tests  
- `npm run build`: build all 
- `npm run build:dev`: build umd distribution with inlined sourcemap and styles.
- `npm run build:prod`: build minified & optimized umd distribution.

> if you publish on npm, the distribution will be available on [unpkg](https://unpkg.com) CDN  



#### Transpile ES6?

Choose which es6 transpiler to use

* __[babel](https://babeljs.io/)__: Full featured, battle tested transpiler.
* __[buble](https://buble.surge.sh/guide/)__: Fast, use it if you want a clean output with no extra code
* __none__: you don't need ES6 support !?!


#### CSS output?

Choose how styles should be handled

* __extract__: styles are consolidated in a stylesheet file (my-project.css / my-project.min.css)
* __inject__: <style> elements are injected into the <head>
* __none__: you don't use no styles !?!

> development distribution always use inlined styles  

### TODO

- add support for vue scope 
