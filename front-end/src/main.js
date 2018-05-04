// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Croppa from 'vue-croppa'

import App from './App'
import store from './store/store'

import router from './router'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VForm,
  VSelect,
  transitions
} from 'vuetify'

import '../node_modules/vuetify/src/stylus/app.styl'
import 'vue-croppa/dist/vue-croppa.css'

Vue.use(Croppa)

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VForm,
    VSelect,
    transitions
  },
  theme: {
    primary: '#4CAF50',
    secondary: '#00796B',
    accent: '#26C6DA',
    error: '#FF5722',
    warning: '#FFD600',
    info: '#26C6DA',
    success: '#00C853'
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
