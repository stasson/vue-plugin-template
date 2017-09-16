import Vue from 'vue'
import MyComponent from 'my-component.vue'


describe('MyComponent', function () {
  it ('data should be a function', function () {
      MyComponent.data.should.be.a('function')
  })
  
  // Mount an instance and inspect the render output
  it('renders the correct message', () => {
    const Ctor = Vue.extend(MyComponent)
    const vm = new Ctor().$mount()
    (vm.$el.textContent).should.be('Hello World !')
  })  
}) 



// describe('Test', function() {
//   it('should be successfull', function() {
//     const foo = 'bar'
//     foo.should.be.a('string');
//     foo.should.equal('bar');
//     foo.should.have.lengthOf(3);    });
// });

