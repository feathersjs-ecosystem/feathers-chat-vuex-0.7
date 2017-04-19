import Vue from 'vue'
import App from '@/App.vue'

describe('App.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    expect(vm.$el.textContent)
      .to.equal('')
  })
})
