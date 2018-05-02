import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AddReceipt from '@/components/AddReceipt'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/add',
      name: 'AddReceipt',
      component: AddReceipt
    }
  ]
})
