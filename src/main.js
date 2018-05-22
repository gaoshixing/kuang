import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js';



router.beforeEach((to, from, next) => {
    if(to.path != '/') {
      console.log(0)
      console.log(store.getters.user)
      if(store.getters.user) {
      console.log(1)
      
        next()
      }else {
        router.push({
          name: 'HelloWorld'
        })
        return
      }

    }
    next()
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
