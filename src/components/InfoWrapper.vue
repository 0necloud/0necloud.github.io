<template>
  <info :description="'aaaaa'">
    <div class="flex flex-wrap p-fluid formgrid grid md:m-3">
      <div class="col-12 mb-3 grid flex">
        <div class="col-12 md:col-6">
          <div
            class="flex flex-wrap justify-content-center align-items-center"
            style="border: 1px solid purple"
          >
            <img
              :src="images[0]"
              style="
                max-width: 60%;
                max-height: 60%;
                object-fit: cover;
                border-bottom: 1px solid rgba(255, 255, 255, 0.5);
              "
            />
          </div>
        </div>
        <div class="col-12 md:col-6">
          <h2 class="pt-4 pb-2 col-6">
            {{ title }}
          </h2>
          <h5 class="pl-2">{{ date }}</h5>
          <div
            class="flex flex-wrap justify-content-center align-items-center p-4"
            style="border: 1px solid purple"
          >
            <ScrollPanel
              class="ml-4 text-500 font-medium text-l"
              style="width: 100%; height: 250px"
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
  components: {
    Info,
  },
};
</script>