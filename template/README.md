# {{ name }}

{{ description }}

## NPM 

```console
npm install --save {{ name }}
```

```javascript
import Vue from 'vue'
import {{camelcase name}}Plugin from '{{name}}' 

Vue.use({{camelcase name}}Plugin)

```

## CDN

```html
<head>
    <link rel="stylesheet" href="https://unpkg.com/{{kebabcase name}}/dist/{{kebabcase name}}.min.css">  
    <script src="https://unpkg.com/vue/dist/vue.min.js"></script>
    <script src="https://unpkg.com/{{kebabcase name}}/dist/{{kebabcase name}}.min.js"></script>
</head>
<body>
    <div id="app">
        <my-component></mycomponent>
    </div>

    <script>
        new Vue({  el: '#app' })
    </script>
</body>
```
