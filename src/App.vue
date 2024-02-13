<template>
  <div :class="containerClass" @click="onWrapperClick">
    <AppTopBar />

    <div class="layout-main-container" :style="backgroundOpacity">
      <div class="layout-main">
        <router-view />
      </div>
      <AppFooter />
      <!-- Footer component -->
    </div>

    <transition name="layout-mask">
      <div
        class="layout-mask p-component-overlay"
        v-if="mobileMenuActive"
      ></div>
    </transition>
  </div>
</template>

<script>
import AppTopBar from "./AppTopbar.vue";
// import AppMenu from './AppMenu.vue';
import AppFooter from "./AppFooter.vue";

export default {
  emits: ["change-theme"],
  data() {
    return {
      layoutMode: "static",
      staticMenuInactive: false,
      overlayMenuActive: false,
      mobileMenuActive: false,
      menu: [
        {
          items: [
            { label: "Main", icon: "pi pi-fw pi-home", to: "/" },
            { label: "Resume", icon: "pi pi-fw pi-cog", to: "/AAA" },
            { label: "Education", icon: "pi pi-fw pi-book", to: "/AAA" },
            { label: "Experience", icon: "pi pi-fw pi-user", to: "/AAA" },
          ],
        },
      ],
    };
  },
  watch: {
    $route() {
      this.menuActive = false;
      this.$toast.removeAllGroups();
    },
  },
  methods: {
    onWrapperClick() {
      if (!this.menuClick) {
        this.overlayMenuActive = false;
        this.mobileMenuActive = false;
      }

      this.menuClick = false;
    },
    onMenuToggle() {
      // hamburger icon
      this.menuClick = true;

      if (this.isDesktop()) {
        if (this.layoutMode === "overlay") {
          if (this.mobileMenuActive === true) {
            this.overlayMenuActive = true;
          }

          this.overlayMenuActive = !this.overlayMenuActive;
          this.mobileMenuActive = false;
        } else if (this.layoutMode === "static") {
          this.staticMenuInactive = !this.staticMenuInactive;
        }
      } else {
        this.mobileMenuActive = !this.mobileMenuActive;
      }

      event.preventDefault();
    },
    onLayoutChange(layoutMode) {
      this.layoutMode = layoutMode;
    },
    addClass(element, className) {
      if (element.classList) element.classList.add(className);
      else element.className += " " + className;
    },
    removeClass(element, className) {
      if (element.classList) element.classList.remove(className);
      else
        element.className = element.className.replace(
          new RegExp(
            "(^|\\b)" + className.split(" ").join("|") + "(\\b|$)",
            "gi"
          ),
          " "
        );
    },
    isDesktop() {
      return window.innerWidth >= 992;
    },
  },

  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
    backgroundOpacity() {
      return this.$appState.darkTheme
        ? "background-color: rgba(18, 18, 18, 0.7);"
        : "background-color: rgba(239, 243, 248, 0.3);";
    },
    containerClass() {
      return [
        "layout-wrapper",
        {
          "layout-overlay": this.layoutMode === "overlay",
          "layout-static": this.layoutMode === "static",
          "p-input-filled": this.$primevue.config.inputStyle === "filled",
          "p-ripple-disabled": this.$primevue.config.ripple === false,
        },
      ];
    },
    logo() {
      return this.$appState.darkTheme
        ? "images/logo-light.svg"
        : "images/logo.svg";
    },
  },
  beforeUpdate() {
    if (this.mobileMenuActive)
      this.addClass(document.body, "body-overflow-hidden");
    else this.removeClass(document.body, "body-overflow-hidden");
  },
  components: {
    AppTopBar: AppTopBar,
    // 'AppMenu': AppMenu,
    // 'AppConfig': AppConfig,
    AppFooter: AppFooter,
  },
};
</script>

<style lang="scss">
@import "./App.scss";
body {
  background-image: url("/layout/images/app.gif"); //https://i.pinimg.com/originals/45/d0/79/45d0790c293e5dba3077f4ad0c4826c6.gif
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* Prevent horizontal overflow */
}

.container {
  max-width: 1200px; /* Adjust the value based on your preference */
  margin: 0 auto; /* Center the container */
}

// @media screen and (min-width: 1024px) {
//   /* Apply styles for laptops and larger devices */
//   body {
//     max-height: 100vh; /* Set a maximum height of 100% viewport height */
//     overflow-y: hidden; /* Add vertical scrollbar if necessary */
//   }
// }
</style>
