<template>
  <v-container fluid>
    <h1>{{ path }}</h1>
    <v-layout row wrap v-for="(receipt, index) in this.receipts" :key="index" class="daForm">
      <v-flex d-flex xs12 sm12 md6 row justify-center>
          <img :src="receipt.dataUrl" fluid>
      </v-flex>
      <v-flex d-flex xs12 sm12 md6 row justify-center>
          <v-form  v-model="valid" ref="form" lazy-validation>

           <v-layout>
             <!-- <v-btn round outline dark  color="info" class="mt-1">
               <span><b>ID:</b>{{index}}</span>
            </v-btn> -->
            <v-flex xs6 mr-3>
               <v-select
                 label="Business"
                 v-model="receipt.business"
                 :items="businesses"
                 :rules="[v => !!v || 'Item is required']"
                 required
               ></v-select>
            </v-flex>
            <v-flex xs6>
               <v-select
                 label="Category"
                 v-model="receipt.category"
                 :items="categories"
                 :rules="[v => !!v || 'Item is required']"
                 required
               ></v-select>
            </v-flex>
          </v-layout>

          <v-layout>
           <v-flex xs12 lg6>
             <v-text-field
               label="Receipt Issuer"
               value=""
               v-model="receipt.from"
               hint='For example, "Home Depot" or "Panera Bread"'
               persistent-hint
               required
             ></v-text-field>
           </v-flex>

           <!-- // date -->
           <v-flex xs6>
             <v-container grid-list-md>
               <v-layout row wrap>
                 <v-flex xs12 lg6>
                   <v-menu
                     :close-on-content-click="false"
                     v-model="menu2"
                     :nudge-right="40"
                     lazy
                     transition="scale-transition"
                     offset-y
                     full-width
                     max-width="290px"
                     min-width="290px"
                   >
                     <v-text-field
                       slot="activator"
                       v-model="computedDateFormatted"
                       label="Date"
                       hint="MM/DD/YYYY"
                       persistent-hint
                       prepend-icon="event"
                       readonly
                     ></v-text-field>
                     <v-date-picker v-model="date" no-title @input="menu2 = false"></v-date-picker>
                   </v-menu>
                 </v-flex>
               </v-layout>
             </v-container>
           </v-flex>
         </v-layout>

             <v-text-field
               label="Description"
               value=""
               v-model="receipt.description"
               hint='For example, "lunch with a client"'
               persistent-hint
             ></v-text-field>

             <!-- money -->
             <v-layout>
              <v-flex xs7 class="mr-3">
                <v-text-field
                  v-model="receipt.amount"
                  :bind="total(index)"
                  type="number"
                  label="Amount"
                  hint='Enter Amount before Tax"'
                  persistent-hint
                  >
                </v-text-field>
              </v-flex>
              <v-flex xs5>
                <v-text-field
                  v-model="receipt.tax"
                  :bind="total(index)"
                  type="number"
                  label="Tax"
                  hint='Enter "Tax Amount"'
                  persistent-hint
                ></v-text-field>
              </v-flex>
            </v-layout>

            <h4>Total: $ {{ receipt.total.toFixed(2) }} </h4>
            <div v-if="path === 'QUEUE'" class="">
              <v-btn small round color="info" @click.native="queueToReceipts(receipt, index, dateFormatted)" :disabled="!valid">Submit</v-btn>
              <v-btn small round color="info" @click.native="remove(index)">Delete</v-btn>
            </div>

            <div v-if="path === 'LIST'">
                  <!-- <v-btn small round color="info" @click.native="edit(index)">Edit</v-btn> -->
                  <v-btn small round color="info" @click.native="remove(index)">Delete</v-btn>
            </div>

           </v-form>

      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
  // import DatePicker from '@/components/DatePicker'

  import 'vue-croppa/dist/vue-croppa.css'
  // import axios from 'axios'
  export default {
    components: {
      // DatePicker
    },
    data () {
      return {
        path: this.$route.path.slice(1).toUpperCase(),
        businesses: this.$store.state.simpleExpenses.businesses,
        categories: this.$store.state.simpleExpenses.categories,
        valid: false,
        select: [],
        receipts: [],
        date: null,
        dateFormatted: null,
        menu1: false,
        menu2: false
      }
    },
    methods: {
      // receiptObject (blob) {
      //   URL.createObjectURL(blob)
      // },
      edit (index) {
        console.log('edit', index)
        this.$store.state.edit = index
        console.log(this.$store.state.edit)
        // this.$route.query.edit ===
        this.$router.push({ path: `/edit/${index}` })
      },
      reset () {
      },
      queueToReceipts (receipt, index, dateFormatted) {
        console.log(this.$store.state.simpleExpenses.receiptQueue.length)
        const queueReceipt = this.$store.state.simpleExpenses.receiptQueue[index]
        queueReceipt.date = dateFormatted
        // save receiptQueue to var as json
        const temp = queueReceipt
        console.log(temp)
        // remove from store array
        this.$store.state.simpleExpenses.receiptQueue.splice(index, 1)
        console.log(this.$store.state.simpleExpenses.receiptQueue.length)
        // push var to receipts in store
        this.$store.state.simpleExpenses.receipts.push(receipt)
        console.log(this.$store.state.simpleExpenses.receipts)
        // save store to local
        this.$store.state.saveLocalData()
        // reload page?? or just route??
      },
      save () {
        this.$store.state.saveLocalData()
      },
      remove (index) {
        this.receipts.splice(index, 1)
        this.$store.state.saveLocalData()
      },
      checkbox () {},
      total (index) {
        let receipt = this.receipts[index]
        receipt.total = +receipt.amount + +receipt.tax
        // return 22
      },
      formatDate (date) {
        if (!date) return null
        const [year, month, day] = date.split('-')
        var thisDate = `${month}/${day}/${year}`
        // console.log(thisDate)
        return thisDate
      },
      parseDate (date) {
        if (!date) return null
        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
      getPath () {
        console.log('list length: ' + this.$store.state.simpleExpenses.receipts.length)
        if (this.$route.path === '/queue') {
          console.log('queue')
          this.receipts = this.$store.state.simpleExpenses.receiptQueue
        }
        if (this.$route.path === '/list') {
          console.log('list')
          this.receipts = this.$store.state.simpleExpenses.receipts
        }
        if (this.$store.state.edit === this.$route.params.id && this.$route.params.id) {
        // if (!true) {
          console.log('edit', this.$store.state.edit)
          console.log(this.$route.params.id)
          // console.log(this.$router.edit.query)
          // this.receipts = [this.$store.state.simpleExpenses.receipts[this.$route.params.id]]
          this.receipts = [this.$store.state.simpleExpenses.receipts[this.$route.params.id]]
        }
      }
    },
    mounted () {
      this.getPath()
    },
    beforeMount () {
      this.$store.state.loadLocalData()
      // this.businesses = this.$store.state.simpleExpenses.businesses
      // this.categories = this.$store.state.simpleExpenses.categories
    },
    computed: {
      computedDateFormatted () {
        // console.log(this.props.index)
        // console.log(this.receipts[index])
        // console.log(this.dateFormatted)
        return this.formatDate(this.date)
      }
    },
    watch: {
      date (val) {
        this.dateFormatted = this.formatDate(this.date)
      }
    }
  }
</script>

<style scoped>

img {
  max-width: 320px;
  max-height: 400px;
  margin-right: 1rem;
}

.daForm {
  margin-bottom: 2rem;
  padding: 1rem;
  /* border: .2rem dotted */
}

.amountSubHead {
  margin-top: -200px;
}
</style>
