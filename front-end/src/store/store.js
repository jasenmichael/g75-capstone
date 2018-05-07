import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const state = {
  simpleExpenses: {
    id: '',
    user_name: '',
    categories: [ 'Office Expenses', 'Business Property', 'Repairs and Maintenance', 'Supplies', 'Taxes and Licenses', 'Travel', 'Deductible meals', 'Utilities' ],
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
  },
  createPdf (receipts) {
    let bizPage = []
    let catPage = {}
    let pdfList = []
    // let pdfPageList = []
    this.simpleExpenses.businesses.forEach((business) => {
      bizPage = {
        business: business,
        categories: []   // push each catPage to bizPage
      }
      // console.log(this.bizPage)
      receipts.forEach((receipt) => {
        if (business === receipt.business) {
          // console.log(this.bizPage)
          catPage = {
            category: {
              name: receipt.category,
              receipts: []  // push each category to categories
            }
          }
          this.simpleExpenses.categories.forEach((category) => {
            // category push
            if (category === receipt.category) {
              // console.log(category)
              // this.catPage.category.name = category
              catPage.category.receipts.push(receipt)
              // console.log(catPage)
            }
          })
          bizPage.categories.push(catPage)
          console.log(business, catPage)
        }
      })
      //  push each bizPage to pdfPageList
      pdfList.push(bizPage)
    }) // biz
    console.log(pdfList)
    // console.log(this.catPage)
  },
  mounted () {}
}

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state
})
