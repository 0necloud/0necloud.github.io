<template>
  <div class="col-12 pt-0">
    <div class="card">
      <div class="flex flex-wrap justify-content-between align-items-center mb-3">
        <h4 class="sm:m-0 mb-4">Resume</h4>
        <span>
          <Button label="" type="button" icon="pi pi-chevron-left" @click="decreasePage()"
            class="mr-2 p-button-outlined"></Button>
          <Button label="" type="button" icon="pi pi-chevron-right" @click="increasePage()"
            class="mr-2 p-button-outlined"></Button>
        </span>
      </div>

      <pdf src="res/docs/Resume - Public.pdf" :page="pageNumber" class="overflow-hidden">
        loading content here...
      </pdf>
    </div>
  </div>
</template>

<script>
import pdf from "pdfvuer";
export default {
  data() {
    return {
      pageNumber: 1,
    };
  },
  methods: {
    increasePage() {
      if (this.pageNumber + 1 < 3) {
        this.pageNumber++;
      }
    },
    decreasePage() {
      if (this.pageNumber - 1 > 0) {
        this.pageNumber--;
      }
    },
  },
  components: {
    pdf,
  },
};
</script>