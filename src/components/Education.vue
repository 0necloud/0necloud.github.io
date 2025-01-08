<template>
  <div class="col-12 pt-0">
    <div class="card" :style="education_background_img">
      <div class="flex flex-wrap justify-content-between align-items-center mb-3">
        <h4 class="sm:m-0 mb-4">Education</h4>
      </div>

      <!-- CONTENT -->
      <ul class="list-none m-0 p-0">
        <li v-for="data in educationData" :key="data.institute" class="card flex flex-wrap col-12" style="
            /* background-color: rgba(255, 255, 255, 0.2); */
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(5px) brightness(85%);
            border: 1px solid rgba(255, 255, 255, 0.3);
          ">
          <div class="col-12 sm:col-3 flex justify-content-center">
            <img :src="data.image" style="height: 175px; width: 175px; object-fit: cover; padding: 10px;" />
          </div>
          <div class="col-12 sm:col-9">
            <div class="col-12 flex flex-wrap" style="border-bottom: 1px solid rgba(255, 255, 255, 0.5)">
              <h3 class="col-12 lg:col-7 p-0 mt-1">
                {{ data.institute }}
              </h3>
              <h4 class="col-12 lg:col-5 p-0 mt-1">
                {{ data.grade }}
              </h4>
            </div>
            <div class="col-12 flex flex-wrap">
              <h5 class="col-12 lg:col-2 p-0 mt-1">Attended:</h5>
              <p class="col-12 lg:col-10 p-0 mt-1">
                {{ data.attended }}
              </p>
              <h5 class="col-12 lg:col-2 p-0 mt-1 mb-0">CCA(s):</h5>
              <div class="col-12 lg:col-10 p-0 mt-1">
                <ol class="list-none">
                  <li v-for="cca in data.cca" :key="cca" style="list-style-type: '➣ ';">{{ cca }}
                  </li>
                </ol>
              </div>

              <h5 class="col-12 lg:col-2 p-0 mt-3">Awards:</h5>
              <div class="col-12 lg:col-10 p-0 mt-3">
                <ol>
                  <li v-for="award in data.awards" :key="award">
                    {{ award }}
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
import educationData from "../../public/res/data/education.json";

export default {
  data() {
    return {
      educationData: educationData.data,
    };
  },
  computed: {
    education_background_img() {
      // return "background-image: url('layout/images/education_bg.jpg'); background-size:cover; background-position:center; border-top: 1px solid blue;";
      return "";
    },
  },
};
</script>

<style scoped>
/* div {
  color: white;
} */
</style>
