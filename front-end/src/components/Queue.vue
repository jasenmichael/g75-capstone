<template>
  <v-container fluid>
    <v-layout row wrap v-for="(receipt, index) in $store.state.simpleExpenses.receiptQueue" :key="index" class="daForm">
      <!-- <p>i work</p> -->
      <v-flex d-flex xs12 sm12 md6 row justify-center>
          <img :src="receipt.dataUrl" fluid>
      </v-flex>
      <v-flex d-flex xs12 sm12 md6 row justify-center>
          <v-form  v-model="valid" ref="form" lazy-validation>

           <v-layout>
            <v-flex xs6 class="mr-3">
               <v-select
                 label="Business"
                 v-model="select"
                 :items="$store.state.simpleExpenses.businesses"
                 :rules="[v => !!v || 'Item is required']"
                 required
               ></v-select>
            </v-flex>
            <v-flex xs6>
               <v-select
                 label="Category"
                 v-model="select"
                 :items="$store.state.simpleExpenses.categories"
                 :rules="[v => !!v || 'Item is required']"
                 required
               ></v-select>
            </v-flex>
          </v-layout>

             <v-text-field
               label="Receipt Issuer"
               value=""
               hint='For example, "Home Depot" or "Panera Bread"'
               persistent-hint
             ></v-text-field>
             <v-text-field
               label="Description"
               value=""
               hint='For example, "lunch with a client"'
               persistent-hint
             ></v-text-field>

             <!-- money -->
             <v-layout>
              <v-flex xs6 class="mr-3">

              </v-flex>
              <v-flex xs6>

              </v-flex>
            </v-layout>

             <v-btn small round color="info" @click="submit" :disabled="!valid">Submit</v-btn>
             <v-btn small round color="info" @click="remove">Delete</v-btn>
           </v-form>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import 'vue-croppa/dist/vue-croppa.css'
  // import axios from 'axios'
  export default {
    data () {
      return {
        valid: false,
        select: []
      }
    },
    methods: {
      receiptObject (blob) {
        URL.createObjectURL(blob)
      },
      reset () {
        // will refetch this without saving
      },
      submit () {},
      checkbox () {},
      remove () {}
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
  border: .2rem dotted
}

</style>
