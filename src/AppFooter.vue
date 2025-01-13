<template>
  <div class="layout-footer" style="color: white;">
    <img alt="Logo" src="res/images/logo-light.svg" height="30" class="mr-1" />
    © 2025 Hew Yi Yun
  </div>
</template>

<script>
export default {
  name: "AppFooter",
  computed: {
    darkTheme() {
      return this.$appState.darkTheme;
    }
  },
};
</script>
