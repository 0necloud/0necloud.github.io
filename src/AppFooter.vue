<template>
  <div class="layout-footer" style="color: white;">
    <img alt="Logo" src="images/logo-light.svg" height="30" class="mr-2" />
    Last Updated
    <span class="font-medium ml-2 mr-2">13/10/24</span>
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
