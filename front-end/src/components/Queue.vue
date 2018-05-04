<template>
  <v-container fluid>
    <v-layout row wrap>
      <!-- <h1>{{ $store.state.simpleExpenses.receiptQueue}}</h1> -->
      <!-- <p>i work</p> -->
      <v-flex xs6>
        <div v-for="receipt in $store.state.simpleExpenses.receiptQueue">
          <!-- <img src="URL.createObjectURL(receipt.dataUrl)"> -->
          <img :src="receipt.dataUrl">
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  // import axios from 'axios'
  export default {
    data () {
      return {}
    },
    methods: {
      receiptObject (blob) {
        URL.createObjectURL(blob)
      }
    }
  }
</script>

<style scoped>

img {
  width: 320px;
  height: 400px;
}

</style>
