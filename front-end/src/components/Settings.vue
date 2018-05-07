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
              <v-text-field prepend-icon="library_add" v-model="bizInput" :counter="30" label="Enter a business to add..."></v-text-field>
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
                  <v-btn color="primary" fab small flat @click.native="promptRemove('biz', index)">
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
              <v-text-field prepend-icon="library_add" v-model="catInput" :counter="30" label="Enter a category to add..."></v-text-field>
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
                  <v-btn color="primary" fab small flat @click.native="promptRemove('cat', index)">
                    <v-icon small color="red">remove</v-icon>
                  </v-btn>
                </v-list-tile-action>
            </v-list-tile>
          </v-flex>
      </v-layout>
    </v-flex>

  </v-layout>


  <v-layout row justify-center>
     <v-dialog v-model="dialog" persistent max-width="500px">
       <v-card>
         <v-card-title>
           <span class="headline">Edit</span>
         </v-card-title>
         <v-card-text>
           <v-container grid-list-md>
             <v-layout wrap>

               <v-flex xs12>
                 <v-text-field v-model="editing" :value="editing"></v-text-field>
               </v-flex>

             </v-layout>
           </v-container>
         </v-card-text>
         <v-card-actions>
           <v-spacer></v-spacer>
           <v-btn color="blue darken-1" flat @click.native="dialog = false">Disreguard Changes</v-btn>
           <v-btn color="blue darken-1" flat @click.native="update()">Update</v-btn>
         </v-card-actions>
       </v-card>
     </v-dialog>
   </v-layout>


   <!-- delete dialog -->
   <v-layout row justify-center>
      <v-dialog v-model="deleteDialog" persistent max-width="500px">
        <v-card>
          <v-card-title>
            <span class="headline">Are you sure?</span>
          </v-card-title>
          <v-card-text class="pl-5">
            <h1 v-html='editing'></h1>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click.native="deleteDialog = false">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click.native="remove(selectedBizOrCat, selectedIndex)">Delete</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>


</v-container>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    deleteDialog: false,
    editing: 'editing template',
    selectedBizOrCat: '',
    selectedIndex: null,
    bValid: true,
    cValid: true,
    bizInput: '',
    catInput: '',
    nameRules: [
      v => !!v || 'Required',
      v => v.length <= 30 || 'Must be less than 30 characters'
    ]
  }),
  methods: {
    add (bizorcat, input) {
      if (input) {
        console.log('add', bizorcat, input)
        console.log(this.getListPath(bizorcat))
        const addIt = this.getListPath(bizorcat)
        addIt.push(input)
        this.clear(bizorcat)
        this.save()
      }
    },
    update () {
      console.log('====update=====')
      console.log('update---', this.seletedBizOrCat, this.selectedIndex, this.editing)
      const updateIt = this.getListPath(this.seletedBizOrCat)
      updateIt.splice(this.selectedIndex, 1, this.editing)
      this.dialog = false
      this.selectedIndex = ''
      this.seletedBizOrCat = ''
      this.save()
    },
    edit (bizorcat, i) {
      console.log('edit', bizorcat, i)
      const editIt = this.getListPath(bizorcat)
      this.editing = editIt[i]
      this.seletedBizOrCat = bizorcat
      this.selectedIndex = i
      console.log(this.editing)
      this.dialog = true
    },
    save () {
      console.log('save')
      this.$store.state.saveLocalData()
    },
    promptRemove (bizorcat, i) {
      console.log(bizorcat, i)
      this.selectedBizOrCat = bizorcat
      // this.editing = this.getListPath(bizorcat)[i]
      this.editing = this.getListPath(bizorcat)
      this.deleteDialog = true
    },
    remove (bizorcat, i) {
      console.log('remove', bizorcat, i)
      const removeIt = this.getListPath(bizorcat)
      removeIt.splice(i, 1)
      this.save()
      this.clear()
      this.deleteDialog = false
    },
    clear (bizorcat) {
      if (bizorcat === 'biz') {
        console.log('clear biz')
        this.bizInput = ''
      } else if (bizorcat === 'cat') {
        console.log('clear cat')
        this.catInput = ''
      }
      this.seletedBizOrCat = ''
      this.selectedIndex = ''
    },

    getListPath (bizorcat) {
      if (bizorcat === 'biz') {
        console.log('getpath biz')
        this.seletedBizOrCat = 'biz'
        return this.$store.state.simpleExpenses.businesses
      } else if (bizorcat === 'cat') {
        console.log('getpath cat')
        this.seletedBizOrCat = 'cat'
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
  border-style: dotted;
  padding: 2rem;
  width: 90%;
  margin-bottom: 1rem;
}

.add-section {
  /* min-height: 180px; */
}

</style>
