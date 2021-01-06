<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" absolute temporary app>
      <v-list nav dense>
        <router-link v-bind:to="{ name: 'Home' }" class="side_bar_link">
          <v-list-item>
            <v-list-item-action>
              <v-icon>home</v-icon>
            </v-list-item-action>
            <v-list-item-content>Inicio</v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link v-bind:to="{ name: 'Contact' }" class="side_bar_link">
          <v-list-item>
            <v-list-item-action>
              <v-icon>contact_mail</v-icon>
            </v-list-item-action>
            <v-list-item-content>Contacto</v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="indigo" dark fixed app>
      <v-app-bar-nav-icon @click.stop="drawer =!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title name="inicio">Inicio</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and">
        <v-btn text v-bind:to="{ name: 'AddMovie' }">Agregar película</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <div id="app">
          <router-view/>
        </div>
      </v-container>
    </v-main>
    <v-footer color="indigo" app>
      <span class="white-text">&copy; 2020-2021</span>
    </v-footer>
  </v-app>
</template>

<script>
import './assets/stylesheets/main.css'
export default {
  data: () => ({
    drawer: null
  }),
  props: {
    source: String
  }
}
</script>
