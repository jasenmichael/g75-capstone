<template>
<v-container grid-list-lg fluid text-xs-center>
  <h1>Settings</h1>
  <v-layout row wrap>


    <v-flex xs12 sm6 md6 class="biz-list">
      <v-layout wrap>
        <!-- biz section -->
          <v-flex xs12 justify-center>
            <h3>Add/Remove Businesses</h3>
          </v-flex>

          <!-- biz input -->
          <v-flex xs12>
            <v-form v-model="bValid">
              <v-text-field prepend-icon="library_add" v-model="bizInput" :rules="nameRules" :counter="30" label="Enter a business to add..." required></v-text-field>
            </v-form>

            <v-btn block fluid color="secondary" dark @click.native="add('biz', bizInput)">ADD BUSINESS</v-btn>
          </v-flex>

          <!-- biz list -->
          <v-flex xs12>
            <v-list-tile v-for="(business, index) in this.$store.state.simpleExpenses.businesses" :key="index">
                <v-list-tile-action>
                  <v-btn color="primary" fab flat small @click.native="edit('biz', index)">
                    <v-icon color="secondary">build</v-icon>
                  </v-btn>
                </v-list-tile-action>
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-title v-html="business"></v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile-action>
                <v-spacer></v-spacer>
                  <v-btn color="primary" fab small flat @click.native="remove('biz', index)">
                    <v-icon small color="red">remove</v-icon>
                  </v-btn>
                </v-list-tile-action>
            </v-list-tile>
          </v-flex>
      </v-layout>
    </v-flex>

    <!-- cat section -->
    <v-flex xs12 sm6 md6 justify-center class="cat-list pr-2 pl-2">
      <v-layout wrap>
        <!-- biz section -->
          <v-flex xs12 justify-center>
            <h3>Add/Remove Categories</h3>
          </v-flex>

          <!-- cat input -->
          <v-flex xs12>
            <v-form v-model="cValid">
              <v-text-field prepend-icon="library_add" v-model="catInput" :rules="nameRules" :counter="30" label="Enter a category to add..." required></v-text-field>
            </v-form>

            <v-btn block color="secondary" dark @click.native="add('cat', catInput)">ADD CATEGORY</v-btn>
          </v-flex>

          <!-- cat list -->
          <v-flex xs12>
            <v-list-tile v-for="(category, index) in this.$store.state.simpleExpenses.categories" :key="index">
                <v-list-tile-action>
                  <v-btn color="primary" fab flat small @click.native="edit('cat', index)">
                    <v-icon color="secondary">build</v-icon>
                  </v-btn>
                </v-list-tile-action>
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-title v-html="category"></v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile-action>
                <v-spacer></v-spacer>
                  <v-btn color="primary" fab small flat @click.native="remove('cat', index)">
                    <v-icon small color="red">remove</v-icon>
                  </v-btn>
                </v-list-tile-action>
            </v-list-tile>
          </v-flex>
      </v-layout>
    </v-flex>

  </v-layout>

</v-container>
</template>

<script>
export default {
  data: () => ({
    bValid: false,
    cValid: false,
    bizInput: '',
    catInput: '',
    nameRules: [
      v => !!v || 'Required',
      v => v.length <= 30 || 'Must be less than 30 characters'
    ]
  }),
  methods: {
    add (bizorcat, input) {
      console.log('add', bizorcat, input)
      console.log(this.getListPath(bizorcat))
      const addIt = this.getListPath(bizorcat)
      addIt.push(input)
    },
    edit (bizorcat, i) {
      console.log('edit', bizorcat + ' ' + i)
    },
    save () {
      console.log('save')
    },
    remove (bizorcat, i) {
      console.log('remove', bizorcat + ' ' + i)
    },
    getListPath (bizorcat) {
      if (bizorcat === 'biz') {
        console.log('biz')
        return this.$store.state.simpleExpenses.businesses
      } else if (bizorcat === 'cat') {
        console.log('cat')
        return this.$store.state.simpleExpenses.categories
      }
    }
  }
}
</script>

<style  scoped>

h1, hr {
  margin-bottom: 1.5rem;
}

.biz-list, .cat-list {
  /* border-style: dotted; */
  /* padding: 2rem;
  width: 90%;
  margin-bottom: 1rem; */
}

.add-section {
  /* min-height: 180px; */
}

</style>
