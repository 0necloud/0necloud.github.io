<template>
  <div class="col-12 pt-0">
    <div v-if="!isMidScreen" class="card mb-0 col-12 pt-0 flex">
      <div class="flexwrap justify-content-between mb-3">
        <div>
          <span class="block text-900 font-medium mb-3 mt-4">About Me</span>
          <div class="text-500 font-medium text-xl">
            {{ aboutText }}
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 px-0">
      <div
        class="card"
        style="width: 100%; text-align: center"
      >
        Select content from navigation bar
      </div>
    </div>
  </div>
</template>

<script>
import aboutMe from "../../public/data/aboutme.json";

export default {
  data() {
    return {
      activeContent: "home",
      isFlashing: false,
      windowWidth: window.innerWidth,
      aboutText: aboutMe.bio,
    };
  },
  computed: {
    isMidScreen() {
      return this.windowWidth < 1200 ? true : false;
    },
  },
};
</script>
