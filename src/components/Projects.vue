<template>
  <div class="col-12 pt-0">
    <div class="card" :style="projects_background_img">
      <div
        class="flex flex-wrap justify-content-between align-items-center mb-3"
      >
        <h4 class="sm:m-0 mb-4" style="text-shadow: 2px 2px black">Projects</h4>
      </div>
      <info-wrapper
        v-if="showInfo"
        :title="selectedData.title"
        :url="selectedData.url"
        :date="selectedData.date"
        :images="selectedData.images"
        :description="selectedData.longDesc"
        @close="closeInfo()"
      />
      <!-- CONTENT -->
      <ul class="list-none m-0 p-0 grid flex">
        <li
          v-for="data in projectsData"
          :key="data.institute"
          class="col-12 lg:col-4 m-0 project-listing"
          @click="openInfo(data)"
        >
          <div
            class="card"
            align="center"
            style="
              background-color: rgba(255, 255, 255, 0.2);
              box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
              backdrop-filter: blur(5px) brightness(85%);
              border: 1px solid rgba(255, 255, 255, 0.3);
              text-shadow: 0.5px 0.5px black
            "
          >
            <img
              :src="data.images[0]"
              class="pb-4"
              style="
                height: 180px;
                width: 180px;
                object-fit: cover;
                border-bottom: 1px solid rgba(255, 255, 255, 0.5);
              "
            />
            <h4 class="p-0 mt-1" >
              {{ data.title }}
            </h4>
            <h5 class="p-0 mt-1 text-blue-100">
              {{ data.shortDesc }}
            </h5>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import projectsData from "../../public/data/projects.json";
import InfoWrapper from "./InfoWrapper.vue";

export default {
  data() {
    return {
      projectsData: projectsData.data,
      showInfo: false,
      selectedData: {},
    };
  },
  computed: {
    projects_background_img() {
      return "background-image: url('layout/images/projects_bg.jpg'); background-size:cover; background-position:center; border-top: 1px solid red;";
    },
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
  components: {
    InfoWrapper,
  },
};
</script>

<style scoped>
div {
  color: white;
}

.project-listing:hover {
  filter: saturate(70%);
}
</style>

