<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-img src="https://picsum.photos/510/300?random">
        <div class="text-center mt-4">
          <v-avatar class="mb-4" color="grey darken-1" size="64">
            <v-img
              aspect-ratio="10"
              src="https://picsum.photos/500/300?image"
            ></v-img>
          </v-avatar>
          <h2 class="yellow--text">Admin</h2>
        </div>
      </v-img>

      <v-divider></v-divider>

      <v-list>
        <v-list-item v-for="[icon, text, route] in links" :key="icon" :to="route" link>
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      absolute
      color="white"
      elevate-on-scroll
      
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-main>
      <v-container class="py-8 px-6" fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    links: [
      ["mdi-view-dashboard", "Dashboard", "/dashboard"],
      ["mdi-list-box-outline", "Product", "/product"],
    ],
  }),
};
</script>