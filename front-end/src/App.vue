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
        <v-list class="pa-5" dark>
          <v-list-tile avatar>
            <v-list-tile-avatar size="52px" tile>
              <img src="@/assets/receipt-icon2.png" alt="avatar">
            </v-list-tile-avatar>
            <v-list-tile-content>
                <v-list-tile-title v-text="'Welcome' + (loggedIn ? ' ' + user : '' )"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <hr>

        <v-list class="pt-4">
          <h4 class="ml-4 mb-3">manage your expense reports here</h4>
          <v-list-tile
            value="false"
            v-for="(item, i) in items"
            :key="i"
          >

            <v-list-tile-content class="m-5 p-5">
               <router-link :to="item.link">
                <v-btn large class="m-5 pr-5 links" :href="item.link" router>

                  <v-badge left color="red" class="navQueueCount mt-2" overlap v-if="item.link === 'queue' && $store.state.simpleExpenses.receiptQueue.length">
                    <span slot="badge"class="queue">{{$store.state.simpleExpenses.receiptQueue.length}}</span>
                    <v-icon large class="mr-4" v-html="item.icon"></v-icon>
                  </v-badge>
                  <v-icon large class="mr-4" v-html="item.icon" v-else-if="true"></v-icon>

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
      class="secondary elevation-18"
      :fixed="fixed"
      dense
    >

      <v-toolbar-side-icon large @click.stop="drawer = !drawer"></v-toolbar-side-icon>

        <div class="mx-auto">
          <router-link to="/">
            <v-toolbar-title class="black--text brand display-2" v-text="title"></v-toolbar-title>
          </router-link>
        </div>
        <v-spacer></v-spacer>

    </v-toolbar>

    <router-link to="queue" v-if="($store.state.simpleExpenses.receiptQueue.length) && !($route.path === '/queue') && !($route.path === '/') && !(this.drawer)">
      <v-btn fab small color="primary" class="queueCount">
        <span>{{$store.state.simpleExpenses.receiptQueue.length}}</span>
      </v-btn>
    </router-link>

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
        icon: 'note_add',
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
      },
      {
        icon: 'speaker_notes',
        title: 'About',
        desc: 'more info on Simple Expenses',
        link: 'about'
      },
      {
        icon: 'info_outline',
        title: 'EULA',
        desc: 'End-user license agreement',
        link: 'eula'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: `$impleExpenses`
    }
  },
  mounted () {
    // this.$store.state.saveLocalData()
    this.$store.state.loadLocalData()
  },
  name: 'App'
}
</script>

<style>

.small {
  font-size: 60%;
}

hr {
  color: black;
}

.queueCount {
    position: absolute;
    top: 4.8rem;
    right: 0;
}

.navQueueCount {
  /* position: fixed;
  z-index: inherit; */
}

.brand {
  text-shadow: 0 2px 0 rgba(255, 255, 255, 0.4);
}

.brand:hover {
  transform: scale(1.1);
    text-shadow: 2px 3px 2px rgba(255, 255, 255, 0.4);
}

.links {
  margin-top: 10px;
}

a:link {
    text-decoration: none;
}

a {
   outline: 0;
}

</style>
