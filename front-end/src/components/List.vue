<template>
<div class="pa-3">
  <v-container fluid grid-list-md>

    <v-flex xs12>
      <v-subheader>You Have {{this.$store.state.simpleExpenses.receipts.length}} Records</v-subheader>
    </v-flex>

    <v-card flat class="ma-0">
      <v-card-text>
        <v-container fluid grid-list-md class="pa-0">
          <v-layout row wrap>
            <v-flex d-flex xs12 sm6 md3 class="pt-4 mr-4">
              <div class="">
                <v-btn-toggle v-model="text" mandatory>
                  <v-btn flat small value="thumbnail">
                    thumbnail
                  </v-btn>
                  <v-btn flat small value="list">
                    list view
                  </v-btn>
                </v-btn-toggle>
              </div>
            </v-flex>
            <v-flex d-flex xs10 sm4 md6 justify-center>
              <v-text-field prepend-icon="search" v-model="search" id="testing" name="input-1" label="Search"></v-text-field>
            </v-flex>
            <v-flex d-flex xs2 justify-center>
              <v-btn flat small outline @click.native="createPdf()" class="mt-4">
                <v-icon outline>picture_as_pdf</v-icon>
                Export as PDF
              </v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>
  </v-container>

  <!-- thumb view -->
  <v-layout row wrap v-show="(text === 'thumbnail')">
    <!-- <v-flex xs12 sm6 offset-sm3> -->
    <v-flex d-flex xs12 sm6 md4 lg3 v-for="(receipt, index) in  filteredList" :key="index">
      <v-card>
        <v-card-title primary-title>
          <div>
            <div class="headline">{{receipt.from || ''}}</div>
            <span class="grey--text">Total: <b>${{receipt.total || ''}}</b> </span>
            <span class="grey--text">Date: {{receipt.date || ''}}  </span>
            <v-spacer></v-spacer>
            <span>{{receipt.category || ''}}</span>
          </div>
        </v-card-title>
        <v-card-media :src="receipt.dataUrl" width="240px" height="360px">
        </v-card-media>
        <v-card-actions>
          <v-btn flat>View</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="showDetails = !showDetails">
            <v-icon>{{ showDetails ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-slide-y-transition>
          <v-card-text v-show="showDetails">
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we
            walk! You're going to do his laundry? I've got to find a way to escape.
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  </v-layout>

  <!-- list view -->
  <div v-show="(text === 'list')">
      <v-data-table :headers="headers" :search="search" :items="this.$store.state.simpleExpenses.receipts"hide-actions class="elevation-1">
        <template slot="items" slot-scope="props">
          <td>{{ props.item.id || ''}}</td>
          <td>{{ props.item.from || ''}}</td>
          <td>{{ props.item.date || ''}}</td>
          <td>{{ props.item.business || '' }}</td>
          <td>{{ props.item.category  || ''}}</td>
          <td>$ {{ props.item.total  || ''}}</td>
        </template>
        <template slot="pageText" slot-scope="props">
          Lines {{ props.pageStart }} - {{ props.pageStop }} of {{ props.itemsLength }}
        </template>
        <v-alert slot="no-results" :value="true" color="error" icon="warning">
          Your search for "{{ search }}" found no results.
        </v-alert>
      </v-data-table>
  </div>

  </v-container>
</div>
</template>

<script>
// build nice layout view with edit button
// edit button will remove from list and add to queue, and the

// import EditForm from '@/components/EditForm'
export default {
  components: {
    // EditForm
  },
  data () {
    return {
      showDetails: false,
      text: 'thumbnail',
      search: '',
      filterList: [],
      icon: 'justify',
      toggle_none: null,
      toggle_one: 0,
      toggle_exclusive: 2,
      toggle_multiple: [0, 1, 2],
      valid: false,
      headers: [{
        text: 'ID',
        value: 'index'
      },
      {
        text: 'From',
        align: 'left',
        // sortable: false,
        value: 'from'
      },
      {
        text: 'Date',
        value: 'date'
      },
      {
        text: 'Business',
        value: 'business'
      },
      {
        text: 'Category',
        value: 'category'
      },
      {
        text: 'Total',
        value: 'total'
      }]
    }
  },

  computed: {
    filteredList () {
      return this.$store.state.simpleExpenses.receipts.filter((item) => {
        // console.log(item)
        // eslint-disable-next-line
        this.filterList =
          item.description.match(new RegExp(this.search, 'i')) ||
          // item.total.match(new RegExp(this.search, 'i')) ||
          item.from.match(new RegExp(this.search, 'i')) ||
          item.date.match(new RegExp(this.search, 'i')) ||
          item.category.match(new RegExp(this.search, 'i')) ||
          item.business.match(new RegExp(this.search, 'i'))
        return this.filterList
      })
    },
    showStyle () {
      if (this.showInfo) {
        return {
          display: 'block'
        }
      } else {
        // eslint-disable-next-line
        this.editItems = {}
        return {}
      }
    }
  },
  beforeMount () {
    // this.createPdf()
  },
  mounted () {
    // this.createPdf()
  },
  methods: {
    createPdf () {
      this.$store.state.createPdf(this.filteredList)
    }
  }
}
</script>

<style scoped>
img {
  margin: .2em;
}
</style>
