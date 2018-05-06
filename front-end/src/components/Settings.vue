<template>
<v-container fluid grid-list-md text-xs-center>
  <h1>Settings</h1>

  <v-layout row wrap>

    <v-flex d-flex xs11 sm6 md6 row justify-center class="biz-list pr-2 pl-2">
      <v-layout row wrap>
        <v-flex d-flex xs12 row justify-center class="mr-2 ml-2">
          <v-form v-model="valid" class="mr-2 ml-2">
            <v-text-field prepend-icon="library_add" v-model="biz" :rules="nameRules" :counter="10" label="Enter a business to add..." required></v-text-field>
          </v-form>
        </v-flex>
        <v-flex d-flex xs12 row justify-center>
          <v-btn block color="secondary" dark>ADD BUSINESS</v-btn>
        </v-flex>
        <v-flex d-flex xs12 row justify-center>
          <v-subheader>Your Businesses</v-subheader>

        </v-flex>
      </v-layout>
    </v-flex>

    <v-flex d-flex xs11 sm6 md6 row justify-center  class="cat-list pr-2 pl-2">
      <v-layout row wrap>
        <v-flex d-flex xs12 row justify-center class="mr-2 ml-2">
          <v-form v-model="valid" class="ml-2 mr-2">
            <v-text-field prepend-icon="library_add" v-model="cat" :rules="nameRules" :counter="10" label="Enter a category to add..."></v-text-field>
          </v-form>
        </v-flex>
        <v-flex d-flex xs12 row justify-center>
          <v-btn block color="secondary" dark>ADD CATEGORY</v-btn>
        </v-flex>
        <v-flex d-flex xs12 row justify-center>
          <v-subheader>Your Categories</v-subheader>
        </v-flex>
      </v-layout>
    </v-flex>

  </v-layout>

</v-container>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    biz: '',
    cat: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters'
    ]
  })
}
</script>

<style  scoped>

h1, hr {
  margin-bottom: 1.5rem;
}

.biz-list, .cat-list {
  border-style: dotted;
  padding: 2rem;
  width: 90%;
}

</style>
