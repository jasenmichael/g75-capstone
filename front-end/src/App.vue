<template>
  <v-app>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
      light
    >
        <v-list class="pa-5">
          <v-list-tile avatar>
            <v-list-tile-avatar size="48px" tile>
              <img src="@/assets/receipt-icon.png" alt="avatar">
            </v-list-tile-avatar>
            <v-list-tile-content>
                <v-list-tile-title v-text="'Welcome' + (loggedIn ? ' ' + user : '' )"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <hr>

        <v-list class="pt-4" dense>
          <h4 class="ml-4 mb-3">manage your expense reports here</h4>
          <v-list-tile
            value="false"
            v-for="(item, i) in items"
            :key="i"
          >


            <v-list-tile-content class="m-5">
               <router-link :to="item.link">
                <v-btn large class="m-5 links pr-5 links" :href="item.link" router>
                  <v-icon large class="mr-4" v-html="item.icon"></v-icon>
                  <p class="mt-3">{{item.title}}<br><span class="small">{{item.desc}}</span></p>
                </v-btn>
               </router-link>
            </v-list-tile-content>



        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar
      app
      :clipped-left="clipped"
      class="primary"
    >

      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>

      <div class="mx-auto">
        <router-link to="/">
          <v-toolbar-title class="black--text display-2" v-text="title"></v-toolbar-title>
        </router-link>
      </div>
      <v-spacer></v-spacer>

    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>

    <v-footer :fixed="fixed" app>
      <span class="mx-auto">$imple Expenses &copy; 2018 @jasenmichael</span>
    </v-footer>

  </v-app>
</template>

<script>
export default {
  data () {
    return {
      loggedIn: true,
      user: 'Jasen',
      clipped: false,
      drawer: false,
      fixed: false,
      items: [{
        icon: 'add',
        title: 'Add',
        desc: 'add an expense receipt',
        link: 'add'
      },
      {
        icon: 'view_list',
        title: 'List',
        desc: 'view and edit your records',
        link: 'list'
      },
      {
        icon: 'library_books',
        title: 'Queue',
        desc: 'edit and approve new receipts',
        link: 'queue'
      },
      {
        icon: 'view_headline',
        title: 'Reports',
        desc: 'view and export your records',
        link: 'reports'
      },
      {
        icon: 'settings',
        title: 'Settings',
        desc: 'your settings and categories',
        link: 'settings'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: '$impleExpenses'
    }
  },
  mounted () {
    this.$store.state.loadLocalData()
  },
  name: 'App'
}
</script>

<style>

html {
  background-color: #7C9886;
}

v-toolbar {
  z-index: 3000;
}

.small {
  font-size: 60%;
}

hr {
  color: black;
}

</style>
