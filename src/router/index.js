import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'
import VueResource from 'vue-resource'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
