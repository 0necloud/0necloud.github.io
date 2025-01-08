<template>
  <div class="layout-footer" style="color: white;">
    <img alt="Logo" src="res/images/logo-light.svg" height="30" class="mr-2" />
    Last Updated
    <span class="font-medium ml-2 mr-2">08/01/25</span>
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
