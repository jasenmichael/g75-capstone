import Vue from 'vue'
import Croppa from 'vue-croppa'
// import VueResponsiveImage from 'vue-responsive-image'

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
  VCheckbox,
  VTextField,
  VBadge,
  VDatePicker,
  VMenu,
  transitions
} from 'vuetify'

import '../node_modules/vuetify/src/stylus/app.styl'

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
    VCheckbox,
    VTextField,
    VBadge,
    VDatePicker,
    VMenu,
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
