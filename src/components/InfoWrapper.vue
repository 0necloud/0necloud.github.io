<template>
  <info>
    <div class="flex flex-wrap p-fluid formgrid grid md:m-3">
      <div class="col-12 mb-3 grid flex pl-4">
        <div
          class="col-12 md:col-6"
        >
          <div class="flex flex-wrap justify-content-center align-items-center">
            <Carousel
              :value="images"
              :numVisible="1"
              :numScroll="1"
              class="pt-4"
            >
              <template #item="slotProps">
                <div class="mb-3">
                  <div class="relative flex justify-content-center">
                    <img
                      :src="slotProps.data"
                      style="max-width: 100%; object-fit: scale-down;"
                      class="center-block m-0 flex"
                    />
                  </div>
                </div>
              </template>
            </Carousel>
          </div>
        </div>
        <div class="col-12 md:col-6 pl-4">
          <a :href="url" :onclick="disableRedirection(url)" target="_blank">
            <h2 class="pt-4 col-6 pl-0" style="width: 100%">
              {{ title }}
            </h2>
          </a>
          <h5 class="pl-0">{{ date }}</h5>
          <div
            class="flex flex-wrap justify-content-center align-items-center p-0"
          >
            <ScrollPanel
              class="text-500 font-medium text-l"
              style="width: 100%; height: 250px; white-space: pre-line"
            >
              {{ description }}
            </ScrollPanel>
          </div>
        </div>
      </div>
    </div>
  </info>
</template>

<script>
import Info from "./Info.vue";

export default {
  props: {
    images: {
      type: Array,
      required: false,
    },
    url: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: false,
    },
    date: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
  },
  methods: {
    disableRedirection(url) {
      return url === "#" ? "return false;" : "return true;";
    }
  },
  components: {
    Info,
  },
};
</script>

<style scoped>
h2:hover {
  text-decoration: underline;
}
</style>