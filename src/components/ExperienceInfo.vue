<template>
  <info :description="'aaaaa'">
    <div class="flex flex-wrap p-fluid formgrid grid md:m-3">
      <div
        class="col-12 mb-3 align-items-center justify-content-center flex"
      >
        <div class="col-12 md:col-6">
          <div
            class="flex flex-wrap justify-content-center align-items-center"
            style="border: 1px solid purple"
          >
            {{ description }}
          </div>
        </div>
        <div class="col-12 md:col-6">
          <div
            class="flex flex-wrap justify-content-center align-items-center"
            style="border: 1px solid purple"
          >
            {{ description }}
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