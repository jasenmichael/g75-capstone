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
      dark
    >
      <v-list light>
        <v-list-tile
          value="false"
          v-for="(item, i) in items"
          :key="i"
        >

          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title  + (loggedIn ? ' ' + user : '' )"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar
      app
      :clipped-left="clipped"
    >

      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>

      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>

      <div class="mx-auto">
        <router-link to="/">
          <v-toolbar-title v-text="title"></v-toolbar-title>
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
        icon: 'bubble_chart',
        title: 'Welcome'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: '$impleExpenses'
    }
  },
  name: 'App'
}
</script>
