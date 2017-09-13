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

