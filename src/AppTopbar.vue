<template>
  <div class="layout-topbar" :style="topbarColor">
    <router-link to="/" class="layout-topbar-logo" style="width: 100%; height: 100%;">
      <img alt="Logo" :src="topbarImage" style="max-height: 100%; object-fit: contain;"/>
      <span>0necloud</span>
    </router-link>

    <button class="p-link layout-topbar-menu-button">
      <ChangeTheme />
    </button>
  </div>
</template>

<script>
import ChangeTheme from "./ChangeTheme";
export default {
  components: {
    ChangeTheme,
  },
  computed: {
    topbarColor() {
      return this.$appState.darkTheme
        ? "background-color: #1e1e1e"
        : "background-color: #eff3f8";
    },
    topbarImage() {
      return this.$appState.darkTheme
        ? "res/images/logo-light.svg"
        : "res/images/logo-dark.svg";
    },
  },
};
</script>
