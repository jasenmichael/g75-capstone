import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const state = {
  simpleExpenses: {
    id: '',
    user_name: '',
    categories: [1, 2, 3],
    businesses: ['Deli Cafe', 'Ready Builder', 'Bay Area Ren Faire', 'Michigan Ren Faire'],
    receipts: [],
    receiptQueue: [],
    edit: null
  },
  loadLocalData () {
    this.simpleExpenses = JSON.parse(localStorage.getItem('simple_expenses')) || this.simpleExpenses
  },
  saveLocalData () {
    localStorage.setItem('simple_expenses', JSON.stringify(this.simpleExpenses))
    var local = localStorage.getItem('simple_expenses')
    var store = JSON.stringify(this.simpleExpenses)
    // console.log(local)
    // console.log(store)
    if (local === store) {
      console.log('you are in sync')
      console.log('=======')
    }
  }
}

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state
})
