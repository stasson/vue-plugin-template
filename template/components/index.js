//
// vue PlugIn
//
import MyComponent from './my-component.vue'

const plugin = {
  install (vm) {
    vm.component('my-component', MyComponent)
  }
}

export default plugin

// Auto-install
let _Vue = null
if (typeof window !== 'undefined') {
  _Vue = window.Vue
} else if (typeof global !== 'undefined') {
  _Vue = global.Vue
}
if (_Vue) {
  _Vue.use(plugin)
}
