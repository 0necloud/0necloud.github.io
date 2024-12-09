<template>
  <div class="col-12 pt-0">
    <div class="card" :style="experience_background_img">
      <div
        class="flex flex-wrap justify-content-between align-items-center mb-3"
      >
        <h4 class="sm:m-0 mb-4">Experience</h4>
      </div>
      <!-- CONTENT -->
      <ul class="list-none m-0 p-0">
        <li
          v-for="data in experienceData"
          :key="data.institute"
          class="card flex flex-wrap col-12"
          style="
            /* background-color: rgba(255, 255, 255, 0.2); */
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(5px) brightness(85%);
            border: 1px solid rgba(255, 255, 255, 0.3);
          "
          @click="openInfo()"
        >
          <div class="col-12 sm:col-3 flex justify-content-center">
            <img
              :src="data.image"
              style="height: 175px; width: 175px; object-fit: cover; padding: 5px;"
            />
          </div>
          <div class="col-12 sm:col-9">
            <div
              class="col-12 flex flex-wrap ml-2"
              style="border-bottom: 1px solid rgba(255, 255, 255, 0.5)"
            >
              <h3 class="col-12 lg:col-7 p-0 mt-1">
                {{ data.organisation }}
              </h3>
              <h4 class="col-12 lg:col-5 p-0 mt-1">
                {{ data.position }}
              </h4>
            </div>
            <div class="col-12 flex flex-wrap ml-2">
              <h5 class="col-12 lg:col-2 p-0 mt-1">Period:</h5>
              <p class="col-12 lg:col-10 p-0 mt-1">
                {{ data.date }}
              </p>

              <h5 class="col-12 lg:col-2 p-0 mt-3">Tasks:</h5>
              <div class="col-12 lg:col-10 p-0 mt-3">
                <ol>
                  <li v-for="task in data.tasks" :key="task">
                    {{ task }}
                  </li>
                </ol>
              </div>

              <h5 class="col-12 lg:col-2 p-0 mt-3">Skills:</h5>
              <div class="col-12 lg:col-10 p-0 mt-3">
                <ol>
                  <li v-for="skill in data.skills" :key="skill">
                    {{ skill }}
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import experienceData from "../../public/data/experience.json";

export default {
  data() {
    return {
      experienceData: experienceData.data,
    };
  },
  computed: {
    experience_background_img() {
      // return "background-image: url('layout/images/experience_bg.jpg'); background-size:cover; background-position:center; border-top: 1px solid green;";
      return "";
    },
  },
  methods: {
    openInfo() {
      this.showInfo = true;
    },
    closeInfo() {
      this.showInfo = false;
    },
  },
};
</script>

<style scoped>
/* div {
  color: white;
} */
</style>