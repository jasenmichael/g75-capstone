import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  hello: 'hello from state',
  loadLocalData () {
    this.simpleExpenses = JSON.parse(localStorage.getItem('simple_expenses')) || this.simpleExpenses
  },
  simpleExpenses: {
    id: '',
    user_name: '',
    categories: [],
    businesses: [],
    receipts: [],
    receiptQueue: []
  }
}

export default new Vuex.Store({
  state
})
