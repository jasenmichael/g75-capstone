import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AddReceipt from '@/components/AddReceipt'
import Queue from '@/components/Queue'
import List from '@/components/List'
import Edit from '@/components/EditForm'
import Settings from '@/components/Settings'

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
    },
    {
      path: '/queue',
      name: 'Queue',
      component: Queue
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/edit/:id',
      name: 'Edit',
      component: Edit
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    }
  ]
})
