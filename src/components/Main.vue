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

    <info-wrapper v-if="showInfo" :title="selectedData.title" :url="selectedData.url" :date="selectedData.date"
      :images="selectedData.images" :description="selectedData.description" @close="closeInfo()" />

    <div class="col-12 px-0">
      <div class="card text-900 font-medium" style="width: 100%; text-align: center; font-size: large;">
        Check out some of my works!
        <ul class="list-none m-0 p-0 grid flex mt-3">
          <li v-for="data in featured" :key="data.title" class="col-12 sm:col-6 md:col-4 m-0 project-listing"
            @click="openInfo(data)">
            <div class="card h-full" align="center" style="
              box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
              backdrop-filter: blur(5px) brightness(85%);
              border: 1px solid rgba(255, 255, 255, 0.3);
            ">
              <img :src="data.images[0]" class="pb-4" style="
                height: 240px;
                width: 100%;
                object-fit: cover;
              " />
              <h4 class="p-0 mt-1">
                {{ data.title }}
              </h4>
              <h5 class="p-0 mt-1 text-indigo-300">
                {{ data.badges.join(", ") }}
              </h5>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import aboutMe from "../../public/res/data/aboutme.json";
import featuredContent from "../../public/res/data/featured.json";
import InfoWrapper from "./InfoWrapper.vue";

export default {
  data() {
    return {
      activeContent: "home",
      isFlashing: false,
      windowWidth: window.innerWidth,
      aboutText: aboutMe.bio,
      featured: featuredContent.data,
      showInfo: false,
      selectedData: {},
    };
  },

  methods: {
    openInfo(data) {
      this.showInfo = true;
      this.selectedData = data;
    },
    closeInfo() {
      this.showInfo = false;
    },
  },

  computed: {
    isMidScreen() {
      return this.windowWidth < 1200 ? true : false;
    },
  },

  components: {
    InfoWrapper,
  },
};
</script>
