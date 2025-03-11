<template>
  <v-app>
    <v-card class="header">
      <v-app-bar>
        <v-app-bar-nav-icon
          icon="mdi-menu"
          class="rounded-0 h-100 ml-0 menuBtn bg-darkprimary"
          @click.stop="rail = !rail"
        ></v-app-bar-nav-icon>
        <!-- 平台logo start -->
        <div class="logoImg d-flex align-center">
          <v-img class="logo" src="~@/assets/images/logo.png" alt="" />
          <v-img
            aspect-ratio="1/1"
            class=""
            cover
            src="~@/assets/images/logo_text.png"
          ></v-img>
        </div>
        <!-- 平台logo end -->
      </v-app-bar>
    </v-card>
    <v-navigation-drawer
      v-model="drawer"
      :class="['navDrawer', { hidden: rail }]"
      :rail="rail"
      permanent
      :rail-width="railWidth"
      :width="240"
      @click="rail = false"
    >
      <v-list
        density="compact"
        nav
        class="text-navText"
        :opened="opened"
        @update:opened="menuTarget"
      >
        <v-list-group value="Home1">
          <template v-slot:activator="{ props }">
            <v-list-item
              prepend-icon="mdi-checkbox-multiple-marked-outline"
              v-bind="props"
              append-icon=""
              title="簽收作業"
              @click="pushLink('/front/card')"
            >
            </v-list-item>
          </template>
        </v-list-group>
        <v-list-group value="Home2">
          <template v-slot:activator="{ props }">
            <v-list-item
              prepend-icon="mdi-application-edit-outline"
              v-bind="props"
              append-icon=""
              title="活動管理"
              @click="pushLink('/front')"
            >
            </v-list-item>
          </template>
        </v-list-group>
      </v-list>
      <div class="userInfo">
        <v-avatar image="~@/assets/images/account.jpg" size="35"></v-avatar>
        <ul class="">
          <li>Elle Wang</li>
          <li>企劃處</li>
        </ul>
        <v-btn variant="text" size="small" icon="mdi-logout"></v-btn>
      </div>
    </v-navigation-drawer>
    <v-main>
      <div>
        <pageView />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import pageView from "./pageView.vue";
import { useTheme } from "vuetify";
export default {
  data: () => ({
    tab: null,
    drawer: true,
    rail: false,
    value: 0,
    windowWidth: "",
    railWidth: "1",
    opened: ["Home2"],
    overlay: false,
    isSmallScreen: window.innerWidth < 768,
  }),
  components: {
    pageView,
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
      this.isSmallScreen = window.innerWidth < 991;
    },
    menuTarget(newOpened) {
      this.opened = newOpened.slice(-1);
    },
    pushLink(item) {
      this.$router.push({ path: item });
    },
  },

  mounted() {
    this.windowWidth = window.innerWidth;
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  },
};
</script>
