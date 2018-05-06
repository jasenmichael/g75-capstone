<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>

      <router-link to="add" class="add text-xs-center" color="primary">
          <img src="@/assets/receipt-icon1.png" alt="Simple Expenses Logo" class="mb-2 mt-4">
          <div class="">
            <v-btn large outline color="primary" class="mb-5" dark href="add" router>Add a Receipt</v-btn>
          </div>
      </router-link
      <blockquote>
        &#8220;Expense Receipt organization made simple.&#8221;
      </blockquote>
      <router-link to="about" class="about text-xs-center" color="primary">
        read more here...
      </router-link>

      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        beforeMount () {
          // this.$store.state.saveLocalData()
          this.$store.state.loadLocalData()
          // this.businesses = this.$store.state.simpleExpenses.businesses
          // this.categories = this.$store.state.simpleExpenses.categories
        }
      }
    }
  }
</script>

<style scoped>
* {
  font-weight: 600;
  font-size: 110%;
}

.add {
  min-width: 40vw;
  min-height: 15vh;
  transition: all .2s ease-in-out;
  /* z-index: 1000; */
}

img {
  height: 50vh;
  width: auto;
}

.add:hover {
  transform: scale(1.1);
  /* box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22); */
}

</style>
