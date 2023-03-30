
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

      <!-- <v-toolbar-title>Title</v-toolbar-title> -->
      <v-col lg="6" cols="12">
        <v-form class="mt-6">
          <v-text-field rounded outlined dense placeholder="Search..." append-icon="mdi-magnify" />
        </v-form>
      </v-col>

      <v-spacer></v-spacer>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <span v-bind="attrs" v-on="on" style="cursor:pointer" class="mx-5 mr-10">
            <v-badge offset-x="10" offset-y="10" color="red" content="3">
              <v-icon>mdi-bell</v-icon>
           </v-badge>  
          </span>
        </template>
        <v-list three-line width="500">
          <template v-for="(item, index) in items">
            <v-subheader
              v-if="item.header"
              :key="item.header"
              v-text="item.header"
            ></v-subheader>

            <v-divider
              v-else-if="item.divider"
              :key="index"
              :inset="item.inset"
            ></v-divider>

            <v-list-item
              v-else
              :key="item.title"
            >
              <v-list-item-avatar>
                <v-img :src="item.avatar"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-html="item.title"></v-list-item-title>
                <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
    </v-menu>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
          <span v-bind="attrs" v-on="on" style="cursor:pointer" class="mx-5 mr-10">
            <v-chip link>
              <v-badge dot bottom color="green" offset-y="10" offset-x="10">
                <v-avatar size="40">
                  <v-img src="https://randomuser.me/api/portraits/women/81.jpg" />
                </v-avatar>
              </v-badge>
            <span class="ml-3">Admin</span>
          </v-chip>
          </span>
        </template>
        <v-list width="250" class="py-0">
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Admin</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        <v-list-item link v-for="(menu, i) in menus" :key="i">
          <v-list-item-icon>
            <v-icon>{{ menu.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            {{ menu.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
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
      ["mdi-account", "Account"],
      ["mdi-list-box-outline", "Product", "/product"],
      ["mdi-clipboard-list", "Order"],
      ["mdi-cog-outline", "Setting"],
    ],
    menus: [
        { title: "Profile", icon: "mdi-account" },
        { title: "Change Password", icon: "mdi-key" },
        { title: "Setting", icon: "mdi-cog" },
        { title: "Logout", icon: "mdi-logout" },
      ],
    items: [
        { header: 'Today' },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        },
      ],
  }),
};
</script>