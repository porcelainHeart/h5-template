// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as filters from './filters'
import './mixins'
import registerComponents from './utils/mint-ui'
import './utils/flexible'
import attachFastClick from 'fastclick'
import 'normalize.css'

Vue.config.productionTip = false

// register filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// register mint-ui registerComponents
registerComponents(Vue)

// eliminating the 300ms delay
attachFastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
})
